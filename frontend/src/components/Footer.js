import React from 'react';
import { Container, Row, Col } from 'reactstrap';


const Footer = () => {
    return (
        <footer className='site-footer p-3'>
            <Container>
                <Row>
                    <Col>
                        <p>Developed by Peter Huynh</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
};

export default Footer;