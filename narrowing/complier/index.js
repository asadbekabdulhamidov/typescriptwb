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
// masala: Product Search — narrowing bilan yozilgan
// ❗ Agar itemda price bo‘lsa — bu Product
//    Agar itemda duration bo‘lsa — bu Service
//    Unga qarab console.log chiqaring:
// 🎯 Product bo‘lsa:
// "Mahsulot: Nomi: ..., Narxi: ... so'm"
// 🎯 Service bo‘lsa:
// "Xizmat: Nomi: ..., Davomiyligi: ... soat"
// type Product = {
//   id: number;
//   name: string;
//   price: number;
// };
// type Service = {
//   id: number;
//   name: string;
//   duration: number; // soatlarda
// };
// type Item = Product | Service;
// function showItemDetails(item: Item) {
//   if ('price' in item) {
//     console.log(`Nomi:${item.name} , Narxi:${item.price} so'm`);
//   } else {
//     console.log(
//       `Xizmat: Nomi: ${item.name}, Davomiyligi: ${item.duration}soat`
//     );
//   }
// }
// // Testlar:
// showItemDetails({ id: 1, name: 'Laptop', price: 12000000 });
// showItemDetails({ id: 2, name: 'Webinar', duration: 2 });
//=======================================================
// Function Overload nima?
// Bir xil nomdagi funksiyani turli parameterlar bilan chaqira olishimiz va TypeScriptga har bir holatda qanday qiymat qaytishini aytishimiz.
// function combine(a: number, b: number): number;
// function combine(a: string, b: string): string;
// function combine(a: any, b: any): any {
//   if (typeof a === 'string' && typeof b === 'string') {
//     return a + ' ' + b;
//   } else if (typeof a === 'number' && typeof b === 'number') {
//     return a + b;
//   }
// }
// Agar ikkala argument number bo‘lsa — number qaytaradi
// Agar string bo‘lsa — string qaytaradi
// TypeScript funksiya tanasiga kirguncha nima kutayotganini biladi
//==============================================
// ➕ Ushbu funksiyani overload bilan yozing
// 1) Agar ikkita number bo‘lsa — ularni qo‘shib qaytarsin
// 2) Agar ikkita string bo‘lsa — ularni vergul bilan ajratib qaytarsin
// 3) Boshqa holatlarda — xatolik bo‘lsin
// function combine(a: number, b: number): number;
// function combine(a: string, b: string): string;
// function combine(a: any, b: any): any {
//   // ❗ typeof bilan tekshiruv yozing
//   if (typeof a === 'number' && typeof b === 'number') {
//     return a + b;
//   } else if (typeof a === 'string' && typeof b === 'string') {
//     return a + ' ' + b;
//   } else {
//     throw new Error('Parameter is not valid!');
//   }
// }
// // Testlar:
// console.log(combine(5, 10)); // 👉 15
// console.log(combine('Hello', 'JS')); // 👉 "Hello,JS"
//=============================
// never bilan exhaustive check
// type Animal =
//   | { type: 'cat'; meow(): void }
//   | { type: 'dog'; bark(): void }
//   | { type: 'bird'; tweet(): void }
//   | { type: 'fish'; swim(): void };
// // ❗ Har bir hayvon uchun mos funksiyani chaqaring
// // ❗ Agar yangi tur qo‘shib unutib qo‘ysangiz — `never` sizni ogohlantirsin
// function handleAnimal(animal: Animal) {
//   switch (animal.type) {
//     case 'cat':
//       animal.meow();
//       break;
//     case 'dog':
//       animal.bark();
//       break;
//     case 'bird':
//       animal.tweet();
//       break;
//     case 'fish':
//       animal.swim();
//       break;
//     default:
//       const _exhaustive: never = animal;
//       return _exhaustive;
//   }
// }
//===============================================
// type Role = 'Admin' | 'User' | 'Moderator' | 'Guest';
// function handleAction(prop: Role): void {
//   if (prop === 'Admin') {
//     console.log('Tizim Sozlanmoqda');
//   } else if (prop === 'Guest') {
//     console.log('Faqat korish mumkin');
//   } else if (prop === 'Moderator') {
//     console.log('psotlar tasdiqanmoda');
//   } else {
//     console.log('Post yozilmoqda');
//   }
// }
// console.log(handleAction('Admin'));
// enum Role {
//   Admin = 'Admin',
//   User = 'User',
//   Moderator = 'Moderator',
//   Guest = 'Guest',
// }
// function handleAction(role: Role): void {
//   switch (role) {
//     case Role.Admin:
//       console.log('Tizim sozlanmoqda');
//       break;
//     case Role.Guest:
//       console.log('Faqat koʻrish mumkin');
//       break;
//     case Role.Moderator:
//       console.log('Postlar tasdiqlanmoqda');
//       break;
//     case Role.User:
//       console.log('Post yozilmoqda');
//       break;
//     default:
//       // Hech qanday mos kelmagan holat uchun
//       const exhaustiveCheck: never = role;
//       throw new Error(`Unexpected role: ${exhaustiveCheck}`);
//   }
// }
//===================================
var Role;
(function (Role) {
    Role["Admin"] = "admin";
    Role["User"] = "user";
    Role["Guest"] = "guest";
})(Role || (Role = {}));
function renderActions(user) {
    switch (user.role) {
        case Role.Admin:
            console.log(`🛠 Edit | 🗑 Delete`);
            break;
        case Role.User:
            console.log(`🛠 Edit `);
            break;
        case Role.Guest:
            console.log(`👀 view only`);
            break;
        default:
            const exhaustiveCheck = user.role;
            throw new Error(exhaustiveCheck);
    }
}
console.log(renderActions({ name: 'Asadbek', role: Role.Admin }));
console.log(renderActions({ name: 'Asadbek', role: Role.Guest }));
console.log(renderActions({ name: 'Asadbek', role: Role.User }));
