window.addEventListener('click', () => {
  document.querySelector('.slide-page').remove()
})


// let arr = [1,2,3]
// function duplicate(a) {
//   return a.concat(a)
// }
// console.log(duplicate(arr))

// for(var i = 0; i < 100; i ++) {
//   if(i % 3 == 0 && i % 5 == 0) {
//     console.log('fizbuzz')
//   } else if (i % 3 == 0) {
//     console.log('fizz')
//   } else if (i % 5 == 0) {
//     console.log('buzz')
//   } else {
//     console.log(i)
//   }
// }

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }
// class Student extends Person {
//   constructor(name, studentId) {
//     super(name);
//     this.studentId = studentId;
//   }
// }
// let obj1 = new Person;
// let obj2 = new Student;
// console.log(obj1, obj2);

// const rgb = [255, 200, 0]
// const [red, green, blue] = rgb
// console.log(`R: ${red}, G: ${green}, B: ${blue}`)
// const student = {
//   firstname: 'Glad',
//   lastname: 'Chinda',
//   country: 'Nigeria'
// }
// const {firstname, lastname, country} = student
// console.log(firstname, lastname, country)

// var person = {name: 'Yusup', age: 30}
// console.log(`Hi, my name in ${person.name} and I am ${person.age} years old.`)

// function curry(fn) {
//   if(fn.length === 0) {
//     return fn
//   }
//   function _curried(depth, args) {
//     return function (newArgument) {
//       if (depth - 1 === 0) {
//         return fn(...args, newArgument)
//       }
//       return _curried(depth -1, [...args, newArgument])
//     }
//   }
//   return _curried(fn.length, [])
// }
// function add(a, b) {
//   return a + b
// }
// var curriedAdd = curry(add)
// var addFive = curriedAdd(5)
// var result = [0, 1, 2, 3, 4, 5].map(addFive)
// console.log(result)

// var foo = 10 + '20'
// console.log(foo)

// console.log(0.1 + 0.2 == 0.3)

// function add(a, b) {
//   return a && b ? a + b : function (c) {return a + c}
// }
// console.log(add(2, 5), add(2)(5))

// console.log("i'm a lasagna hog".split("").reverse().join(""))

// console.log((window.foo || (window.foo = 'bar')))

// var foo = "Hello";
// (function() {
//   var bar = " World";
//   alert(foo+bar);
// })();
// alert(foo + bar)

// var foo = [];
// foo.push(1);
// foo.push(2);
// console.log(foo);

// var foo = {n: 1};
// var bar = foo;
// foo.x = foo = {n: 2};
// console.log(foo.x);

// console.log('one');
// setTimeout(function() {
//   console.log('two');
// }, 0);
// Promise.resolve().then(function() {
//   console.log('three');
// })
// console.log('four');