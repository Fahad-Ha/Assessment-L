import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col} from 'react-bootstrap'

import Programs from '../components/Programs'
import { listPrograms } from '../actions/programActions'


function HomeScreen() {
  const dispatch = useDispatch()
  const programList = useSelector(state => state.programList)
  const {error, loading, programs} = programList

  useEffect(() => {
    dispatch(listPrograms())
    
  }, [dispatch])

  return (
    <div>
        <h1>Programs</h1>
        {loading ? <h2>Loading...</h2>
          : error ? <h3>{error}</h3>
            : <Row>
              {programs.map(programs => (
                  <Col key={programs._id} sm={12} md={6} lg={6} xl={4}>
                      <Programs programs={programs} />
                  </Col>
              ))}
              </Row>
        }       
    </div>
  )
}

export default HomeScreen