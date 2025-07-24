"use strict";
// Masala: Foydalanuvchi rollarini boshqarish
// Tavsif:
// Sizga quyidagi talablar berilgan:
// Role degan enum yarating (Admin, User, Guest).
// User degan interface yarating:
// name: string
// role: Role
// logAccess(user: User): void funksiyasini yozing:
// Agar Admin bo‘lsa: "👑 Admin: to‘liq ruxsat"
// Agar User bo‘lsa: "🙋 User: cheklangan ruxsat"
// Agar Guest bo‘lsa: "👤 Guest: faqat ko‘rish mumkin"
// Boshqa holat bo‘lsa: never bilan exhaustive check qiling.
// 3ta turli User obyektini yaratib, funksiyaga uzating.
var Role;
(function (Role) {
    Role["Admin"] = "Admin";
    Role["User"] = "User";
    Role["Guest"] = "Guest";
})(Role || (Role = {}));
function logAccess(user) {
    switch (user.role) {
        case Role.Admin:
            console.log('👑 Admin: to‘liq ruxsat');
            break;
        case Role.User:
            console.log('🙋 User: cheklangan ruxsat');
            break;
        case Role.Guest:
            console.log('👤 Guest: faqat ko‘rish mumkin');
            break;
        default:
            const check = user.role;
    }
}
logAccess({ name: 'Asadbek', role: Role.Admin });
logAccess({ name: 'Doston', role: Role.Guest });
logAccess({ name: 'Hamid', role: Role.User });
//========================================================
// Masala: Kirish tekshiruvchi tizim (AccessChecker)
// Tavsif:
// AccessLevel degan enum yarating:
// SuperAdmin
// Admin
// User
// Banned
// checkAccess(level: unknown): void degan funksiya yozing:
// Avval level ning turi string yoki AccessLevel ekanini tekshiring.
// switch orqali:
// SuperAdmin — "🔥 Full access granted" chiqarsin
// Admin — "🔐 Admin access granted"
// User — "🙋 Limited access"
// Banned — "❌ No access. You are banned!"
// Agar hech biriga to‘g‘ri kelmasa: never bilan exhaustive check qiling.
var AccessLevel;
(function (AccessLevel) {
    AccessLevel["Admin"] = "Admin";
    AccessLevel["SuperAdmin"] = "SuperAdmin";
    AccessLevel["User"] = "User";
    AccessLevel["Banned"] = "Banned";
})(AccessLevel || (AccessLevel = {}));
function checkAccess(level) {
    if (typeof level !== 'string' ||
        !Object.values(AccessLevel).includes(level)) {
        console.log('❌ Invalid access type');
        return;
    }
    const validLevel = level;
    switch (validLevel) {
        case AccessLevel.Admin:
            console.log('🔐 Admin access granted');
            break;
        case AccessLevel.SuperAdmin:
            console.log('🔥 Full access granted');
            break;
        case AccessLevel.User:
            console.log('🙋 Limited access');
            break;
        case AccessLevel.Banned:
            console.log('❌ No access. You are banned!');
            break;
        default: {
            const _exhaustiveCheck = validLevel;
            return _exhaustiveCheck;
        }
    }
}
checkAccess(AccessLevel.Admin);
checkAccess(AccessLevel.SuperAdmin);
checkAccess(AccessLevel.User);
checkAccess(AccessLevel.Banned);
checkAccess('Hello');
