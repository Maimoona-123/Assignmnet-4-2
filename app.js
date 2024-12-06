// Map Method()

let array = [42, true, "Hello, world!..", 
    {name: "john",
    age: 25,
    isStudent: false,
},
false,
3.14,
"JavaScript is a fun!..."
];

let stringArr = array.map(String);

console.log(stringArr);


//  Filter Method();


let Array = [42, true, "Hello, world!..", 
    {name: "john",
    age: 25,
    isStudent: false,
},
false,
3.14,
"JavaScript is a fun!..."
];

let numbersOnly = array.filter(item => typeof item === 'number');

console.log(numbersOnly);


// For Each Method();

let Arr = [42, true, "Hello, world!..", 
    {name: "john",
    age: 25,
    isStudent: false,
},
false,
3.14,
"JavaScript is a fun!..."
];

Arr.forEach(element => {
    console.log(typeof element);
  });


//   Reduce Method()

  let reduceArr = [42, true, "Hello, world!..", 
    {name: "john",
    age: 25,
    isStudent: false,
},
false,
3.14,
"JavaScript is a fun!..."
];


let sum = reduceArr.reduce((acc, current) => {
    if (typeof current === 'number') {
      return acc + current;
    }
    return acc;
  }, 0);
  
  console.log(sum);


//   Find Method();


let findArr = [42, true, "Hello, world!..", 
    {name: "john",
    age: 25,
    isStudent: false,
},
false,
3.14,
"JavaScript is a fun!..."
];

let firstBoolean = findArr.find(element => typeof element === 'boolean');

console.log(firstBoolean);


// 

let indexArr = [42, true, "Hello, world!..", 
    {name: "john",
    age: 25,
    isStudent: false,
},
false,
3.14,
"JavaScript is a fun!..."
];


let index = indexArr.findIndex(element => typeof element === 'object' && element !== null);

console.log(index);


// Some Method() ;

let someArr = [42, true, "Hello, world!..", 
    {name: "john",
    age: 25,
    isStudent: false,
},
false,
3.14,
"JavaScript is a fun!..."
];

let containsNumber = someArr.some(element => typeof element === 'number');

console.log(containsNumber); 


// Every Method();

let everyArr = [42, true, "Hello, world!..", 
    {name: "john",
    age: 25,
    isStudent: false,
},
false,
3.14,
"JavaScript is a fun!..."
];


let allStrings = everyArr.every(element => typeof element === 'string');

console.log(allStrings);