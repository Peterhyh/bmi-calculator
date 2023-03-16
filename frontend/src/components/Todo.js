import React from 'react'
import { ACTIONS } from '../pages/UseReducer.js';
import { Container, Row, Col, Button } from 'reactstrap';


const Todo = ({ todo, dispatch }) => {
    return (
        <Container style={{ backgroundColor: 'orange' }}>
            <Row style={{ backgroundColor: 'green' }}>
                <Col md='3' style={{ backgroundColor: 'blue' }}>
                    <span style={{ color: todo.complete ? '#AAA' : '#000' }}>
                        {todo.name}
                    </span>
                </Col>
                <Col md='4'>
                    <Button onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })}>
                        Toggle
                    </Button>
                </Col>
                <Col md='4'>
                    <Button onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })}>
                        Delete
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Todo;
