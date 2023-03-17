import React from 'react';
import BmiForm from '../components/bmi/BmiForm';
import { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';


const BmiCalculatorPage = () => {
    const [bmi, setBmi] = useState("Enter weight and height below");

    return (
        <Container>
            <Row className='m-5 d-flex justify-content-center'>
                <Col md='7'>
                    <h1 className='p-3' style={{ backgroundColor: 'grey', opacity: 0.5, borderRadius: '10px' }} >{bmi}</h1>
                </Col>
            </Row>
            <Row >
                <Col>
                    <BmiForm setBmi={setBmi} />
                </Col>
            </Row>
        </Container>
    )
};

export default BmiCalculatorPage;