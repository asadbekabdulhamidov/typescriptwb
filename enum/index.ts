// enum Role {
//   Admin,
//   User,
//   Guest,
// }

// function getAccess(role: Role): string {
//   // TODO: Har bir rolda qanday ruxsat borligini qaytaring
//   switch (role) {
//     case Role.Admin:
//       return 'Full Access';
//     case Role.User:
//       return 'Limited Access';
//     case Role.Guest:
//       return 'Read only';
//     default:
//       return 'No Access';
//   }
// }

// console.log(getAccess(Role.Admin));
// console.log(getAccess(Role.Guest));
// console.log(getAccess(Role.User));

//=======================================
// TODO: Faqat ish kunlarinigina chiqaring (Monday to Friday)

// enum Weekday {
//   Monday,
//   Tuesday,
//   Wednesday,
//   Thursday,
//   Friday,
//   Saturday,
//   Sunday,
// }

// let weekdays: string[] = [];

// for (let i = Weekday.Monday; i <= Weekday.Friday; i++) {
//   weekdays.push(Weekday[i]);
// }

// console.log(weekdays);

//==========================================

// enum OrderStatus {
//   Pending = 'PENDING',
//   Shipped = 'SHIPPED',
//   Delivered = 'DELIVERED',
//   Cancelled = 'CANCELLED',
// }

// function isFinalStatus(status: OrderStatus): boolean {
//   // TODO: Faqat Delivered yoki Cancelled bo‘lsa true qaytar
//   switch (status) {
//     case OrderStatus.Cancelled:
//       return true;
//     case OrderStatus.Delivered:
//       return true;
//     case OrderStatus.Shipped:
//       return false;
//     case OrderStatus.Pending:
//       return false;
//     default:
//       return false;
//   }
// }

// console.log(isFinalStatus(OrderStatus.Cancelled));
// console.log(isFinalStatus(OrderStatus.Delivered));

//===========================================================

// enum Direction {
//     Up = 1,
//     Down,
//     Left,
//     Right
//   }

//   // TODO: Enumi ichida Left va Down qiymatlarini raqam orqali toping
//   const leftName = Direction[3];  // "Left"
// const downName = Direction[2];  // "Down"

// console.log(leftName); // Left
// console.log(downName); // Down

//=============================================

// enum Language {
//   UZ,
//   RU,
//   EN,
// }

// function greet(lang: Language): string {
//   switch (lang) {
//     case Language.UZ:
//       return 'Salom!';
//     case Language.RU:
//       return 'Privet!';
//     case Language.EN:
//       return 'Hello!';
//     default:
//       return 'Unknown language!';
//   }
// }

// console.log(greet(Language.EN));
// console.log(greet(Language.RU));
// console.log(greet(Language.UZ));

//==================================================
// enum Color {
//   Red,
//   Green,
//   Blue,
// }

// TODO: Enumdagi barcha qiymatlarni massivga yig‘ib chiqaring

// let arr: string[] = [];
// for (let i = Color.Red; i <= Color.Blue; i++) {
//   arr.push(Color[i]);
// }

// const arr1 = Object.keys(Color).filter((key) => isNaN(Number(key))); // faqat enum nomlarini olamiz

// console.log(Object.keys(Color));
// console.log(arr1);

//======================================

// enum PaymentType {
//   Cash = 'CASH',
//   Card = 'CARD',
//   Click = 'CLICK',
// }

// function pay(amount: number, method: PaymentType) {
//   // TODO: Har bir usul uchun turlicha console.log chiqsin
//   switch (method) {
//     case PaymentType.Cash:
//       console.log(`Naqd to'lov qilindi: ${amount} so'm`);
//       break;
//     case PaymentType.Card:
//       console.log(`card to'lov qilindi: ${amount} so'm`);
//       break;
//     case PaymentType.Click:
//       console.log(`click to'lov qilindi: ${amount} so'm`);
//       break;
//     default:
//       console.log(`qochib ketti tolov qilmadi`);
//   }
// }

// pay(1200, PaymentType.Card);
// pay(1100, PaymentType.Cash);
// pay(1300, PaymentType.Click);

//=============================================
// enum Animal {
//   Cat,
//   Dog,
//   Bird,
// }

// // TODO: Son beriladi (0, 1, 2), unga mos hayvon nomini chiqaring

// function getAnimal(id: number): string {
//   return Animal[id];
// }

// console.log(getAnimal(1));
// console.log(getAnimal(2));
// console.log(getAnimal(0));
// console.log(getAnimal(3)); //undefined
//================================================
// enum Step {
//   EnterDetails, // 0
//   ConfirmEmail, // 1
//   Finish, // 2
// }

// // Enum qiymatlarini ko‘rib chiqib, faqat nomlarini olish
// for (const step in Step) {
//   if (isNaN(Number(step))) {
//     // faqat kalit (string) bo‘lganlarini olamiz
//     console.log(`Current step: ${step}`);
//   }
// }

//==================================
// Mahsulot sifati bo‘yicha tekshiruv
// checkQuality(q: Quality) funksiyasini yozing. Har bir sifatga qarab quyidagicha natija chiqsin:
enum Quality {
  Low,
  Medium,
  High,
}

function checkQuality(q: Quality) {
  switch (q) {
    case Quality.Low:
      console.log(`Sifat juda past`);
      break;
    case Quality.High:
      console.log(`Yuqori Sifat`);
      break;
    case Quality.Medium:
      console.log(`Sifat ortacha`);
      break;
    default:
      console.log(`sifatsiz`);
  }
}

checkQuality(Quality.Low); // "Sifat juda past"
checkQuality(Quality.Medium); // "O'rtacha sifat"
checkQuality(Quality.High); // "Yuqori sifat"
