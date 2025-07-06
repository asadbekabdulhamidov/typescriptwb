interface IUser {
  id: number;
  name: string;
  isAdmin: boolean;
}

let userObj: IUser = {
  id: 12,
  name: 'asadbek',
  isAdmin: true,
};

// Functionda type aliasdan foydalaning
type Product = {
  name: string;
  price: number;
};

function printProduct(p: Product): void {
  console.log(`${p.name} - $${p.price}`);
}

printProduct({ name: 'asadbek', price: 123 });

// Interface kengaytirish (extends)
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  jobTitle: string;
}

const emp: Employee = {
  name: 'Ali',
  age: 28,
  jobTitle: 'Frontend Developer',
};

//    1-MASALA: User turini type bilan yarating
// Vazifa: User degan type yarating. Unda quyidagilar bo‘lsin:
// id: number
// name: string
// isAdmin: boolean
// 🔧 Yozing:
type User = {
  id: number;
  name: string;
  isAdmin: boolean;
};

const user1: User = {
  id: 12,
  name: 'Asadbek',
  isAdmin: true,
};

//====================================
// 2-MASALA: Interface bilan Product yozing
// Vazifa: Product degan interface yarating. Quyidagilar bo‘lsin:
// name: string
// price: number
// discount?: optional boolean (ya'ni majburiy emas)

interface Product {
  name: string;
  price: number;
  discount?: boolean;
}

let prod: Product = {
  name: 'koptok',
  price: 123,
};

let prod1: Product = {
  name: 'koptok',
  price: 123,
  discount: false,
};

//========================================
// 3-MASALA: Type alias orqali Status yarating
// Vazifa: Status degan type yarating va faqat quyidagi qiymatlar bo‘lishi kerak:

// "pending", "approved", "rejected"

// Keyin orderStatus degan o‘zgaruvchiga Status turini bering.

type Status = 'pending' | 'approved' | 'rejected';
let orderStatus: Status = 'pending';

//=============================================
// 4-MASALA: Interface kengaytirish (extends)
// Vazifa:
// Person interface: name, age
// Developer interface: Persondan meros olib, skills: string[]

interface Person {
  name: string;
  age: number;
}
interface Developer extends Person {
  skills: string[];
}

let dev: Developer = {
  name: 'asadbek',
  age: 25,
  skills: ['html', 'css'],
};

// 5-MASALA: Type alias + Interface birga ishlatish
// Vazifa:
// type ID = string | number
// User interface yarating: id: ID, name: string

type ID = string | number;

interface USer {
  id: ID;
  name: string;
}
let u: USer = {
  id: 23,
  name: 'asadbek',
};

//==========================================
// Savol:
// Quyidagicha type yarating:
// Animal degan type, unda:
// name: string
// legs: number
// canFly: boolean
// So‘ng let bird degan o‘zgaruvchi yarating va Animal turidan qiymat bering.

type Animal = {
  name: string;
  legs: number;
  canFly: boolean;
};

let bird: Animal = {
  name: 'tiger',
  legs: 4,
  canFly: false,
};

//====================================

// Savol:
// Book degan interface yozing, unda:
// title: string
// author: string
// pages: number
// isPublished?: optional boolean
// So‘ng let book1 degan o‘zgaruvchi yarating va qiymat bering (faqat isPublishedsiz).

interface Book {
  title: string;
  author: string;
  pages: number;
  isPublished?: boolean;
}

let book1: Book = {
  title: 'olimga mahkum qilinganar',
  author: 'Nuriddin ismoilov',
  pages: 350,
  isPublished: false,
};

//===========================================
// ❓ Vazifa:
// Quyidagilarni bajaring:
// type Role = "admin" | "user" | "guest" yarating
// interface User quyidagilarni o‘z ichiga olsin:
// id: string
// name: string
// role: Role turida bo‘lishi kerak
// getWelcomeMessage(user: User): string funksiyasini yozing, u quyidagicha ishlasin:
// Agar role = "admin" bo‘lsa → "Welcome, admin!"
// "user" bo‘lsa → "Hello, user!"
// "guest" bo‘lsa → "Please log in"

type Role = 'admin' | 'user' | 'guest';
interface UserInfo {
  id: string;
  name: string;
  role: Role;
}

function getWelcomeMessage(user: UserInfo): string {
  let result = '';
  if (user.role === 'admin') {
    result = 'Welcome, admin!';
    return result;
  } else if (user.role === 'user') {
    result = 'Hello, user!';
    return result;
  } else if (user.role === 'guest') {
    result = 'Please log in';
    return result;
  } else {
    result = 'Please log in';
    return result;
  }
}

getWelcomeMessage({ id: '123', name: 'asadbek', role: 'admin' });
getWelcomeMessage({ id: '123', name: 'asadbek', role: 'guest' });
getWelcomeMessage({ id: '123', name: 'asadbek', role: 'user' });

//========================================
// 🔥 7-MASALA: UserProfile tizimi
// ❓ Vazifa:
// type Gender = "male" | "female" | "other"

// interface Address yarating, quyidagilar bo‘lsin:
// street: string
// city: string
// zipCode: number
// interface UserProfile yarating, quyidagilar bo‘lsin:
// id: number
// name: string
// gender: Gender
// address: Address (nested object)
// isActive?: optional boolean
// function printUserInfo(user: UserProfile): void funksiyasini yozing. U quyidagicha ma'lumot chiqaradi:

type Gender = 'male' | 'female' | 'other';
interface Address {
  street: string;
  city: string;
  zipCode: number;
}

interface UserProfile {
  id: number;
  name: string;
  gender: Gender;
  address: Address;
  isActive?: boolean;
}

function printUserInfo(user: UserProfile): void {
  console.log(
    `${user?.name} (${user?.gender}) lives in ${user?.address?.city}, on ${user?.address?.street} street. ZIP: ${user?.address?.zipCode}`
  );
}
printUserInfo({
  id: 12,
  name: 'asadbek',
  gender: 'male',
  address: { street: 'marifat street', city: 'fergana', zipCode: 1234 },
  isActive: true,
});
