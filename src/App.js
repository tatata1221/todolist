import './App.css';
import ListTodo from './components/Todos/ListTodo';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import SignUp from './components/auths/SignUp';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { getDefaultNormalizer } from '@testing-library/react';

function App() {
  // const adminUser = {
  //   email: "admin@gmail.com",
  //   password: 123456
  // }
  // const [user, setUser] = useState({name: "", email: ""});
  // const [error, setError] = useState("");

  // const Login = details => {
  //   console.log(details);
  // };

  // const Logout = () => {
  //   console.log("logout");
  // }

  return (
    <div>
        
        <Router>
        <Switch>
          <Route path="/signup" exact>
            <SignUp />
          </Route>
          <Route path="/todo" exact>
            <ListTodo />
          </Route>
          {/* <Route path="/singin">
            <SignIN />
          </Route> */}
        </Switch>
        </Router>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          />
        <ToastContainer />

    </div>
  );
}

export default App;
