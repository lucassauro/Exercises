// Exercícios 5 e 6
class Data {
    constructor(day, month, year) {
        const dayValid = day >= 0 && day <= 31;
        const monthValid = month > 0 && month <= 12;
        const yearValid = year > 1889 && year < 2100;
        const date = new Date('01/01/1900');
        if (!dayValid || !monthValid || !yearValid) {
            this.day = date.getDay();
            this.month = date.getMonth() + 1;
            this.year = date.getFullYear();
        }
        this.day = day;
        this.month = month;
        this.year = year;
    }
    getMonthName() {
        // should return month name
        const months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
        return months[this.month - 1];
    }
    isLeapYear() {
        if (this.year % 4 === 0 || this.year % 100 !== 0 || this.year % 400 === 0)
            return true;
        return false;
    }
    compare(date) {
        if (date.day === this.day && date.month === this.month && date.year === this.year)
            return 0;
        return 1;
    }
    format(ex) {
        // dd/mm/aaaa
        // aaaa-mm-dd
        // dd de M de aa
        // dd, M de aaaa
        if (ex.includes('/')) {
            return `${this.day}/${this.month}/${this.year}`;
        }
        else if (ex.includes('-')) {
            return `${this.year}-${this.month}-${this.day}`;
        }
        else if (ex.includes(' ')) {
            return `${this.day} de ${this.getMonthName()} de ${this.year.toString().slice(-2)}`;
        }
        else if (ex.includes(',')) {
            return `${this.day}, ${this.getMonthName()} de ${this.year}`;
        }
        else {
            return 'Specify format, please!';
        }
    }
}
const dateOne = new Data(0o5, 0o4, 22);
const dateTwo = new Data(0o4, 0o4, 22);
console.log(dateOne);
console.log('getMonthName');
console.log(dateOne.getMonthName());
console.log('isLeapYear');
console.log(dateOne.isLeapYear());
console.log('compare');
console.log(dateOne.compare(dateTwo));
console.log('format');
console.log(dateOne.format(','));
