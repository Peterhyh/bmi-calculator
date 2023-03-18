import React from 'react';
import { Button, Label, FormGroup, Container, Col, Row } from 'reactstrap';
import { Formik, Form, Field, useFormik } from 'formik';
import axios from 'axios';



const BmiForm = ({ setBmi }) => {

    const formik = useFormik({
        initialValues: {
            weight: '',
            height: ''
        },
        onSubmit: (values) => {
            console.log('---LOG1: ', values)
            axios.post('http://localhost:3000/bmi', {
                weight: values.weight,
                height: values.height
            })
                .then(response => {
                    console.log('---LOG2: ', response)
                    setBmi(JSON.stringify(response.data))
                })
                .catch(err => {
                    console.err(err)
                });
        }
    });


    return (
        <Container className='bmi-container p-5 mb-5' >
            <Formik>
                <Form onSubmit={formik.handleSubmit}>
                    <FormGroup>
                        <Row className='d-flex justify-content-center'>
                            <Col md='3'>
                                <Label htmlFor='weight'>
                                    {'Weight (lbs)'}
                                </Label>
                            </Col>
                            <Col md='2'>
                                <Field
                                    type='text'
                                    className='form-control'
                                    name='weight'
                                    placeholder='lbs'
                                    onChange={formik.handleChange}
                                    value={formik.values.weight}
                                />
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row className='d-flex justify-content-center'>
                            <Col md='3'>
                                <Label htmlFor='height'>
                                    {'Height (inches)'}
                                </Label>
                            </Col>
                            <Col md='2'>
                                <Field
                                    type='text'
                                    className='form-control'
                                    name='height'
                                    placeholder='inches'
                                    onChange={formik.handleChange}
                                    value={formik.values.height}
                                />
                            </Col>
                        </Row>
                    </FormGroup>
                    <Button className='mt-4' type='submit' color='primary'>
                        Calculate
                    </Button>
                </Form>
            </Formik>
        </Container>
    )
};

export default BmiForm;