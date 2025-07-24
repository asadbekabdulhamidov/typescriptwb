// //  object and adcanced object
// Sizda StudentSubjects degan object bor. Har bir kalit bu o‘quvchi ismi, va qiymat esa u tanlagan fanlar ro‘yxati (string[]).
// Quyidagi studentSubjects objecti TypeScript xatolik bermasdan ishlashi kerak:

interface Students {
  [index: string]: string[];
}

const studentSubjects: Students = {
  Asadbek: ['Math', 'Physics'],
  Nazira: ['English', 'Biology'],
  Sumayya: ['Art', 'Music'],
};

//===========================================================

// Masala: CourseStudents interface yozing
// Sizda courseStudents degan object bor. Har bir fan nomi (string) kalit sifatida berilgan, va uning qiymati — o‘sha fanni o‘rganayotgan o‘quvchilar ro‘yxati (string[]).
// Ammo bu safar, siz alohida ikkita qat'iy shartga rioya qilishingiz kerak:
// 📋 Shartlar:
// Interface nomi: CourseStudents
// Har bir kalit — fan nomi bo‘lib, string bo‘ladi
// Har bir qiymat — string[] (ya’ni o‘quvchilar ismlari)
// Quyidagi courseStudents objecti interface asosida yozilsin:

interface CourseStudents {
  [subject: string]: string[];
}

const courseStudents: CourseStudents = {
  Math: ['Asadbek', 'Hasan', 'Bobur'],
  English: ['Nazira', 'Sumayya'],
  Physics: ['Diyor'],
  Biology: ['Ali'], // ✅ endi bemalol qo‘shish mumkin
};

//=======================================================
// Masala: GroupData interface yozing
// Sizda groupData degan object bor. Har bir kalit bu guruh nomi (string), va qiymat esa o‘sha guruhdagi o‘quvchilar ro‘yxati bo‘ladi.

interface GroupData {
  [index: string]: {
    name: string;
    age: number;
  }[];
}

const groupData: GroupData = {
  groupA: [
    { name: 'Asadbek', age: 25 },
    { name: 'Hasan', age: 22 },
  ],
  groupB: [
    { name: 'Nazira', age: 24 },
    { name: 'Sumayya', age: 2 },
  ],
};

//=======================================================
// Masala: TeamLeads interface yozing
// Sizda teamLeads degan object bor. Unda har bir jamoa nomi (string) — kalit sifatida yozilgan.
// Qiymati esa readonly tuzilgan tuple bo‘lib, u quyidagicha 2ta qiymatdan iborat:

interface TeamLeads {
  [index: string]: readonly [name: string, exprience: number];
}

const teamLeads: TeamLeads = {
  frontend: ['Asadbek', 3],
  backend: ['Sardor', 5],
  mobile: ['Anvar', 2],
};

//======================================================
// Masala: ProjectRoles interfeysini yozing
// Sizda ProjectRoles degan object bor. Har bir kalit — bu guruh a’zosi IDsi (string),
// Qiymat esa quyidagi obyekt bo‘ladi:
type Role = 'developer' | 'designer' | 'manager';

interface ProjectRole {
  readonly name: string;
  readonly role: Role;
  readonly experience?: number;
}
interface ProjectRoles {
  readonly [index: string]: ProjectRole;
}

const teamMembers: ProjectRoles = {
  u123: { name: 'Asadbek', role: 'developer', experience: 3 },
  u456: { name: 'Zarina', role: 'designer' },
  u789: { name: 'Javlon', role: 'manager', experience: 5 },
};
