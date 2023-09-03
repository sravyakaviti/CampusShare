import React, { useContext } from "react";
import Logo from "../img/logo.png"
import { AuthContext } from "../context/authContext";
import { Link } from 'react-router-dom'
const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='logo'>
        <Link to="/"><img className='img' src={Logo} alt="" /></Link>
        </div>
        <div className='links'>
          <Link className='link' to="/"><h6 className='h6'>GENERAL</h6></Link>
          <Link className='link' to="/?cat=events"><h6 className='h6'>EVENTS</h6></Link>
          <Link className='link' to="/?cat=technology"><h6 className='h6'>TECHNOLOGY</h6></Link>
          <Link className='link' to="/?cat=sports"><h6 className='h6'>SPORTS</h6></Link>
          <Link className='link' to="/?cat=news"><h6 className='h6'>NEWS</h6></Link>
          <Link className='link' to="/?cat=lost/found"><h6 className='h6'>LOST/FOUND</h6></Link>
          <Link className='link' to="/?cat=buy/sell"><h6 className='h6'>BUY/SELL</h6></Link>
          <span className='span write'><Link className='link write-text' to="/write">Write</Link></span>
          {currentUser && (
            <>
              <img
                className="img user-img"
                src={currentUser?.img ? currentUser.img :"https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png"}
                alt=""
              />
              <Link className="link" to="/user"><span className="span">{currentUser?.username}</span></Link>
              {/* <span className="span" onClick={logout}>
                Logout
              </span> */}
            </>
          )}
          {!currentUser && (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
          {/* <img className="img user-img"src="https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png" alt="" />
          <span className='span'>{currentUser?.username}</span>
          {currentUser ? (
            <span className='span' onClick={logout}>Logout</span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )} */}
          {/* <span className='span' onClick={logout}>Logout</span> */}
          
        </div>
      </div>
    </div>
  )
}

export default Navbar
