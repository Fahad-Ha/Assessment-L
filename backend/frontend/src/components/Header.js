import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// React-Bootstrap
import { Container, Navbar, Nav, Row, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { logout } from '../actions/userActions'


function Header() {

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <header>
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <LinkContainer to='/'>
            <Navbar.Brand >Loyac</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to='/programs'>
                <Nav.Link >Programs</Nav.Link>
                </LinkContainer>

            {userInfo ? (
              <NavDropdown title={userInfo.name} id='username'>
                <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
              </NavDropdown>
            ): (
            <LinkContainer to='/login'>    
              <Nav.Link ><i className='fas fa-user'></i> login</Nav.Link>
            </LinkContainer>
            )
            
            }  

          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header