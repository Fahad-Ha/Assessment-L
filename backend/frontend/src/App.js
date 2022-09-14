import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes }  from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProgramsScreen from './screens/ProgramsScreen'
import PaymentScreen from './screens/PaymentScreen'
import LoginScreen from './screens/LoginScreen' 
import RegisterScreen from './screens/RegisterScreen'




function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen/>} exact />
            <Route path='/login' element={<LoginScreen/>} />
            <Route path='/register' element={<RegisterScreen/>} />
            <Route path='/programs/:id' element={<ProgramsScreen/>} />
            <Route path='/payment/:id' element={<PaymentScreen/>} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
