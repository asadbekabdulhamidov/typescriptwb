"use strict";
let userObj = {
    id: 12,
    name: 'asadbek',
    isAdmin: true,
};
function printProduct(p) {
    console.log(`${p.name} - $${p.price}`);
}
printProduct({ name: 'asadbek', price: 123 });
const emp = {
    name: 'Ali',
    age: 28,
    jobTitle: 'Frontend Developer',
};
const user1 = {
    id: 12,
    name: 'Asadbek',
    isAdmin: true,
};
let prod = {
    name: 'koptok',
    price: 123,
};
let prod1 = {
    name: 'koptok',
    price: 123,
    discount: false,
};
let orderStatus = 'pending';
let dev = {
    name: 'asadbek',
    age: 25,
    skills: ['html', 'css'],
};
let u = {
    id: 23,
    name: 'asadbek',
};
let bird = {
    name: 'tiger',
    legs: 4,
    canFly: false,
};
let book1 = {
    title: 'olimga mahkum qilinganar',
    author: 'Nuriddin ismoilov',
    pages: 350,
    isPublished: false,
};
function getWelcomeMessage(user) {
    let result = '';
    if (user.role === 'admin') {
        result = 'Welcome, admin!';
        return result;
    }
    else if (user.role === 'user') {
        result = 'Hello, user!';
        return result;
    }
    else if (user.role === 'guest') {
        result = 'Please log in';
        return result;
    }
    else {
        result = 'Please log in';
        return result;
    }
}
getWelcomeMessage({ id: '123', name: 'asadbek', role: 'admin' });
getWelcomeMessage({ id: '123', name: 'asadbek', role: 'guest' });
getWelcomeMessage({ id: '123', name: 'asadbek', role: 'user' });
function printUserInfo(user) {
    console.log(`${user?.name} (${user?.gender}) lives in ${user?.address?.city}, on ${user?.address?.street} street. ZIP: ${user?.address?.zipCode}`);
}
printUserInfo({
    id: 12,
    name: 'asadbek',
    gender: 'male',
    address: { street: 'marifat street', city: 'fergana', zipCode: 1234 },
    isActive: true,
});
