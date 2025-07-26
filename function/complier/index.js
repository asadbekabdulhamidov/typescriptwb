"use strict";
// 1-masala: toUpperCase function
// function toUpper(prop: string): string {
//   return prop.toUpperCase();
// }
// const toUpper = function (prop: string): string {
//   return prop.toUpperCase();
// };
// const toUpper = (prop: string): string => {
//   return prop.toUpperCase();
// };
// console.log(toUpper('asadbek'));
//===================================================
// 2-masala: Sonni kvadratga oshiruvchi funksiya yozing
// getSquare nomli funksiya bo‘lsin.
// U bitta son qabul qiladi va kvadratini qaytaradi.
// Tiplar TypeScript asosida to‘liq bo‘lsin.
// function getSquare(prop: number): number {
//   return prop ** 2;
// }
// const getSquare = function (prop: number) {
//   return prop ** 2;
// };
// const getSquare = (prop: number): number => {
//   return prop ** 2;
// };
// console.log(getSquare(2));
//==================================================
// 3-masala: Foydalanuvchiga salom beruvchi funksiya
// 🔸 Shart:
// greet nomli funksiya yozing.
// U bitta parametr qabul qiladi — ism (string), lekin bu parametr majburiy emas (optional).
// Agar ism berilsa — Salom, [ism]! deb chiqarsin.
// Agar ism berilmasa — Salom, mehmon! deb chiqarsin.
// function greet(ism?: string): string {
//   return `Salom, ${ism ? ism : 'mehmon'}!`;
// }
// const greet = function (ism?: string): string {
//   return `Salom, ${ism ? ism : 'mehmon'}!`;
// };
// const greet = (ism?: string): string => `Salom, ${ism ? ism : 'mehmon'}`!;
// console.log(greet('Asadbek'));
// console.log(greet());
//============================================
// 4-masala: ayiruv funksiyasi
// 🔸 Shart:
// ayiruv nomli funksiya yozing.
// U ikkita son qabul qiladi va farqini (a - b) qaytaradi.
// Function tipini alohida type bilan e’lon qiling.
// Barcha tiplar aniq ko‘rsatilgan bo‘lishi kerak.
// type A = number;
// type B = number;
// function ayiruv(a: A, b: B): number {
//   return a - b;
// }
// const ayiruv = function (a: A, b: B): number {
//   return a - b;
// };
// const ayiruv = (a: A, b: B): number => a - b;
//========================================
// 5-masala: bajarish nomli funksiya yozing
// 🔸 Shart:
// bajarish nomli funksiya yozing.
// U bitta parametr qabul qiladi — bu callback function bo‘ladi.
// Callback hech nima qaytarmaydi, faqat console.log("Callback ishladi!") chiqarsin.
// Siz callback funksiyaga TypeScript tipini yozing.
// function bajarish(callback: (prop: string) => string): void {
//   console.log('ish boshlandi');
//   callback('salom callback');
// }
// bajarish((prop: string): string => {
//   return prop;
// });
//=================================================
// 6-masala: salomlash nomli funksiya yozing
// 🔸 Shart:
// Funksiya salomlash deb nomlansin.
// U bitta parametr qabul qiladi: ism (string)
// Agar parametr uzatilsa, Salom, [ism]! deb chiqarsin.
// Agar parametr uzatilmasa, avtomatik "mehmon" deb olsin (default value)
// Barcha typelar TypeScript asosida yozilsin.
// function salomlash(ism: string = 'mehmon'): string {
//   return `Salom ${ism}`;
// }
//==============================================
// 7-masala: foydalanuvchiInfo funksiyasi
// 🔸 Shart:
// foydalanuvchiInfo deb nomlangan funksiya yozing.
// U bitta obyekt parametr qabul qiladi.
// Obyekt quyidagi tuzilishga ega bo‘lsin:
// name: string
// age: number
// isOnline: boolean
// Funksiya quyidagi satrni return qilsin:
// "Asadbek, 25 yoshda. Onlayn: true"
// interface User {
//   name: string;
//   age: number;
//   isOnline: boolean;
// }
// const foydalanuvchiInfo = function (user: User): string {
//   return `${user.name}, ${user.age} yoshda. Onlayn ${user.isOnline}`;
// };
//==========================================================
// 8-masala: Kitob haqida ma'lumot
// 🔸 Shart:
// Book nomli interface yozing:
// title: string — kitob nomi (majburiy)
// author: string — muallif (majburiy)
// year: number — nashr yili (majburiy)
// isbn: string — faqat o‘qish mumkin (readonly)
// pages — optional bo‘lsin (number)
// interface Book {
//   title: string;
//   author: string;
//   year: number;
//   readonly isbn: string;
//   pages?: number;
// }
// const getBookInfo = (book: Book): string => {
//   let info = `${book.title} (${book.author}), ${book.year}-yilda chop etilgan. ISBN: ${book.isbn}.`;
//   if (book.pages !== undefined) {
//     info += ` Sahifalar soni: ${book.pages}.`;
//   }
//   return info;
// };
// const b1 = {
//   title: 'The Pragmatic Programmer',
//   author: 'Andy Hunt',
//   year: 1999,
//   isbn: '123-456',
//   pages: 320,
// };
// console.log(getBookInfo(b1));
//==============================================
// 9-masala: printValue funksiyasi
// 🔸 Shart:
// printValue nomli funksiya yozing.
// U bitta parametr qabul qiladi: bu yoki string, yoki number bo‘ladi (string | number)
// Agar string bo‘lsa — Satr: Asadbek tarzida chiqarilsin.
// Agar number bo‘lsa — Son: 42 tarzida chiqarilsin.
// Funksiya hech nima qaytarmaydi — faqat console.log() ishlatilsin.
// function printValue(val: string | number): void {
//   // bu yerga typeof bilan tekshiruv yozing
//   if (typeof val === 'string') {
//     console.log('Satr', val);
//   } else if (typeof val === 'number') {
//     console.log('Son', val);
//   }
// }
// printValue("Asadbek"); // 👉 Satr: Asadbek
// printValue(42);        // 👉 Son: 42
//========================================================
// 10-masala: combine funksiyasi
// 🔸 Shart:
// combine nomli funksiya yozing.
// U ikki qiymat qabul qiladi, bu qiymatlar:
// Agar ikkalasi ham son bo‘lsa — ularni yig‘indisi qaytarilsin.
// Agar ikkalasi ham string bo‘lsa — ularni birlashtirib qaytarilsin.
// Boshqa holatlarda Error qaytarsin yoki throw qilsin (ixtiyoriy).
// function combine(a: number, b: number): number;
// function combine(a: string, b: string): string;
// function combine(a: any, b: any): any {
//   // bu yerga type checking va return yozing
//   if (typeof a === 'number' && typeof b === 'number') {
//     return a + b;
//   } else if (typeof a === 'string' && typeof b === 'string') {
//     return `${a},${b}`;
//   } else {
//     throw new Error('Unreachable code - type checking should prevent this');
//   }
// }
