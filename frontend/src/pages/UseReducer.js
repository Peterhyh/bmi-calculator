import { useReducer, useState } from 'react';
import Todo from '../components/Todo';
import { Container, Row, Col } from 'reactstrap';



//---------------------------------------------------------------------------------------
export const ACTIONS = {
    ADD_TODO: 'add-todo',
    TOGGLE_TODO: 'toggle-todo', //action for completing or uncompleting the todo list
    DELETE_TODO: 'delete-todo'
};
//---------------------------------------------------------------------------------------

const UseReducer = () => {

    //---------------------------------------------------------------------------------------
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
    //---------------------------------------------------------------------------------------
    const newTodo = (name) => {
        return {
            id: Date.now(),
            name: name,
            complete: false
        }
    };
    //---------------------------------------------------------------------------------------    
    const [todos, dispatch] = useReducer(reducer, []);
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault() // prevents the page from refreshing
        dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
        setName('');
    };

    console.log(todos)

    return (
        <Container style={{ backgroundColor: 'pink' }}>
            <Row>
                <form onSubmit={handleSubmit}>
                    <input type='text' value={name} onChange={e => setName(e.target.value)} />
                </form>
            </Row>
            <Row>
                <Col>
                    {
                        todos.map(todo => {
                            return (
                                <Todo key={todo.id} todo={todo} dispatch={dispatch} />
                            )
                        })
                    }
                </Col>
            </Row>

        </Container >
    )
}
//---------------------------------------------------------------------------------------

export default UseReducer;