"use strict";
// 1-Topshiriq: Primitive turdagi ma’lumotlar
// Quyidagi o‘zgaruvchilarni yarating va to‘g‘ri tur bilan tiplang:
// Ismingizni o‘z ichiga olgan o‘zgaruvchi
let nameUser = 'Asadbek';
// Yoshingizni bildiruvchi o‘zgaruvchi
let age = 25;
// Haqiqiy (boolean) qiymat: siz dasturchimisiz?
let isDeveloper = true;
// 2-Topshiriq: union type bilan o‘zgaruvchi
let id;
id = 101; // OK
id = 'user_99'; // OK
// 3-Topshiriq: Funksiya bilan union type
function printValue(value) {
    // agar string bo‘lsa katta harfga o‘tkazib chiqaring
    if (typeof value === 'string') {
        console.log(value.toUpperCase());
    }
    else if (typeof value === 'number') {
        console.log(value * 2);
    }
    // agar number bo‘lsa 2 ga ko‘paytirib chiqaring
}
printValue(12);
printValue('asadbek');
//=====================================
let mixedArray = ['Asadbek', 24, 'developer', 180];
for (let item of mixedArray) {
    if (typeof item === 'string') {
        console.log(`${item} is a string`);
    }
    else if (typeof item === 'number') {
        console.log(`${item} is a number`);
    }
}
// ✅ 1-topshiriq: union type bilan foydalanuvchi holati
// Quyidagi status o‘zgaruvchini yarating va unga "online" yoki "offline" qiymatlaridan birini beriladigan qilib union orqali tip belgilang.
// 🧩 Talab:
// status faqat "online" yoki "offline" qiymatlaridan birini qabul qilsin.
// console.log orqali ekranga holatni chiqaring.
let statusI;
statusI = 'offline';
console.log(statusI);
//=================================================
// 2-topshiriq: union va function bilan tip tekshirish
// Quyidagi talabga mos funksiya yarating:
// 🧩 Talab:
// logUserId nomli funksiya yarating.
// U parametr sifatida number | string (userId) oladi.
// Agar number bo‘lsa, User ID (number): <id> deb chiqarsin.
// Agar string bo‘lsa, User ID (string): <id> deb chiqarsin.
// ✅ Misollar:
function logUserId(value) {
    if (typeof value === 'string') {
        console.log('User ID (string): <id> deb chiqarsin.');
    }
    else if (typeof value === 'number') {
        console.log('User ID (number): <id> deb chiqarsin.');
    }
}
logUserId(101); // User ID (number): 101
logUserId('user_99'); // User ID (string): user_99
//====================================
// Endi 3-topshiriq: Massivda union ishlatish
// 🧩 Talab:
// values nomli array yarating.
// Bu massivda string va number aralash qiymatlar bo‘lsin.
// Har bir elementni aylanib chiqib:
// Agar number bo‘lsa, uni 10 ga ko‘paytirib chiqaring.
// Agar string bo‘lsa, uni katta harfga o‘tkazib chiqaring.
let arr = ['hello', 1, 'user', 2];
arr.forEach((item) => {
    if (typeof item === 'string') {
        console.log(item.toUpperCase());
    }
    else if (typeof item === 'number') {
        console.log(10 * item);
    }
});
deb;
union;
tur;
yarating.
;
// 3 ta User yarating: biri "admin", biri "user", biri "guest" rolida.
// Har bir foydalanuvchini console.log bilan chiqaring.
let user1 = {
    username: 'asadbek',
    role: "admin"
};
let user2 = {
    username: 'Inomjon',
    role: "user"
};
let user3 = {
    username: 'Doston',
    role: "guest"
};
//================================
// Funksiya orqali User rollarini tekshirish
// 🧩 Talab:
// Yuqoridagi User tipidan foydalaning.
// checkPermission nomli funksiya yarating, u User tipidagi parametr qabul qiladi.
// Agar role "admin" bo‘lsa: "Full access" chiqarsin.
// "user" bo‘lsa: "Limited access" chiqarsin.
// "guest" bo‘lsa: "Read-only access" chiqarsin.
function checkPermission(value) {
    if (value.role === 'admin')
        console.log("Full access");
    else if (value.role === 'user')
        console.log("Limited access");
    else if (value.role === 'guest')
        console.log("Read-only access");
}
checkPermission(user1); // Full access
checkPermission(user3); // Read-only access
function describeShape(value) {
    switch (value) {
        case 'circle':
            console.log("It's a circle");
            break;
        case 'circle':
            console.log("It's a square");
            break;
        case 'circle':
            console.log("It's a triangle");
            break;
    }
}
describeShape("circle"); // It's a circle
describeShape("square"); // It's a square
describeShape("triangle"); // It's a triangle
