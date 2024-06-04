import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout, reset } from "../features/auth/authSlice";


function Header(){

  const navigate=useNavigate();
  let {user}=useSelector(state=>state.auth);
  const dispatch=useDispatch()
  const logoutFn=()=>{
    dispatch(logout());
    dispatch(reset);
    navigate('/')
  }
    return (
        <div>
          <Link to='/'>Task Creator</Link>
          <div>
            <ul>
              {
                user ?(
                  <li>
                  <button onClick={logoutFn}>Logout</button>
                </li>
                ):(
                  <>
                   <li>
              <Link to='/login'>Login</Link>
                </li>
                <li>
              <Link to='/register'>Register</Link>
                </li>
                  </>
                )
              }
               
                
            </ul>
          </div>
        </div>
    );
}

export default Header;