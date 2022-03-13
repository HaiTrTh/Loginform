
import './App.css';
import Auth from './Auth/Auth';
import Login from './Auth/Login';
import Logout from './Auth/Logout';

function App() {
  return (
    <div className="App">
      <Auth />

      <Login />

      <Logout />
    </div>
  );
}

export default App;
