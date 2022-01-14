import logo from './logo.svg';
import './App.css';
import ListTodo from './components/Todos/ListTodo';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { Signup } from './components/auths/SignUp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world ReactJS Mr. NTA (from VNC)
        </p>
        <ListTodo />
        {/* <div>
          <Signup />
        </div> */}
      </header>
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
