import { Order, OrderItem } from './cafeteria';

abstract class Person {
  constructor(public name: string, public birthDate: Date) {
    if (!this.verify(name)) return;
    this.name = name;
    this.birthDate = birthDate;
  }
  
  verify(name: string): boolean {
    const birthYear = this.birthDate.getFullYear();
    const actualYear = new Date().getFullYear();
    if (birthYear > actualYear) return false;
    if (actualYear - birthYear >= 120) return false;
    if (name.length < 3) return false;
  };
  
  get person() { return this.name };
  set person(name: string) { 
    if (name.length < 3) return;
    this.name = name;
  }
  get personAge() { return this.birthDate };
  set personAge(date: Date) {
    if (!this.verify) return;
    this.birthDate = date;
  }
}

interface Enrollable {
  enrollment: string;
  generateEnrollment(): string; 
}

class Student extends Person implements Enrollable {
  enrollment: string;
  // examGrades: number[] = [];
  // assessmentGrades: number[] = [];
  evaluationResults: EvaluationResult[] = [];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this.enrollment = this.generateEnrollment();
  }

  sumNotes(grades: number[]) { return grades.reduce((pv, cV) => pv + cV, 0) };

  sumAverageNotes(grades: number[]) { return (this.sumNotes(grades) / grades.length) };

  generateEnrollment(): string { return 'abcdefghijklmnop' };

  get grades(): EvaluationResult[] { return this.evaluationResults };

  addEvaluationResults(result: EvaluationResult) {
    this.evaluationResults.push(result);
  }

}

class Employee extends Person implements Enrollable {
  private _admissionDate: Date;
  public enrollment: string;

  constructor(name: string, birthDate: Date, public salary: number) {
    super(name, birthDate);
    this.admissionDate = new Date();
    this.enrollment = this.generateEnrollment();
    if (salary < 0) return;
    this.salary = salary;
  }
  
  generateEnrollment(): string {
    return 'abcdefghijklmnop';
  }

  whatYearIsIt() {
    const result = new Date();
    return result.getFullYear();
  }
  
  isValid() {
    return this.admissionDate.getFullYear() > this.whatYearIsIt();
  }

  get admissionDate() {
    return this._admissionDate;
  }

  set admissionDate(date: Date) {
    if (!this.isValid) return;
    this._admissionDate = date;
  }

}

class Subject {
  private _name: string;

  constructor(name: string) {
    if (!this.isValid(name)) return;
    this._name = name;
  }

  isValid(param: string) {
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

class Teacher extends Employee {
  constructor(public name: string, public birthDate: Date, public salary: number, public subject: Subject) {
    super(name, birthDate, salary);
    if (salary < 0) return;
    this.salary = salary;
    this.subject = subject;
  }

}

abstract class Evaluation {
  constructor(private _score: number, private _teacher: Teacher) {
    if (this.isValid(_score)) {
      this._score = _score;
    }
    this._teacher = _teacher;
  }

  isValid(score: number): boolean {
    if (score < 0) return false;
    return true;
  }

  get score() { return this._score };
  get teacher() { return this._teacher };

  set score(score: number) { if (this.isValid(score)) this._score = score };
  set teacher(teacher: Teacher) { this._teacher = teacher };

}

class Exam extends Evaluation {
  constructor(score: number, teacher: Teacher) {
    if (score > 25) return;
    super(score, teacher);
    this.score = score;
  }
}

class Work extends Evaluation {
  constructor(score: number, teacher: Teacher) {
    if (score > 50) return;
    super(score, teacher);
    this.score = score;
  }
}

class EvaluationResult {
  evaluation: Evaluation;
  private _score: number;

  constructor(evaluation: Evaluation, score: number) {
    if (!this.isValid(score, evaluation)) return;
    this.evaluation = evaluation;
    this._score = score;
  }

  isValid(score: number, evaluation?: Evaluation) {
    if (evaluation && score > evaluation.score) return false;
    if (score < 0) return false;
    return true;
  }

  get score() { return this._score };
  set score(score: number) { if (this.isValid(score)) this._score = score };
}

const hist = new Subject('história');
const mat = new Subject('matemática');
const port = new Subject('português');

const estudante1 = new Student('Lucas', new Date('1995/11/21'));
const estudante2 = new Student('Luquinhas', new Date('2022/11/21'));
const professor1 = new Teacher('Vera', new Date('1949/11/21'), 2000.00, hist);
const professor2 = new Teacher('Lucia', new Date('1959/11/21'), 2500.00, mat);

const exam1 = new Exam(25, professor1);
const exam2 = new Work(50, professor2);

const result1 = new EvaluationResult(exam1, 20);
const result2 = new EvaluationResult(exam2, 40);

estudante1.addEvaluationResults(result1);
estudante1.addEvaluationResults(result2);
estudante2.addEvaluationResults(result1);
estudante2.addEvaluationResults(result2);

const produto1 = new OrderItem('Post-it', 10);
const produto2 = new OrderItem('Cafe', 5);

const pedido1 = new Order(estudante1, [ produto1 ], 'dinheiro');
const pedido2 = new Order(estudante2, [ produto2 ], 'dinheiro', 5);


console.log(estudante1);
console.log(estudante2);
console.log(professor1);
console.log(professor2);
console.log(exam1);
console.log(exam2);
console.log(estudante1.grades)
console.log(estudante2.grades)
console.log(produto1)
console.log(produto2)
console.log(pedido1)
console.log(pedido2)
console.log(pedido1.withDiscount());
console.log(pedido2.withDiscount());


export {
  Person,
}