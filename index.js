import Worker from './worker.js';

const worker1 = new Worker(
    'Иван',
    'Иванов',
    '05-20-2000',
    'Разработчик'
);

const worker2 = new Worker(
    'Анна',
    'Петрова',
    '10-15-1998',
    'Дизайнер'
);

const worker3 = new Worker(
    'Пётр',
    'Сидоров',
    '03-12-1995',
    'Менеджер'
);

const worker4 = new Worker(
    'Мария',
    'Смирнова',
    '07-08-2003',
    'Тестировщик'
);

const worker5 = new Worker(
    'Алексей',
    'Козлов',
    '11-25-2001',
    'Аналитик'
);

const workers = [worker1, worker2, worker3, worker4, worker5];

worker1.rate = 2000;
worker2.rate = 2500;
worker3.rate = 3000;
worker4.rate = 1800;


worker5.rate = 500;


worker1.addDays(5);
worker1.addDays(7);
worker1.addDays(4);

worker2.addDays(10);
worker2.addDays(8);
worker2.addDays(3);

worker3.addDays(15);
worker3.addDays(5);
worker3.addDays(2);

worker4.addDays(6);
worker4.addDays(-2);
worker4.addDays(4);

worker5.addDays(50);
worker5.addDays(8);
worker5.addDays(6);


workers.forEach(worker => {
    console.log(
        `${worker.getFullName()} - ${worker.getSalary()} рублей`
    );
});


Worker.whoWorkedMore(...workers);


Worker.whoIsYounger(...workers);