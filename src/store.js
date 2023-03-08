import { makeObservable, observable, action } from 'mobx';

class Store {
    initialTasks = [];

    initialTags = [
        { id: '1', title: 'All' },
        { id: '2', title: 'AG App design' },
        { id: '3', title: 'Portfolio' },
        { id: '4', title: 'Networking' },
        { id: '5', title: 'Project 1' },
    ];

    statuses = ['todo', 'inprogress', 'done']

    constructor() {
        const tasksFromLocalStorage = localStorage.getItem('tasks');
        this.initialTasks = tasksFromLocalStorage ? JSON.parse(tasksFromLocalStorage) : [];

        makeObservable(this, {
            initialTasks: observable,
            addTask: action,
        });
    }

    addTask(title) {
        const newTask = {
            id: Math.random().toString(36).substr(2, 9),
            title: title,
            status: this.statuses[Math.floor(Math.random() * 3)]
        };
        this.initialTasks.push(newTask);
        localStorage.setItem('tasks', JSON.stringify(this.initialTasks));
    }
}

export default new Store();