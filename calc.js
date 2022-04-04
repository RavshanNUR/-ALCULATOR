function calculator(str) {
      let son = str.split(" ");
   
      const rimNum = {
        C:100,
        XC:90,
        L:50,
        XL:40,
        X:10,
        IX:9,
        VIII:8,
        VII:7,
        VI:6,
        V:5,
        IV:4,
        III:3,
        II:2,
        I:1,
      };
   
      let leter = [];
      str = str.replace(/[^IVXLC\d-+*\/]/gi, (ch) => {
      if (ch !== " ") leter.push(ch);
        return "";
      });
    
    
      if( str == "    " || str == '+')
        throw Error (" Некорректные данные")
    
      if (leter.length > 0)
        throw Error("Символи не допустимы, Вы ввели это: " + leter);
    
    
      let vars = str.split(/[+\-*\/]/g);
    
      if (vars.length !== 2) throw Error("Должно быть 2 операнда");
      let natija;
     
      function rim2arab(ar1=son[0],operator=son[1],ar2=son[2]){
           let  result1 ="";
           let  result2 ="";
           for (let key in rimNum) {
           if (ar2 == key){
               
              result2 =+ rimNum[key];
              }
              if (ar1 == key){
              result1 =+ rimNum[key];
           };
          
           if (operator == '+'){
             natija = result1 + result2
             }else if(operator == '-'){
               natija = result1 - result2
             }else if(operator == '*'){
               natija = result1 * result2
             }else if(operator == '/'){
               natija = Math.floor( result1 / result2);
             }
           }
           if (result1 < 1 || result1 > 10) {
             throw Error("Допустимое значение операндов от I до X включительно");
            };
           if (result2 < 1 || result2 > 10) {
             throw Error("Допустимое значение операндов от I до X включительно");
            };
       
         return natija;
      
        };
        function arab2rome(nat) {
            rim2arab()
     
           if (natija < 1) return "";
            let result = "";
            for (key in rimNum)
                while (natija >= rimNum[key]) {
                   result += key;
                    natija -= rimNum[key];
                }
      
          return result;
       }
    
  
  
        function count(a=son[0],b=son[1],c=son[2]){
            
            if (Number(a) < 1 || Number(a) > 10) {
            throw Error (" операндов должен быть от 1 до 10 включительно")
            };
            
            if (Number(c) < 1 || Number(c) > 10) {
            throw Error (" операндов должен быть от 1 до 10 включительно")
            };
            
            if (b ==="+"){
               let result = +(a) + +(c);
               return result.toString();
            }else if (b==="-"){
                let result = +(a) - +(c);
                 return result.toString();
            }else if (b==="*"){
                let result = +(a) * +(c);
                 return result.toString();
            }else if (b==="/"){
                let result = +(a) / +(c);
                  return Math.floor(result).toString()
            }
              
        }
  
        const isRome = /[IIIVIIIXLC]/i;
       
        const r = vars.reduce((s, k) => s + isRome.test(k),0);
          if (r == 1)
          throw Error("Оба числа должны быт записаны арабскими или римскими цифрами");
        // else if (r == 2)
         
 
     return r ==0 ? count() : arab2rome()
  }


console.log(calculator("3 * 7"));
console.log(calculator("10 / 3"));
console.log(calculator("IX + II"));
console.log(calculator("X / III"));
