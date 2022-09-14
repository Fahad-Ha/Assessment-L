import React, { useState, useEffect, useSyncExternalStore} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams, useNavigate } from 'react-router-dom'
import {Row, Col, Image, Button, Card} from 'react-bootstrap'
import { listProgramDetails } from '../actions/programActions'
import { Redirect } from 'react-router-dom'

 
function ProgramsScreen({ match }) {  
  const program_id = useParams()  
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [errorMessage, setErrorMessage] = useState('');
  const programDetails = useSelector(state => state.programDetails)
  const {program} = programDetails
  const userRegister = useSelector(state => state.userRegister)
  const { error, loading, userInfo } = userRegister
  
    useEffect(() => {
      dispatch(listProgramDetails(program_id.id))
  

  }, [dispatch, match])

  const programRegisterHandler = () => {
    //add the agegroup check here 
    if (userInfo) {
      setErrorMessage('You are not within the age group of this program!');
    } else {
    navigate(`/payment/${program_id.id}`)}
  }

  return (
    <div >
    
        <div >
        <Link to='/' className='btn btn-dark my-3'>Go Back</Link>
        <Row>
                <Image  style={{width: '50%', alignItem: 'center'}} src={program.image} alt={program.name} fluid/>
        </Row>
        </div> 
    
        <div className='text-center'>
        <Card.Body>
            <Card.Title className="py-3 " variant="outlined"><h2>{program.name}</h2></Card.Title>
            <Card.Text className="py-2 pro-description" ><span>{program.description}</span></Card.Text>
            <Card.Text className="py-2 ">Date: {program.date}</Card.Text>
        </Card.Body>
        <Card.Body >
            <Card.Text className="py-2 pro-info ">Age: {program.ageGroup}</Card.Text>
            <Card.Text className="py-1 pro-info">Fees: {program.fees} KD</Card.Text>
            <Button onClick={programRegisterHandler} className='my-3 p-4' type='button' >Register</Button>
            {errorMessage && (
            <p className="error"> {errorMessage} </p>
            )}
        </Card.Body>
        </div>
    
    </div>
  )
}

export default ProgramsScreen