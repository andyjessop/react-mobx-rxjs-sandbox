import {Subject} from 'rxjs/Subject';
import {ajax} from 'rxjs/observable/dom/ajax';

export class TodoService {

    constructor() {
        this.subject = new Subject();
        this.todos = [];
    }

    const getTodos = (todos) => {
        ajax({url: '/todos'}).subscribe(
            (data) => {
                this.todos = data;

                // Emit to subscribers
                this.subject.next(this.todos);
            },
            (error) => {
                // Log the error
            }
        );
    };

    const addTodo = (todo) => {
        this.todos = Object.assign({}, this.todos, [
            ...this.todos,
            {
                text: todo.text,
                completed: todo.completed
            }
        ]);

        this.subject.next(this.todos);
    };
}
