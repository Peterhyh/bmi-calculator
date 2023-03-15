import { Button, Label, FormGroup } from 'reactstrap';
import FlexView from 'react-flexview';
import { Formik, Form, Field } from 'formik';


const BmiCalculatorPage = () => {

    const handleSubmit = (values, { resetForm }) => {
        fetch('http://localhost:3000/bmi', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values, null, 2)
        })
            .then(response => {
                response.json()
            })
            .then(data => {
                alert(JSON.stringify(data));
            })
            .catch(err => new Error(err));
        resetForm();
    };

    return (
        <FlexView hAlignContent='center' vAlignContent='center'>
            <Formik
                initialValues={{
                    weight: '',
                    height: ''
                }}
                onSubmit={handleSubmit}
            >
                <Form>
                    <FormGroup>
                        <Label htmlFor='weight'>
                            Weight
                        </Label>
                        <Field
                            type='text'
                            className='form-control'
                            name='weight'
                            placeholder='weight'
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='height'>
                            Height
                        </Label>
                        <Field
                            type='text'
                            className='form-control'
                            name='height'
                            placeholder='height'
                        />
                    </FormGroup>
                    <Button type='submit' color='primary'>
                        Submit
                    </Button>
                </Form>
            </Formik>
        </FlexView>
    )
};

export default BmiCalculatorPage;