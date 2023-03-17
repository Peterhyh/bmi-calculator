import React from 'react';
import { Button, Label, FormGroup, Col, Row } from 'reactstrap';
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
        <Formik>
            <Form onSubmit={formik.handleSubmit}>
                <FormGroup>
                    <Row style={{ backgroundColor: 'blue' }}>
                        <Col md='4' sm='4' style={{ backgroundColor: 'red' }}>
                            <Label htmlFor='weight'>
                                {'Weight (lbs)'}
                            </Label>
                        </Col>
                        <Col md='4' sm='4' style={{ backgroundColor: 'pink' }}>
                            <Field
                                type='text'
                                className='form-control'
                                name='weight'
                                placeholder='weight'
                                onChange={formik.handleChange}
                                value={formik.values.weight}
                            />
                        </Col>
                    </Row>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='height'>
                        {'Height (inches)'}
                    </Label>
                    <Field
                        type='text'
                        className='form-control'
                        name='height'
                        placeholder='height'
                        onChange={formik.handleChange}
                        value={formik.values.height}
                    />
                </FormGroup>
                <Button type='submit' color='primary'>
                    Submit
                </Button>
            </Form>
        </Formik>
    )
};

export default BmiForm;