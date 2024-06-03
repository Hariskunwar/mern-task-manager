import { Link } from "react-router-dom";


function Header(){
    return (
        <div>
          <Link to='/'>Task Creator</Link>
          <div>
            <ul>
                <li>
              <Link to='/login'>Login</Link>
                </li>
                <li>
              <Link to='/register'>Register</Link>
                </li>
            </ul>
          </div>
        </div>
    );
}

export default Header;