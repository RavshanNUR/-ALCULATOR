console.log("Hello, World!");
function calc(str) {
  let son = str.split(" ");
  // console.log(son);
  // console.log(son.length);
  if (son.length !== 3) {
    throw Error(" Должна быть 2 операнда");
  }

  const rimNum = {
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    VIII: 8,
    VII: 7,
    VI: 6,
    V: 5,
    IV: 4,
    III: 3,
    II: 2,
    I: 1,
  };
  //   if (son[0]==Number){
  //     console.log("Ura")
  //   count();
  //   }else rim2arab(),arab2rome(natija);
  // // }else if(son[0]==rimNum[k] && son[2]==rimNum[k]){
  // }
  // }
  let natija;

  function rim2arab(ar1 = son[0], operator = son[1], ar2 = son[2]) {
    let result1 = "";
    let result2 = "";
    for (let key in rimNum) {
      if (ar2 == key) {
        //console.log(key);
        // console.log(rimNum[key]);
        result2 = +rimNum[key];
      }
      if (ar1 == key) {
        // console.log(key);
        // console.log(rimNum[key]);
        result1 = +rimNum[key];
      }

      if (operator == "+") {
        natija = result1 + result2;
      } else if (operator == "-") {
        natija = result1 - result2;
      } else if (operator == "*") {
        natija = result1 * result2;
      } else if (operator == "/") {
        natija = result1 / result2;
      }
    }
    // console.log(typeof (natija))
    // console.log(natija)

		
    return natija;
  }
  function arab2rome(nat) {
    // console.log(nat)
    if (natija < 1) return " ";
    let result = "";
    for (key in rimNum)
      while (natija >= rimNum[key]) {
        result += key;
        natija -= rimNum[key];
      }

    return result;
  }

  function count(a = son[0], b = son[1], c = son[2]) {
    if (Number(a) < 1 || Number(a) > 10) {
      throw Error(" операндов должен быть от 1 до 10 включительно");
    }

    if (Number(c) < 1 || Number(c) > 10) {
      throw Error(" операндов должен быть от 1 до 10 включительно");
    }

    if (b === "+") {
      let result = +a + +c;

      //console.log(result);
      return result.toString();
    } else if (b === "-") {
      let result = +a - +c;

      // console.log(result);
      return result.toString();
    } else if (b === "*") {
      let result = +a * +c;

      // console.log(result);
      return result.toString();
    } else if (b === "/") {
      let result = +a / +c;

      // console.log(result);
      console.log(typeof result);
      return result.toString();
    }

    // count();
  }

  // return count()
  return rim2arab() && arab2rome();
}

console.log(calc("3 * 7"));
console.log(calc("IX + II"));
console.log(calc("IX + II"));
console.log(calc("IX + II"));
