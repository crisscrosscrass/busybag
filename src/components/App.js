import '../Main.css';
import { useContext } from "react";
import Signup from '../pages/Signup';
import { AuthProvider } from '../service/AuthContext';
import { DatabaseProvider } from '../service/DatabaseContext';
// import { BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import { HashRouter as Router,Switch,Route} from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import CreateProject from '../pages/CreateProject'
import Taskboard from '../pages/Taskboard'
import UpdateProfile from '../pages/UpdateProfile'
import Login from '../pages/Login'
import PrivateRoute from './PrivateRoute'
import ForgotPassword from '../pages/ForgotPassword';
import { ThemeProvider } from '../service/ThemeContext';

import { AppTransitionContext } from '../service/AppTransitionContext'
import { PageTransition } from '@steveeeie/react-page-transition';
// https://github.com/Steveeeie/react-page-transition

function App() {
  const { preset, enterAnimation , exitAnimation } = useContext(AppTransitionContext);
  return (

    <Router>
        <AuthProvider>
        <ThemeProvider>
        <DatabaseProvider>
        
        <Route
            render={({ location }) => {return (
                <PageTransition
                  preset={preset}
                  transitionKey={location.pathname}
                  enterAnimation={enterAnimation}
                  exitAnimation={exitAnimation}
                >
                <Switch location={location}>
                  <PrivateRoute exact path="/"  component={Dashboard} />
                  <PrivateRoute path="/update-profile" component={UpdateProfile} />
                  <PrivateRoute path="/task-board" component={Taskboard} />
                  <PrivateRoute path="/create-project" component={CreateProject} />
                  <Route path="/signup" component={Signup} />
                  <Route path="/login" component={Login} />
                  <Route path="/forgot-password" component={ForgotPassword} />
                </Switch>
              </PageTransition>
              );
            }}
          />
      
          </DatabaseProvider>
          </ThemeProvider>
        </AuthProvider>
    </Router>
  );
}

export default App;