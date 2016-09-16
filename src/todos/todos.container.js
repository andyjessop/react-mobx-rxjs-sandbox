import {Component} from 'react';
import {TodoService} from './todo.service';
import {observer} from 'mobx-react';

@observer
export class TodoContainer extends Component {

    constructor(props) {
        super(props);
        this.todoService = new TodoService();
        this.todos = [];
    }

    componentDidMount() {
        this.todoService.subject.subscribe(todos => {
            this.todos = todos;
        });
    }

    componentWillUnmount() {
        this.todoService.dispose();
    }

    render() {
        return (
            <div>
                <TodoList todos={this.todos}/>
                <AddTodo />
            </div>
        );
    }
}
