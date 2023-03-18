import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { Container, Row, Col, Button } from 'reactstrap';

const fetchData = async () => {
    return (
        axios.get('https://randomuser.me/api')
            .then(response => {
                console.log(response);
                return response;
            })
            .catch(err => {
                console.err(err);
            })
    )
};

const CounterPage = () => {
    const [counter, setCounter] = useState(0);
    const [data, setData] = useState();

    const decrement = () => {
        setCounter(counter - 1);
    };

    const increment = () => {
        setCounter(counter + 1);
    };


    useEffect(() => {
        fetchData()
            .then(response => {
                setData(JSON.stringify(response, null, 2) || 'No data to show');
            })
            .catch(err => {
                console.err(err);
            })
    }, [])


    return (
        <Container>
            <Row className='counter-title mb-5 mt-5 p-3' >
                <h1>TESTING PAGE</h1>
            </Row>
            <Row>
                <h2>COUNTER:</h2>
            </Row>
            <Row className='counter-row mb-5 p-5 d-flex justify-content-center align-items-center'>
                <Col className='decrement-button' md='1' >
                    <Button color='warning' onClick={decrement}>
                        -
                    </Button>
                </Col>
                <Col className='counter-display p-3' md='1' >
                    <span >{counter}</span>
                </Col>
                <Col className='increment-button' md='1' >
                    <Button color='warning' onClick={increment}>
                        +
                    </Button>
                </Col>
            </Row>
            <Row>
                <h2>GET REQUEST</h2>
                <h3>https://randomuser.me/api</h3>
            </Row>
            <Row className='json-data-row p-5 mb-5' >
                <pre>
                    {data}
                </pre>
            </Row>

        </Container>
    )
};

export default CounterPage;

