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
var Person = /** @class */ (function () {
    function Person(name, birthDate) {
        var birthYear = birthDate.getFullYear();
        var actualYear = new Date().getFullYear();
        if (birthYear > actualYear)
            return;
        if (actualYear - birthYear >= 120)
            return;
        if (name.length < 3)
            return;
        this.name = name;
        this.birthDate = birthDate;
    }
    Object.defineProperty(Person.prototype, "person", {
        get: function () {
            console.log(this.name);
            return this.name;
        },
        set: function (name) {
            if (name.length < 3)
                return;
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "personAge", {
        get: function () {
            console.log(this.birthDate);
            return this.birthDate;
        },
        set: function (date) {
            var birthYear = date.getFullYear();
            var actualYear = new Date().getFullYear();
            if (birthYear > actualYear)
                return;
            if (actualYear - birthYear >= 120)
                return;
            this.birthDate = date;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(person) {
        var _this = _super.call(this, person.name, person.birthDate) || this;
        _this.examGrades = [];
        _this.assessmentGrades = [];
        var birthYear = person.birthDate.getFullYear();
        var actualYear = new Date().getFullYear();
        if (birthYear > actualYear)
            return _this;
        if (actualYear - birthYear >= 120)
            return _this;
        if (person.name.length < 3)
            return _this;
        _this.enrollment = _this.generateEnrollment();
        return _this;
    }
    Student.prototype.sumNotes = function (grades) {
        var result = grades.reduce(function (pv, cV) { return pv + cV; }, 0);
        return result;
    };
    Student.prototype.sumAverageNotes = function (grades) {
        var sumGrades = this.sumNotes(grades);
        return sumGrades / grades.length;
    };
    Student.prototype.generateEnrollment = function () {
        return 'abcdefghijklmnop';
    };
    Object.defineProperty(Student.prototype, "exams", {
        get: function () {
            console.log(this.examGrades);
            return this.examGrades;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "works", {
        get: function () {
            console.log(this.assessmentGrades);
            return this.assessmentGrades;
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.pushExamNotes = function (grade) {
        if (this.maximumExamLength()) {
            this.examGrades.push(grade);
        }
    };
    Student.prototype.pushWorksNotes = function (grade) {
        if (this.maximumWorksLength()) {
            this.assessmentGrades.push(grade);
        }
    };
    Student.prototype.maximumExamLength = function () {
        if (this.examGrades && this.examGrades.length >= 4) {
            return false;
        }
        return true;
    };
    Student.prototype.maximumWorksLength = function () {
        if (this.assessmentGrades.length >= 2) {
            return false;
        }
        return true;
    };
    return Student;
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
    function Teacher(person, salary, subject) {
        var _this = _super.call(this, person.name, person.birthDate) || this;
        if (salary < 0)
            return _this;
        _this.salary = salary;
        _this.subject = subject;
        _this.registration = _this.generateRegistration();
        if (!_this.isValid)
            return _this;
        return _this;
    }
    Teacher.prototype.whatYearIsIt = function () {
        var result = new Date();
        return result.getFullYear();
    };
    Teacher.prototype.isValid = function () {
        return this.admissionDate.getFullYear() > this.whatYearIsIt();
    };
    Teacher.prototype.generateRegistration = function () {
        return 'abcdefghijklmnop';
    };
    Object.defineProperty(Teacher.prototype, "admissionDate", {
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
    return Teacher;
}(Person));
var pessoa1 = new Person('Lucas', new Date('1995/11/21'));
var pessoa2 = new Person('Luquinhas', new Date('2022/11/21'));
var pessoa3 = new Person('Vera', new Date('1949/11/21'));
var pessoa4 = new Person('Lucia', new Date('1959/11/21'));
var pessoa5 = new Person('Malaquias', new Date('1976/11/21'));
var hist = new Subject('história');
var mat = new Subject('matemática');
var port = new Subject('português');
var estudante1 = new Student(pessoa1);
var estudante2 = new Student(pessoa2);
var professor1 = new Teacher(pessoa3, 1000.00, hist);
var professor2 = new Teacher(pessoa4, 1500.00, port);
var professor3 = new Teacher(pessoa5, 3000.00, mat);
console.log(hist);
console.log(port);
console.log(mat);
console.log(estudante1);
console.log(estudante2);
console.log(professor1);
console.log(professor2);
console.log(professor3);
