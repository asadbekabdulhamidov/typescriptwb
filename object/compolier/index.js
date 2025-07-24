"use strict";
// //  object and adcanced object
// Sizda StudentSubjects degan object bor. Har bir kalit bu o‘quvchi ismi, va qiymat esa u tanlagan fanlar ro‘yxati (string[]).
// Quyidagi studentSubjects objecti TypeScript xatolik bermasdan ishlashi kerak:
const studentSubjects = {
    Asadbek: ['Math', 'Physics'],
    Nazira: ['English', 'Biology'],
    Sumayya: ['Art', 'Music'],
};
const courseStudents = {
    Math: ['Asadbek', 'Hasan', 'Bobur'],
    English: ['Nazira', 'Sumayya'],
    Physics: ['Diyor'],
    Biology: ['Ali'], // ✅ endi bemalol qo‘shish mumkin
};
const groupData = {
    groupA: [
        { name: 'Asadbek', age: 25 },
        { name: 'Hasan', age: 22 },
    ],
    groupB: [
        { name: 'Nazira', age: 24 },
        { name: 'Sumayya', age: 2 },
    ],
};
const teamLeads = {
    frontend: ['Asadbek', 3],
    backend: ['Sardor', 5],
    mobile: ['Anvar', 2],
};
const teamMembers = {
    u123: { name: 'Asadbek', role: 'developer', experience: 3 },
    u456: { name: 'Zarina', role: 'designer' },
    u789: { name: 'Javlon', role: 'manager', experience: 5 },
};
