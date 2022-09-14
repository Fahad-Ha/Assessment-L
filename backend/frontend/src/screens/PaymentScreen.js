import React, { useState, useEffect } from 'react'
import { Form, Button, Col, ListGroup, Card, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams, useNavigate } from 'react-router-dom'
import FormContainer from '../components/FormContainer'
import createOrder from '../actions/orderActions'
import listProgramDetails from '../actions/programActions'


import { ORDER_CREATE_RESET } from '../constants/orderConstants'

function PaymentScreen({ history }) {

    const orderCreate = useSelector(state => state.orderCreate)
    const { order, error, success } = orderCreate

    const programDetails = useSelector(state => state.programDetails)
    const {program} = programDetails
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [paymentMethod, setPaymentMethod] = useState('')

    


    



   

    useEffect(() => {
        if (success) {
            navigate(`/payment/${order._id}`)
            dispatch({ type: ORDER_CREATE_RESET })
        }
    }, [success, history])

    const placeOrder = () => {
        dispatch(createOrder({
            orderItems: program.name,
            paymentMethod: paymentMethod,
            itemsPrice: program.fees,
            taxPrice: '0',
            totalPrice: program.fees,
        }))
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch((paymentMethod))
    }


    return (
        <div>
            <Row>
                <Col md={8}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>Payment Method</h2>
                            <p>
                                <strong>Method: </strong>
                                {paymentMethod}
                            </p>
                        </ListGroup.Item>                       
                    </ListGroup>

                </Col>

                <Col md={4}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h2>Payment Summary</h2>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Program:</Col>
                                    <Col>${program.name}</Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Discount:</Col>
                                    <Col>00.00</Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Total:</Col>
                                    <Col>${program.fees}</Col>
                                </Row>
                            </ListGroup.Item>


                            <ListGroup.Item>
                                {error && <h2 variant='danger'>{error}</h2>}
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Button
                                    type='button'
                                    onClick={placeOrder}
                                >
                                    Pay
                                </Button>
                            </ListGroup.Item>

                        </ListGroup>
                    </Card>
                </Col>
            </Row>
            <FormContainer>

            <Form onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Label as='legend'>Select Method</Form.Label>
                    <Col>
                        <Form.Check
                            type='radio'
                            label='PayPal'
                            id='paypal'
                            name='paymentMethod'
                            checked
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        >

                        </Form.Check>
                        <Form.Check
                            type='radio'
                            label='KNET'
                            id='KNET'
                            name='paymentMethod'
                            checked
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        >

                        </Form.Check>
                    </Col>
                </Form.Group>

                <Button className = 'button' type='submit' variant='primary'>
                    Continue
                </Button>
            </Form>
        </FormContainer>
        </div>
    )
}

export default PaymentScreen


        
