// Синтаксис async/await
// Последовательные операции
// Паралельные операции с Promise.all()
// try...catch

// Типы запеси async
// const fn = async function() { }; //Function Expression

// async function() {} // Function Declaration

// const arr = async() => {} // Стрелочная функция

// const x = {
// async getName() {} // Метод объекта
// }

// Class X {
// async getName() {} // Метод класса
// }

// function getFruit(name) {
//   const fruits = {
//     strawberry: '🍓',
//     kiwi: '🥝',
//     apple: '🍎',
//   };
//   return new Promise(resolve => setTimeout(() => resolve(fruits[name]), 500));
//   //   return 5;
// }
// // getFruit('apple').then(apple => console.log(apple));

// async function aMakeSmoothie() {
//   //   console.time('aMakeSmoothie');
//   const apple = getFruit('apple');
//   const kiwi = getFruit('kiwi');
//   const berry = getFruit('strawberry');

//   const fruits = await Promise.all([apple, kiwi, berry]);

//   //   console.log(apple);
//   //   console.log(kiwi);
//   //   console.timeEnd('aMakeSmoothie');
//   console.log(fruits);
// }
// aMakeSmoothie();

// function asyncMakeSmoothie() {
//   getFruit('apple').then(apple => {
//     console.log(apple);
//     getFruit('kiwi').then(kiwi => {
//       console.log(kiwi);
//     });
//   });
// }
// asyncMakeSmoothie();
