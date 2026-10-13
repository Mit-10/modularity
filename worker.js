import Person from './person.js';

export default class Worker extends Person {
    #rate = 1000;
    #days = 0;

    constructor(firstName, lastName, birthday, position) {
        super(firstName, lastName, birthday);

        this.position = position;
    }

    get rate() {
        return this.#rate;
    }

    set rate(value) {
        if (typeof value === 'number' && Number.isFinite(value) && value >= 1000) {
            this.#rate = value;
        } else {
            console.error('Ошибка: ставка должна быть не менее 1000 рублей.');
        }
    }

    addDays(days) {
        const daysInMonth = new Date(
            new Date().getFullYear(),
            new Date().getMonth() + 1,
            0
        ).getDate();

        if (typeof days !== 'number' || !Number.isFinite(days) || days <= 0) {
            console.error('Ошибка: количество дней должно быть больше 0.');
            return;
        }

        if (this.#days + days > daysInMonth) {
            console.error(
                `Ошибка: количество рабочих дней не может превышать ${daysInMonth}.`
            );
            return;
        }

        this.#days += days;
    }

    getSalary() {
        let salary = this.#rate * this.#days;

        const birthdayMonth = Number(this.birthday.split('-')[0]);
        const currentMonth = new Date().getMonth() + 1;

        if (birthdayMonth === currentMonth) {
            salary += salary * 0.1;
        }

        return salary;
    }

    static whoWorkedMore(...workers) {
        if (workers.length === 0) {
            console.log('Список работников пуст.');
            return;
        }

        const maxDays = Math.max(...workers.map(worker => worker.#days));

        workers
            .filter(worker => worker.#days === maxDays)
            .forEach(worker => {
                console.log(
                    `Больше всех отработал ${worker.getFullName()}. ` +
                    `Количество рабочих дней - ${worker.#days}`
                );
            });
    }

    static whoIsYounger(...workers) {
        if (workers.length === 0) {
            console.log('Список работников пуст.');
            return;
        }

        const getBirthDate = worker => {
            const [month, day, year] = worker.birthday.split('-').map(Number);
            return new Date(year, month - 1, day);
        };

        const youngestDate = Math.max(
            ...workers.map(worker => getBirthDate(worker).getTime())
        );

        workers
            .filter(worker => getBirthDate(worker).getTime() === youngestDate)
            .forEach(worker => {
                console.log(
                    `${worker.getFullName()} ${worker.getAge()}`
                );
            });
    }
}