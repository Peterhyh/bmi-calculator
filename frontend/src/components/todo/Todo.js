import React from 'react'
import { ACTIONS } from '../../pages/UseReducer.js';
import { Container, Row, Col, Button } from 'reactstrap';


const Todo = ({ todo, dispatch }) => {
    return (
        <Container >
            <Row className='d-flex justify-content-center'>
                <Col className='d-flex justify-content-center align-items-center m-1' md='3' style={{ backgroundColor: '#1E1F1EC4', borderRadius: '10px' }}>
                    <span style={{ color: todo.complete ? '#1E1F1EC4' : '#fff' }}>
                        {todo.name}
                    </span>
                </Col>
                <Col className='m-1' md='1'>
                    <Button onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })}>
                        Toggle
                    </Button>
                </Col>
                <Col className='m-1' md='1'>
                    <Button outline color='danger' onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })}>
                        Delete
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Todo;
