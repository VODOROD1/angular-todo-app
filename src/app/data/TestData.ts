import { Category } from "../model/Category";
import { Priority } from "../model/Priority";
import { Task } from "../model/Task";

export class TestData {
    static categories: Category[] = [
        {id: 1, title: 'Работа'},
        {id: 2, title: 'Семья'},
        {id: 3, title: 'Учеба'},
        {id: 4, title: 'Отдых'},
        {id: 5, title: 'Спорт'},
        {id: 6, title: 'Еда'},
        {id: 7, title: 'Финансы'},
        {id: 8, title: 'Гаджеты'},
        {id: 9, title: 'Здоровье'},
        {id: 10, title: 'Автомобиль'},
    ]

    static priorities: Priority[] = [
        {id: 1, title: 'Низкий', color: '#e5e5e5'},
        {id: 2, title: 'Средний', color: '#85D1B2'},
        {id: 3, title: 'Высокий', color: '#F1828D'},
        {id: 4, title: 'Очень срочно!!!', color: '#F1128D'}
    ]

    static tasks: Task[] = [
        {
            id: 1,
            title: 'Залить бензин полный бак',
            priority: TestData.priorities[2],
            completed: false,
            category: TestData.categories[9],
            date: new Date('2023-09-01')
        },
        {
            id: 2,
            title: 'Передать отчеты начальнику управления',
            priority: TestData.priorities[0],
            completed: true,
            category: TestData.categories[0],
            date: new Date('2023-09-01')
        },
        {
            id: 3,
            title: 'Найти и выучить учебник по JS',
            priority: TestData.priorities[1],
            completed: false,
            category: TestData.categories[0],
            date: new Date('2023-09-01')
        },
        {
            id: 4,
            title: 'Сходить на семинар по программированию',
            priority: TestData.priorities[3],
            completed: false,
            category: TestData.categories[3],
            date: new Date('2023-09-01')
        },
        {
            id: 5,
            title: 'Найти билеты в Турцию, выбрать отель',
            priority: TestData.priorities[3],
            completed: true,
            category: TestData.categories[5],
            date: new Date('2023-09-01')
        },
        {
            id: 6,
            title: 'Приготовить ужин',
            priority: TestData.priorities[1],
            completed: false,
            category: TestData.categories[6],
            date: new Date('2023-09-01')
        },
        {
            id: 7,
            title: 'Отжаться 50 раз',
            priority: TestData.priorities[2],
            completed: false,
            category: TestData.categories[7],
            date: new Date('2023-09-01')
        },
        {
            id: 8,
            title: 'Купить продукты на неделю',
            priority: TestData.priorities[3],
            completed: false,
            category: TestData.categories[7],
            date: new Date('2023-09-01')
        },
        {
            id: 9,
            title: 'Пробежать 5 км',
            priority: TestData.priorities[1],
            completed: false,
            category: TestData.categories[8],
            date: new Date('2023-09-01')
        },
        {
            id: 10,
            title: 'Положить 100 000 р в банк на депозит',
            priority: TestData.priorities[2],
            completed: false,
            category: TestData.categories[9],
            date: new Date('2023-09-01')
        }
    ]
}