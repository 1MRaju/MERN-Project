import React from 'react';
import {BiDonateBlood, BiUserCircle} from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation, Link } from 'react-router-dom';

function Header(props) {
    const {user} = useSelector(state => state.auth);
    const navigate = useNavigate()
    const location = useLocation()
    //logout handler
    const logoutHandler = () =>{
        localStorage.clear()
        alert('Logout Successfully');
        navigate('/login');
    }
    return (
        <>
            <nav className="navbar">
                <div className="container-fluid">
                    <div className="navbar-brand h1 text-white">
                       <BiDonateBlood color='red' className='fs'/> Blood Bank 
                    </div>
                    <ul className="navbar-nav flex-row">
                        <li className="nav-item mx-3">
                            <p className="nav-link">
                                <BiUserCircle className='fs'/> Welcome {user?.name || user?.hospitalName || user?.organisationName} {" "} &nbsp;
                                <span className="badge bg-secondary">{user?.role}</span>
                                </p>
                        </li>
                        {
                            (location.pathname === '/' || location.pathname === '/donar' || location.pathname === '/hospital') ? (
                            <li className="nav-item mx-3">
                                <Link to='/analytics' className="nav-link">
                                   Analytics
                                </Link>
                            </li>
                            ):(
                                <li className="nav-item mx-3">
                                <Link to='/' className="nav-link">
                                   Home
                                </Link>
                            </li>
                            )
                        }
                        <li className='nav-item mx-3'>
                            <button className="btn btn-danger" onClick={logoutHandler}>Logout</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Header;