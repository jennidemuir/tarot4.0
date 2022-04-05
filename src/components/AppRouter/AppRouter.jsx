import React from 'react'
import './approuter-styles.css'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import { useAuth } from '../../context/AuthContext'
import ForgotPasswordPage from '../../pages/ForgotPasswordPage'
import Homepage from '../../pages/Homepage/Homepage';
import Loginpage from '../../pages/Loginpage'
import NotfoundPage from '../../pages/NotfoundPage'
import Profilepage from '../../pages/Profilepage/Profilepage'
import ProtectedPage from '../../pages/ProtectedPage'
import Registerpage from '../../pages/Registerpage'
import ResetPasswordPage from '../../pages/ResetPasswordPage'
import TarotLibrary from '../../pages/TarotLibrary/TarotLibrary';
import TarotReading from '../../pages/TarotReading/TarotReading';
// import TarotRead from '../pages/TarotReading/TarotRead';
import { Navbar } from '../Navbar';
import Footer from '../Footer/Footer';
import About from '../../pages/About/About';



export default function AppRouter(props) {

  return (
    <div className='appRouterContainer' >
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/tarot-reading" component={TarotReading} />
          {/* <Route exact path="/tarot-read" component={TarotRead} /> */}
          <Route exact path="/tarot-library" component={TarotLibrary} />
          <ProtectedRoute exact path="/login" component={Loginpage} />
          <ProtectedRoute exact path="/register" component={Registerpage} />
          <ProtectedRoute exact path="/profile" component={Profilepage} />
          <ProtectedRoute
            exact
            path="/protected-page"
            component={ProtectedPage}
          />
          <ProtectedRoute
            exact
            path="/forgot-password"
            component={ForgotPasswordPage}
          />
          <ProtectedRoute
            exact
            path="/reset-password"
            component={ResetPasswordPage}
          />
          <Route exact path="*" component={NotfoundPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}


function ProtectedRoute(props){
  const { currentUser } = useAuth()
  const location = useLocation()
  const { path } = props

  if (
    path === "/login" ||
    path === "/register" ||
    path === "/forgot-password" ||
    path === "/reset-password"
  ) {
    return currentUser ? (
      <Redirect to={location.state?.from ?? "/profile"} />
    ) : (
      <Route {...props} />
    );
  }

  return currentUser ?<Route {...props} /> : <Redirect to={{
    pathname: '/login',
    state: {from: path}
  }} />
}