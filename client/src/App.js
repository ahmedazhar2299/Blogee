import Blogfeed from './pages/blogfeed/Blogfeed';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useSelector } from 'react-redux';


function App() {
  const user = useSelector(state => state.fetchUser.user)
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={!user? <Navigate to="/login"/> : <Blogfeed /> }> </Route>
      <Route exact path="/login" element={user? <Navigate to="/"/> : <Login />}> </Route>
      <Route exact path="/sign-up" element={user? <Navigate to="/"/> :<Signup />}> </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
