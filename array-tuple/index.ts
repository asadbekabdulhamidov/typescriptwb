// Number array bilan yig‘indi topish
// let numArr: number[] = [1, 3, 4];

// let sum = numArr.reduce((acc, curVal) => {
//   return acc + curVal;
// }, 0);

// console.log(sum);

//===========================================

// Foydalanuvchining ismi va yoshi saqlanadigan tuple yarating.

// let user: [string, number] = ['Asadbek', 25];

// console.log(Array.isArray(user));

//=================================================

// 4. Union array yarating
// Vazifa: Faqat string yoki number turlaridagi qiymatlarni saqlovchi array yarating.

// let unionArr: (string | number)[] = ['asadbek', 25];
// console.log(unionArr);

//=====================================================
// 5. Tuple bilan funksiya yozin
// Vazifa: [string, number] qabul qiluvchi funksiya yozing va konsolga chiqarilsin.

// function printUser(user: [string, number]): void {
//   console.log(`Name: ${user[0]} ,Age: ${user[1]}`);
// }
// printUser(['Asadbek', 24]);

//==================================================
// 6. Array ichidagi barcha string’larni katta harfga o‘tkazing
// let langs: string[] = ['js', 'ts', 'py'];
// let upper = langs.map((l) => l.toUpperCase());
// console.log(upper);

//======================================================
// function getData(): [string, number] {
//   return ['Result', 42];
// }
// let [msg, val] = getData();
// console.log(msg, val); // "Result", 42

//=====================================
// 1-masala: User list with type alias and union
// Vazifa:
// Quyidagicha bo‘lishi kerak:
// User nomli type alias yarating. U quyidagi maydonlarga ega bo‘lsin:
// name: string
// e: number
// status: "active" yoki "inactive" (union literal type)
// users nomli User[] tipidagi array yarating (kamida 3 ta user bilan)

// type User = {
//   name: string;
//   e: number;
//   status: 'active' | 'inactive';
// };

// const users: User[] = [
//   { name: 'asadbek', e: 12, status: 'inactive' },
//   { name: 'inomjon', e: 21, status: 'active' },
//   { name: 'doston', e: 22, status: 'inactive' },
// ];

// users.forEach((item) => {
//   console.log(`${item.name} (${item.e}) -${item.status}`);
// });

//=================================================
// 2-masala: Mahsulotlar ro‘yxati (tuple + interface)
// 📌 Vazifa:
// Product nomli interface yarating. U quyidagi maydonlarga ega bo‘lsin:
// id: number
// title: string
// price: number
// Har bir mahsulotga tegishli [Product, boolean] ko‘rinishida tuple array yarating. Bu yerda:
// Product — mahsulot ma’lumotlari
// boolean — mahsulot chegirmada (true/false)
// Kamida 3 ta mahsulot bo‘lsin.

// interface Product {
//   id: number;
//   title: string;
//   price: number;
// }

// let products: [Product, boolean][] = [
//   [{ id: 1, title: 'koptok', price: 10 }, true],
//   [{ id: 2, title: 'futbolka', price: 7 }, false],
//   [{ id: 3, title: 'shim', price: 8 }, false],
// ];

// products.forEach(([product, isDiscounted]) => {
//   //   console.log(product);
//   //   console.log(isDiscounted);
//   console.log(
//     `Mahsulot: ${product.title} - Narxi: ${product.price} - Chegirmada: ${isDiscounted}`
//   );
// });

//===============================================

// 3-masala: Student baholari (tuple + union + type)
// 📌 Vazifa:
// Grade nomli type yarating. U number yoki 'pass' yoki 'fail' bo‘lishi mumkin.
// Student nomli type yarating. U [string, Grade] shaklida bo‘lsin. Ya’ni:
// Ism (string)
// Bahosi (Grade)
// students nomli Student[] array yarating (kamida 3 ta o‘quvchi bilan).

// type Grade = number | 'pass' | 'fail';
// type Student = [string, Grade];

// let students: Student[] = [
//   ['Asadbek', 5],
//   ['Inom', 'pass'],
//   ['Doston', 'fail'],
// ];

// students.forEach(([name, bahosi]) => {
//   console.log(name, '-', bahosi);
// });

//=============================================
// Status nomli type yarating. U quyidagilardan biri bo‘lishi mumkin:
// 'discount' (chegirmada)
// 'new' (yangi)
// 'sold' (sotilgan)
// Product nomli type yarating — object ko‘rinishida:
// name: string
// price: number
// status: Status
// products: Product[] — kamida 5 ta mahsulotdan iborat array tuzing.
// .filter() yordamida faqat chegirmadagi ('discount') mahsulotlarni ajratib oling va quyidagicha konsolga chiqaring:

// type Status = 'discount' | 'new' | 'sold';
// type Product = {
//   name: string;
//   price: number;
//   status: Status;
// };

// let product: Product[] = [
//   { name: 'shim', price: 12, status: 'new' },
//   { name: 'KRASOFKA', price: 13, status: 'sold' },
//   { name: 'futbolka', price: 14, status: 'discount' },
// ];
// product.filter((item) => {
//   if (item.status === 'discount') {
//     console.log(
//       `Mahsulot: ${item.name} - Narxi: ${item.price} - Holati: ${item.status}`
//     );
//   }
// });

//===========================================
// Har bir ishchi quyidagi ma’lumotlarga ega:
// Ismi (string)
// Ish haqi (number)
// Bularni [string, number] formatida tuple ko‘rinishida yozing.
// workers: [string, number][] tipida array yarating (kamida 4 ishchi bilan).
// .map() yordamida ularning ish haqiga 10% ustama (bonus) qo‘shing va quyidagicha konsolga chiqaring:

// const workers: [string, number][] = [
//   ['asadbek', 400],
//   ['Sarvarbek', 300],
//   ['Shohjahon', 700],
//   ['doston', 600],
// ];

// const newWorkers = workers.map((item) => [item[0], item[1] * 1.1]);
// newWorkers.forEach(([name, price]) =>
//   console.log(`Ishchi: ${name} - Yangi ish haqi: ${price}
// `)
// );

// //==========================================
// 6-masala: Foydalanuvchilar va umumiy aktiv balans
// 📌 Vazifa:
// User nomli type yarating. Quyidagilarni o‘z ichiga oladi:
// name: string
// balance: number
// active: boolean
// users: User[] nomli array yarating (kamida 4 foydalanuvchi bilan).
// .filter() orqali faqat active: true bo‘lgan foydalanuvchilarni ajrating.
// .reduce() orqali ularning umumiy balance qiymatini hisoblang.

// type User = {
//   name: string;
//   balance: number;
//   active: boolean;
// };

// let users: User[] = [
//   { name: 'Asadbek', balance: 123, active: true },
//   { name: 'Inomjon', balance: 432, active: false },
//   { name: 'Dostonbek', balance: 345, active: true },
//   { name: 'Hamidullo', balance: 1234, active: false },
// ];

// let userActive = users.filter((item) => item.active);
// let usersBalance = userActive.reduce((acc, curVal) => {
//   return acc + curVal.balance;
// }, 0);
// console.log(`Aktiv foydalanuvchilarning umumiy balansi: ${usersBalance}
// `);

//=============================================================

// 7-masala: O‘quvchilar ro‘yxati va email xabarnoma
// 📌 Vazifa:
// Student nomli interface yarating. Quyidagi maydonlarga ega bo‘lsin:
// name: string
// email?: string (❗️ optional — ba'zilarida bo‘lmasligi mumkin)
// [Student, number] ko‘rinishidagi tuple[] yarating:
// Bu yerda Student — o‘quvchi,
// number — olingan ball.
// students: [Student, number][] nomli array yarating (kamida 4 ta entry bilan, ba’zilarida email bo‘lmasin).
// .map() yordamida emaili bor o‘quvchilarga xabar yuborish uchun quyidagicha konsolga chiqaring:

// interface Student {
//   name: string;
//   email?: string;
// }

// let students: [Student, number][] = [
//   [{ name: 'asadbek', email: 'asadbek@gmail.com' }, 4],
//   [{ name: 'inom', email: 'inom@gmail.com' }, 2],
//   [{ name: 'doston' }, 5],
//   [{ name: 'hamid' }, 3],
// ];

// let newStudents = students.map(([item, num]) => {
//   if (item.email) {
//     console.log(`Email yuborildi: ${item.email} - Ball: ${num}`);
//   }
// });

//====================================

// 8-masala: Rollar va ularni o‘zgartirib bo‘lmasligi
// 📌 Vazifa:
// Role nomli literal type yarating. U faqat quyidagi qiymatlardan biri bo‘lishi mumkin:
// 'admin'
// 'moderator'
// 'user'
// roles: readonly Role[] tipida array yarating, ya’ni bu array o‘zgarmas bo‘lishi kerak.
// Arrayni forEach bilan aylanib, har bir rolda quyidagicha chiqaring:

type Role = 'admin' | 'moderator' | 'user';

const roles: readonly Role[] = ['admin', 'user', 'moderator'];

roles.forEach((role) => {
  if (role === 'admin') {
    console.log(`Role ${role}- tizimga to‘liq kirish ruxsati`);
  } else if (role === 'user') {
    console.log(`Role: ${role} — oddiy foydalanuvchi`);
  } else {
    console.log(`Role ${role}`);
  }
});
