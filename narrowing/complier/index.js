"use strict";
// 💡 Funksiya `printValue` deb nomlansin
// U `string` yoki `number` tipdagi `val` qiymat qabul qilsin.
// Agar `val` satr bo‘lsa: "Bu satr: ..." deb chiqarsin
// Agar `val` son bo‘lsa: "Bu son: ..." deb chiqarsin
// ❗ typeof operatoridan foydalaning
// function printValue(val: string | number): void {
//   if (typeof val === 'string') {
//     console.log('bu satr', val);
//   } else {
//     console.log('bu son', val);
//   }
// }
// // Testlar:
// printValue('Asadbek'); // 👉 Bu satr: Asadbek
// printValue(42); // 👉 Bu son: 42
//===================================================
// Admin va User tiplari bor
// type Admin = { name: string; privileges: string[] };
// type User = { name: string; email: string };
// // 👉 Bu funksiya har ikki tipni qabul qilsin
// // Agar privileges mavjud bo‘lsa, "Admin" deb chiqarsin
// // Aks holda "User" deb chiqarsin
// function checkAccount(account: Admin | User) {
//   // ❗ bu yerda 'in' operatoridan foydalaning
//   if ('privileges' in account) {
//     console.log('Admin');
//   } else {
//     console.log('User');
//   }
// }
// // Test:
// checkAccount({ name: 'Asadbek', privileges: ['server', 'code'] });
// // 👉 Admin: Asadbek
// checkAccount({ name: 'Dilnoza', email: 'dilnoza@gmail.com' });
// 👉 User: Dilnoza
//=========================================================
// ✅ Ushbu funksiya har ikki turdagi mashinani qabul qiladi.
// Agar Truck bo‘lsa — yuk yuklansin
// Aks holda — haydash boshlansin
// 🔧 Ikkita class bor:
// class Car {
//   drive() {
//     console.log('🚗 Driving...');
//   }
// }
// class Truck {
//   loadCargo() {
//     console.log('📦 Loading cargo...');
//   }
// }
// function useVehicle(vehicle: Car | Truck) {
//   if (vehicle instanceof Car) {
//     vehicle.drive();
//   } else {
//     vehicle.loadCargo;
//   }
// }
// // Test:
// useVehicle(new Car()); // 👉 🚗 Driving...
// useVehicle(new Truck()); // 👉 📦 Loading cargo...
//====================================================
// Ikkita type bor:
// type Circle = {
//   kind: 'circle';
//   radius: number;
// };
// type Square = {
//   kind: 'square';
//   side: number;
// };
// type Shape = Circle | Square;
// // 👉 Bu funksiya turga qarab maydon hisoblab bersin
// // Circle bo‘lsa: π * r^2
// // Square bo‘lsa: side * side
// function calculateArea(shape: Shape): number {
//   // ❗ shape.kind orqali narrowing qiling
//   if (shape.kind === 'circle') {
//     return Math.PI * shape.radius ** 2;
//   } else {
//     return shape.side * shape.side;
//   }
// }
// // Testlar:
// console.log(calculateArea({ kind: 'circle', radius: 5 })); // 👉 78.54 (yoki shunga yaqin)
// console.log(calculateArea({ kind: 'square', side: 4 })); // 👉 16
//=============================================
