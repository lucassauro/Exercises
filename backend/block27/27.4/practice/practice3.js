"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadingTracker = void 0;
var ConsoleNotification = /** @class */ (function () {
    function ConsoleNotification() {
    }
    ConsoleNotification.prototype.sendNotification = function (message) {
        console.log("Here we go again! - ".concat(message));
    };
    return ConsoleNotification;
}());
var EmailNotification = /** @class */ (function () {
    function EmailNotification(email) {
        this.email = email;
    }
    EmailNotification.prototype.sendNotification = function (message) {
        console.log("Here should go the implementation to send notification to the email: ".concat(this.email, " - ").concat(message));
    };
    return EmailNotification;
}());
var PhoneNotification = /** @class */ (function () {
    function PhoneNotification(phone) {
        this.phone = phone;
    }
    PhoneNotification.prototype.sendNotification = function (message) {
        console.log("Here should go the implementation to send notification to the phone ".concat(this.phone, " - ").concat(message));
    };
    return PhoneNotification;
}());
var ReadingTracker = /** @class */ (function () {
    function ReadingTracker(readingGoal, notifications, sendTo) {
        this.notificator = notifications;
        this.readingGoal = readingGoal;
        this.booksRead = 0;
    }
    ReadingTracker.prototype.trackReadings = function (readsCount) {
        this.booksRead += readsCount;
        if (this.booksRead >= this.readingGoal) {
            this.notificator.sendNotification("Congratulations! You've reached your reading goal!");
            return;
        }
        this.notificator.sendNotification("There are still some books to go!");
    };
    return ReadingTracker;
}());
exports.ReadingTracker = ReadingTracker;
// const consol = new ConsoleNotification();
// const phone = new PhoneNotification(99999999);
// const email = new EmailNotification('lucas@mail.com');
var one = new ReadingTracker(20, new ConsoleNotification());
var two = new ReadingTracker(20, new PhoneNotification(9999999));
var three = new ReadingTracker(20, new EmailNotification('lucas@mail.com'));
console.log(one);
console.log(two);
console.log(three);
