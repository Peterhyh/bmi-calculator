import { useState, useEffect } from 'react';
import axios from 'axios'
import { Container, Row, Button } from 'reactstrap';

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






const Counter = () => {
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
        <Container style={null}>
            <Row>
                <button onClick={decrement}>
                    -
                </button>

                <span>{counter}</span>

                <button onClick={increment}>
                    +
                </button>
            </Row>
            <Row>
                <pre>
                    {data}
                </pre>
            </Row>

        </Container>
    )
};

export default Counter;



// import { Container, Row, Col, Button } from 'reactstrap';
// import { useReducer } from 'react';

// const TestPage = () => {

//     const ACTIONS = {
//         INCREMENT: 'increment',
//         DECREMENT: 'decrement'
//     };



//     //this function will take the current state and an action. The action is passed to the dispatch function.
//     //this reducer function will return our new updated state.
//     //every time we call dispatch, it will increment the count by 1
//     //add a switch statement for decrement button
//     const reducer = (state, action) => {
//         switch (action.type) {
//             case ACTIONS.INCREMENT:
//                 return { count: state.count + 1 };
//             case ACTIONS.DECREMENT:
//                 return { count: state.count - 1 };
//             default:
//                 return state
//         };
//     };


//     //useReducer returns an array. array will contain the state and a function, 'dispatch()' = call to update our state
//     //useReducer will take a function to get a new state as the 1st argument, and the 2nd is the initial value.
//     const [state, dispatch] = useReducer(reducer, { count: 0 });


//     const increment = () => {
//         dispatch({ type: ACTIONS.INCREMENT });
//     };

//     const decrement = () => {
//         dispatch({ type: ACTIONS.DECREMENT });
//     };


//     return (
//         <Container>
//             <Row>
//                 <Col>
//                     <Button onClick={decrement}>
//                         -
//                     </Button>
//                     <span>{state.count}</span>
//                     <Button onClick={increment}>
//                         +
//                     </Button>
//                 </Col>
//             </Row>
//         </Container>
//     )
// };

// export default TestPage;