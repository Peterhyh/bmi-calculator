
import BmiForm from '../components/bmi/BmiForm';
import { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';


const BmiCalculatorPage = () => {
    const [bmi, setBmi] = useState("Enter in the patient's weight and height below.");

    return (
        <Container>
            <Row>
                <h1 style={{ backgroundColor: 'pink', opacity: 0.5 }} className='box'>{bmi}</h1>
            </Row>
            <Row>
                <Col>
                    <BmiForm setBmi={setBmi} />
                </Col>
            </Row>
        </Container>
    )
};

export default BmiCalculatorPage;