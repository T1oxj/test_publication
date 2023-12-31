const container = document.getElementById('container');

let setRows = (row_count) => {
  for (let i = 0; i < row_count; i++) {
    const row = document.createElement('p');
    row.textContent = "row";
    container.appendChild(row);
    console.log(i);
  }
}

let setArr = new Promise((resolve) => {
  let arr = [];
  setTimeout(() => {
    for (let i = 0; i < 6; i++) {
      arr[i] = Math.random();
    }
    resolve(arr);
  }, 2000);
});



let fillRows = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const child = container.children[i];
    child.textContent = `row ${[i]}`;
  }
}

setRows(6);
function RPC(callback) {
  // setRows(6);
  callback
    .then((arr) => {
      return arr;
    })
    .then(fillRows);
  // .then(fillRows);
}

RPC(setArr);

let serverCall = (data) => {
  console.log(data);
}

let setData = (callback) => {
  setTimeout(() => {
    const data = [42543, 4636343141, "gjsfksgjs"];
    callback(data);
  }, 2000);
}

setData(serverCall);

let funcReverse = (a) => {
  return function (b) {
    return function (c) {
      a + b + c;
    }
  }
}

console.log(funcReverse(4, 5, 6));

let a_a = 10;
let b_b = 23;

let test = (param1) => {
  return test2 = () => {
    param1 + 10;
  }
}

let bindContext = (context, func) => {
  return function (...args) {
    func.apply(context, args);
  }
}

const log1 = { name: "user", ip: 21344342 };
const log2 = { name: "hacker", ip: 498359348693 };

function showLogs() {
  // console.log(this.name, this.ip);
}

bindContext(log1, showLogs)();

const obj = { id: "ifd23", val: 3354 };


function logs() {
  // console.log(this.id, this.val);
}

logs.apply(obj);
logs();

// console.log(test(a_a)());




function fillHandler(handler, count) {
  for (let i = 0; i < count; i++) {
    handler[i] = `Str${i}`;
  }
  console.log("handler", handler);
}

let handler = {};
fillHandler(handler, 5);

let displayAll = (variable) => {
  console.log(variable);
}


let time = 2000;
// getLoadParams(variableParams => {
//   if (variableParams.object == "formObject") {
//     console.log("ThisObject");
//   }
//   displayAll(variableParams);
// });


getLoadParams(function (variable) {
  if (variable.object == "formObject") {
    console.log("ThisObject");
  }
  displayAll(variable);
});


fillHandler(handler, 5);


function getLoadParams(callback) {
  setTimeout(() => {
    let params = {};
    let formLoadParams = {};
    formLoadParams.object = "formObject";
    formLoadParams.formName = "formName";
    params.formParams = "fullWindow";
    callback(formLoadParams);
  }, time)
}


let consoleData = (data, params) => {
  console.log(data);
  console.log(params());
}


function getData(callback) {
  const data = { key1: 445, key2: 3545, key: 540548540 };
  callback(data, function () {
    console.log("done");
  });
}

getData(consoleData,);