import React from 'react';
import { Container, Row, Col } from 'reactstrap';


const Footer = () => {
    return (
        <footer className='site-footer p-3'>
            <Container>
                <Row>
                    <Col>
                        <h5>Social</h5>
                        <a
                            className='btn btn-social-icon btn-instagram'
                            href='https://www.instagram.com/peterhyh/?hl=en'
                        >
                            <i className='fa fa-instagram' />
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
};

export default Footer;