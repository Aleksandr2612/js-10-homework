// №1 

// let sum = 0;

// function calcSum(num1, num2, ...other) {
//     sum = num1 + num2;
//     console.log(sum);
//     console.log(other);
// }

// calcSum(12, 7, 100, 200, 44);



// №2

// let drivers = ["Dominic", "Brian", "Letty", "Roman"]
// let antagonists = ["Deckard", "Luke"]

// let family = drivers.concat(antagonists);
// console.log(family);


// let family = [];
// family.push.apply(family, drivers);
// family.push.apply(family, antagonists);
// console.log(family);


// console.log(drivers.length);
// let family = drivers;
// family.splice(4, 0, "Deckard", "Luke");
// console.log(family);



// let family = [];

// function newFamily(arr1, arr2) {
//     arr1.forEach(item => {
//         if (arr1 !== arr2) {
//             family.push(item)
//         }
//         arr2.forEach(item => {
//             if (item !== family) {
//                 family.push(item)
//             }
//         })
//     });
//     return console.log(family);
// };
// newFamily(drivers, antagonists);




// drivers.push(...antagonists);
// console.log(drivers);


// let family = [...drivers, ...antagonists];
// console.log(family);



// №3

// let cars = ["Jeep", "Jeep", "Kia", "BMW", "BMW", "BMW", "Renault"]

// let uniqueNameCar = [...new Set(cars)];
// console.log(uniqueNameCar);


// №4


// function create(country) {

//     return function(city) {
//         return [city + " " + country];
//     }
//     console.log(newArr);
// };
// let result = create("Ukrain");
// console.log(result("Kiev"));

// №5
// let time = 1654420481877;

// let date = new Date(time);
// console.log(date);


// function getOurTime(time) {
//     const date = new Date(time)
//     let year = date.getFullYear();
//     let month = date.getMonth() + 1 < 10 ? `0${date.getMonth() +1}` : date.getMonth() + 1;
//     let day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
//     let ouhr = date.getHours();
//     let minuts = date.getMinutes();


//     return `${year}/${month}/${day} (${ouhr}:${minuts})`

// }
// let result = getOurTime(time);
// console.log(result);