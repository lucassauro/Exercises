class Person {
  name: string;
  birthDate: Date;

  constructor(name: string, birthDate: Date) {
    const birthYear = birthDate.getFullYear();
    const actualYear = new Date().getFullYear();
    if (birthYear > actualYear) return;
    if (actualYear - birthYear >= 120) return;
    if (name.length < 3) return;

    this.name = name;
    this.birthDate = birthDate;
  }

  get person() {
    console.log(this.name);
    return this.name;
  }
  
  get personAge() {
    console.log(this.birthDate);
    return this.birthDate;
  }

  set person(name: string) {
    if (name.length < 3) return;
    this.name = name;
  }

  set personAge(date: Date) {
    const birthYear = date.getFullYear();
    const actualYear = new Date().getFullYear();
    if (birthYear > actualYear) return;
    if (actualYear - birthYear >= 120) return;
    this.birthDate = date;
  }

}

class Student extends Person {
  enrollment: string;
  examGrades: number[] = [];
  assessmentGrades: number[] = [];

  constructor(person: Person) {
    super(person.name, person.birthDate);
    const birthYear = person.birthDate.getFullYear();
    const actualYear = new Date().getFullYear();
    if (birthYear > actualYear) return;
    if (actualYear - birthYear >= 120) return;
    if (person.name.length < 3) return;
    this.enrollment = this.generateEnrollment();
  }

  sumNotes(grades: number[]) {
    const result = grades.reduce((pv, cV) => pv + cV, 0);
    return result;
  }

  sumAverageNotes(grades: number[]) {
    const sumGrades = this.sumNotes(grades);
    return sumGrades / grades.length;
  }

  generateEnrollment(): string {
    return 'abcdefghijklmnop';
  }

  get exams(): number[] {
    console.log(this.examGrades);
    return this.examGrades;
  }
  
  get works(): number[] {
    console.log(this.assessmentGrades);
    return this.assessmentGrades;
  }

  pushExamNotes(grade: number) {
    if (this.maximumExamLength()) {
      this.examGrades.push(grade);
    }
  }

  pushWorksNotes(grade:number) {
    if (this.maximumWorksLength()) {
      this.assessmentGrades.push(grade);
    }
  }

  maximumExamLength() {
    if (this.examGrades && this.examGrades.length >= 4) {
      return false;
    }
    return true;
  }

  maximumWorksLength() {
    if (this.assessmentGrades.length >= 2) {
      return false;
    }
    return true;
  }
}

interface IEmployee {
  registration: string;
  salary: number;
  admissionDate: Date;
  generateRegistration(): string;
}

class Subject {
  private _name: string;

  constructor(name: string) {
    if (!this.isValid(name)) return;
    this._name = name;
  }

  isValid(param) {
    if (param.length < 4) return false;
    return true;
  }

  get name() {
    return this._name;
  }

  set name(name: string) {
    if (!this.isValid(name)) return;
    this._name = name;
  }
}

class Teacher extends Person implements IEmployee {
  subject: Subject;
  registration: string;
  salary: number;
  private _admissionDate: Date;

  constructor(person: Person, salary: number, subject: Subject) {
    super(person.name, person.birthDate);
    if (salary < 0) return; 
    this.salary = salary;
    this.subject = subject;
    this.registration = this.generateRegistration();
    if (!this.isValid) return;
  }

  whatYearIsIt() {
    const result = new Date();
    return result.getFullYear();
  }
  
  isValid() {
    return this.admissionDate.getFullYear() > this.whatYearIsIt();
  }

  generateRegistration(): string {
    return 'abcdefghijklmnop';
  }

  get admissionDate() {
    return this._admissionDate;
  }

  set admissionDate(date: Date) {
    if (!this.isValid) return;
    this._admissionDate = date;
  }

}

const pessoa1 = new Person('Lucas', new Date('1995/11/21'));
const pessoa2 = new Person('Luquinhas', new Date('2022/11/21'));
const pessoa3 = new Person('Vera', new Date('1949/11/21'));
const pessoa4 = new Person('Lucia', new Date('1959/11/21'));
const pessoa5 = new Person('Malaquias', new Date('1976/11/21'));

const hist = new Subject('história');
const mat = new Subject('matemática');
const port = new Subject('português');

const estudante1 = new Student(pessoa1);
const estudante2 = new Student(pessoa2);
const professor1 = new Teacher(pessoa3, 1000.00, hist);
const professor2 = new Teacher(pessoa4, 1500.00, port);
const professor3 = new Teacher(pessoa5, 3000.00, mat);

console.log(hist);
console.log(port);
console.log(mat);

console.log(estudante1);
console.log(estudante2);
console.log(professor1);
console.log(professor2);
console.log(professor3);

