"use strict";
// Number array bilan yig‘indi topish
// let numArr: number[] = [1, 3, 4];
const roles = ['admin', 'user', 'moderator'];
roles.forEach((role) => {
    if (role === 'admin') {
        console.log(`Role ${role}- tizimga to‘liq kirish ruxsati`);
    }
    else if (role === 'user') {
        console.log(`Role: ${role} — oddiy foydalanuvchi`);
    }
    else {
        console.log(`Role ${role}`);
    }
});
