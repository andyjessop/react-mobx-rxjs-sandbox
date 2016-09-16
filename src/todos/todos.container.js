import {Component} from 'react';
import {TodoService} from './todo.service';
import {observer} from 'mobx-react';
import {observable} from 'mobx';

@observer export class TodoContainer extends Component {

    @observable todos = [];

    constructor(props) {
        super(props);
        this.todoService = new TodoService();
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
