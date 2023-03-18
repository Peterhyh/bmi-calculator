import React from 'react';
import { useReducer, useState } from 'react';
import Todo from '../components/todo/Todo';
import { Container, Row, Col } from 'reactstrap';


export const ACTIONS = {
    ADD_TODO: 'add-todo',
    TOGGLE_TODO: 'toggle-todo', //action for completing or uncompleting the todo list
    DELETE_TODO: 'delete-todo'
};


const TodoPage = () => {

    const reducer = (todos, action) => {
        switch (action.type) {
            case ACTIONS.ADD_TODO:
                return [...todos, newTodo(action.payload.name)]
            case ACTIONS.TOGGLE_TODO:
                return todos.map(todo => {
                    if (todo.id === action.payload.id) {
                        return { ...todo, complete: !todo.complete }
                    }
                    return todo
                })
            case ACTIONS.DELETE_TODO:
                return todos.filter(todo => todo.id !== action.payload.id)
            default:
                return todos

        }
    };

    const newTodo = (name) => {
        return {
            id: Date.now(),
            name: name,
            complete: false
        }
    };

    const [todos, dispatch] = useReducer(reducer, []);
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault() // prevents the page from refreshing
        dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
        setName('');
    };

    console.log(todos)

    return (
        <Container className='todo-container p-5 m-5' >
            <Row className='d-flex justify-content-center mb-5'>
                <Col>
                    <h1>Todo List</h1>
                </Col>
            </Row>
            <Row className='d-flex justify-content-center row-content'>
                <Col md='3'>
                    <h5>Type in what you need to do:</h5>
                </Col>
                <Col md='2'>
                    <form onSubmit={handleSubmit}>
                        <input type='text' value={name} onChange={e => setName(e.target.value)} />
                    </form>
                </Col>
            </Row>
            <Row className='d-flex justify-content-center mt-5 pb-2'>

                {
                    todos.map(todo => {
                        return (
                            <Todo key={todo.id} todo={todo} dispatch={dispatch} />
                        )
                    })
                }

            </Row>

        </Container >
    )
}

export default TodoPage;