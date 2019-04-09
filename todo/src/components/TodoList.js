import React from 'react';
import { connect } from 'react-redux';
import { newTodo, completed } from '../Actions/action';

class TodoList extends React.Component {
    state = {
        newTodo: ''
    };

    handleChanges = e => {
        this.setState({
            newTodo: e.target.value
        })
    }


    addTodo = e => {
        e.preventDefault();
        this.props.newTodo(this.state.newTodo);
    };

    completed = (e, index) => {
        e.preventDefault();
        this.props.completed(index);
    }

    render() {
        return (
            <div>
                {this.props.todos.map((todo, index) =>
                <h3
                    key={index}
                    className={todo.completed ? 'completed' : ''}
                    onClick={e => this.completed(e, index)}
                >
                    {todo.value}
                </h3>
                )}
                <input
                    type='text'
                    value={this.state.newTodo}
                    placeholder='New Todo'
                    onChange={this.handleChanges}
                />
                <button onClick={this.addTodo}>Add to List</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    };
}

export default connect(mapStateToProps, { newTodo, completed })(TodoList);