"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var cafeteria_1 = require("./cafeteria");
var Person = /** @class */ (function () {
    function Person(name, birthDate) {
        this.name = name;
        this.birthDate = birthDate;
        if (!this.verify(name))
            return;
        this.name = name;
        this.birthDate = birthDate;
    }
    Person.prototype.verify = function (name) {
        var birthYear = this.birthDate.getFullYear();
        var actualYear = new Date().getFullYear();
        if (birthYear > actualYear)
            return false;
        if (actualYear - birthYear >= 120)
            return false;
        if (name.length < 3)
            return false;
    };
    ;
    Object.defineProperty(Person.prototype, "person", {
        get: function () { return this.name; },
        set: function (name) {
            if (name.length < 3)
                return;
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Person.prototype, "personAge", {
        get: function () { return this.birthDate; },
        set: function (date) {
            if (!this.verify)
                return;
            this.birthDate = date;
        },
        enumerable: false,
        configurable: true
    });
    ;
    return Person;
}());
exports.Person = Person;
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, birthDate) {
        var _this = _super.call(this, name, birthDate) || this;
        // examGrades: number[] = [];
        // assessmentGrades: number[] = [];
        _this.evaluationResults = [];
        _this.enrollment = _this.generateEnrollment();
        return _this;
    }
    Student.prototype.sumNotes = function (grades) { return grades.reduce(function (pv, cV) { return pv + cV; }, 0); };
    ;
    Student.prototype.sumAverageNotes = function (grades) { return (this.sumNotes(grades) / grades.length); };
    ;
    Student.prototype.generateEnrollment = function () { return 'abcdefghijklmnop'; };
    ;
    Object.defineProperty(Student.prototype, "grades", {
        get: function () { return this.evaluationResults; },
        enumerable: false,
        configurable: true
    });
    ;
    Student.prototype.addEvaluationResults = function (result) {
        this.evaluationResults.push(result);
    };
    return Student;
}(Person));
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, birthDate, salary) {
        var _this = _super.call(this, name, birthDate) || this;
        _this.salary = salary;
        _this.admissionDate = new Date();
        _this.enrollment = _this.generateEnrollment();
        if (salary < 0)
            return _this;
        _this.salary = salary;
        return _this;
    }
    Employee.prototype.generateEnrollment = function () {
        return 'abcdefghijklmnop';
    };
    Employee.prototype.whatYearIsIt = function () {
        var result = new Date();
        return result.getFullYear();
    };
    Employee.prototype.isValid = function () {
        return this.admissionDate.getFullYear() > this.whatYearIsIt();
    };
    Object.defineProperty(Employee.prototype, "admissionDate", {
        get: function () {
            return this._admissionDate;
        },
        set: function (date) {
            if (!this.isValid)
                return;
            this._admissionDate = date;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}(Person));
var Subject = /** @class */ (function () {
    function Subject(name) {
        if (!this.isValid(name))
            return;
        this._name = name;
    }
    Subject.prototype.isValid = function (param) {
        if (param.length < 4)
            return false;
        return true;
    };
    Object.defineProperty(Subject.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            if (!this.isValid(name))
                return;
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    return Subject;
}());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, birthDate, salary, subject) {
        var _this = _super.call(this, name, birthDate, salary) || this;
        _this.name = name;
        _this.birthDate = birthDate;
        _this.salary = salary;
        _this.subject = subject;
        if (salary < 0)
            return _this;
        _this.salary = salary;
        _this.subject = subject;
        return _this;
    }
    return Teacher;
}(Employee));
var Evaluation = /** @class */ (function () {
    function Evaluation(_score, _teacher) {
        this._score = _score;
        this._teacher = _teacher;
        if (this.isValid(_score)) {
            this._score = _score;
        }
        this._teacher = _teacher;
    }
    Evaluation.prototype.isValid = function (score) {
        if (score < 0)
            return false;
        return true;
    };
    Object.defineProperty(Evaluation.prototype, "score", {
        get: function () { return this._score; },
        set: function (score) { if (this.isValid(score))
            this._score = score; },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Evaluation.prototype, "teacher", {
        get: function () { return this._teacher; },
        set: function (teacher) { this._teacher = teacher; },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    ;
    return Evaluation;
}());
var Exam = /** @class */ (function (_super) {
    __extends(Exam, _super);
    function Exam(score, teacher) {
        var _this = this;
        if (score > 25)
            return;
        _this = _super.call(this, score, teacher) || this;
        _this.score = score;
        return _this;
    }
    return Exam;
}(Evaluation));
var Work = /** @class */ (function (_super) {
    __extends(Work, _super);
    function Work(score, teacher) {
        var _this = this;
        if (score > 50)
            return;
        _this = _super.call(this, score, teacher) || this;
        _this.score = score;
        return _this;
    }
    return Work;
}(Evaluation));
var EvaluationResult = /** @class */ (function () {
    function EvaluationResult(evaluation, score) {
        if (!this.isValid(score, evaluation))
            return;
        this.evaluation = evaluation;
        this._score = score;
    }
    EvaluationResult.prototype.isValid = function (score, evaluation) {
        if (evaluation && score > evaluation.score)
            return false;
        if (score < 0)
            return false;
        return true;
    };
    Object.defineProperty(EvaluationResult.prototype, "score", {
        get: function () { return this._score; },
        set: function (score) { if (this.isValid(score))
            this._score = score; },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    return EvaluationResult;
}());
var hist = new Subject('história');
var mat = new Subject('matemática');
var port = new Subject('português');
var estudante1 = new Student('Lucas', new Date('1995/11/21'));
var estudante2 = new Student('Luquinhas', new Date('2022/11/21'));
var professor1 = new Teacher('Vera', new Date('1949/11/21'), 2000.00, hist);
var professor2 = new Teacher('Lucia', new Date('1959/11/21'), 2500.00, mat);
var exam1 = new Exam(25, professor1);
var exam2 = new Work(50, professor2);
var result1 = new EvaluationResult(exam1, 20);
var result2 = new EvaluationResult(exam2, 40);
estudante1.addEvaluationResults(result1);
estudante1.addEvaluationResults(result2);
estudante2.addEvaluationResults(result1);
estudante2.addEvaluationResults(result2);
var produto1 = new cafeteria_1.OrderItem('Post-it', 10);
var produto2 = new cafeteria_1.OrderItem('Cafe', 5);
var pedido1 = new cafeteria_1.Order(estudante1, [produto1], 'dinheiro');
var pedido2 = new cafeteria_1.Order(estudante2, [produto2], 'dinheiro', 5);
console.log(estudante1);
console.log(estudante2);
console.log(professor1);
console.log(professor2);
console.log(exam1);
console.log(exam2);
console.log(estudante1.grades);
console.log(estudante2.grades);
console.log(produto1);
console.log(produto2);
console.log(pedido1);
console.log(pedido2);
console.log(pedido1.withDiscount());
console.log(pedido2.withDiscount());
