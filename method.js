/* 1. Filter
Metode ini membuat array baru dengan hanya elemen yang melewati kondisi di dalam fungsi yang disediakan. */
const arr = [1, 2, 3, 4, 5, 6];

  // item(s) greater than 3
  const filtered = arr.filter(num => num > 3);
  console.log(filtered);                           // output: [4, 5, 6]

/* 2. Includes
Metode ini memeriksa apakah array menyertakan item yang diteruskan dalam method. */
// const arr = [1, 2, 3, 4, 5, 6] ;
// array = (num) => {
//  let result = arr.includes(num)
//  console.log(result)
// }
//   array(5);                          // output: true
//   array(7);                          // output: false

/* 3. Reduce
Metode reduce bertujuan untuk mengembalikan nilai tunggal: hasil akumulasi fungsi.
tidak menjalankan fungsi untuk elemen array kosong dan tidak mengubah array yang asli. */
// const arr = [1, 2, 3, 4, 5, 6];

// const sum = arr.reduce((total, value) => total + value, 0);
// console.log(sum);        // 21

// 4. Pop merupakan metode untuk menghapus elemen terakhir dari array: 
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.pop();
// console.log(fruits)

// 5. Push merupakan metode untuk menambahkan elemen baru ke array (diakhir)
// const buah = ["Banana", "Orange", "Apple", "Mango"];
// buah.push("Kiwi");
// console.log(buah)

/* 6. some
Metode ini memeriksa apakah setidaknya satu item array melewati kondisi tersebut. 
Jika lulus, itu mengembalikan 'true' jika tidak maka 'false' */
// const arr = [1, 2, 3, 4, 5, 6];

//   // at least one element is greater than 4?
//   const largeNum = arr.some(num => num > 5);
//   console.log(largeNum); // output: true

//   // at least one element is less than or equal to 0?
//   const smallNum = arr.some(num => num <= 0);
//   console.log(smallNum); // output: false

/* 7. Sort
Metode ini digunakan untuk mengatur/mengurutkan item array baik secara ascending maupun descending. */

// const arr = [1, 2, 3, 4, 5, 6];
// const alpha = ['e', 'a', 'c', 'u', 'y'];

// // sort in descending order
//   descOrder = arr.sort((a, b) => a > b ? -1 : 1);
//   console.log(descOrder); // output: [6, 5, 4, 3, 2, 1]

// // sort in ascending order
//   ascOrder = alpha.sort((a, b) => a > b ? 1 : -1);
//   console.log(ascOrder); // output: ['a', 'c', 'e', 'u', 'y']

/* 8. Array From
Ini mengubah semua hal yang mirip array atau dapat diubah menjadi array yang benar terutama ketika bekerja dengan DOM,
sehingga kita dapat menggunakan metode array lain seperti reduce, map, filter, dan sebagainya. */
// const name = 'frugence';
// const nameArray = Array.from(name);

//   console.log(name);        // output: frugence
//   console.log(nameArray);   // output: ['f', 'r', 'u', 'g', 'e', 'n', 'c', 'e']

/* 9. Array of 
Ini membuat array dari setiap argumen yang diteruskan ke dalamnya. */
// const nums = Array.of(1, 2, 3, 4, 5, 6);
//   console.log(nums); // output: [1, 2, 3, 4, 5, 6]

/* 10. every
Metode ini memeriksa apakah semua item array melewati kondisi tersebut.
Jika lulus, itu mengembalikan 'true' jika tidak 'false'. */
// const arr = [1, 2, 3, 4, 5, 6];

// // all elements are greater than 4
// const greaterFour = arr.every(num => num > 4 );
// console.log(greaterFour); // output: false

// // all elements are less than 10
// const lessTen = arr.every(num => num < 10);
// console.log(lessTen); // output: true