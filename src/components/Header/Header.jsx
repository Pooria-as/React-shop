import React from "react"
import "./Header.styles.scss"
import { ReactComponent as Logo } from '../../assets/Logo/crown.svg'
import { Link } from "react-router-dom"
import { auth } from "../../firebase/firebase"
import { Button } from "react-bootstrap"


const Header = () =>(
    <div className="header">
    <Link to='/' className='logo-container'>
        <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    Shop
                </Link>
            <Link className='option' to='/contact'>
                Contact
            </Link>
            

            {
                auth.currentUser ?
            <Button variant='danger' onClick={()=>auth.signOut()}>Sign Out</Button>
                
            :
            <Link className='option' to='/signIn'>
                Sign in
            </Link>
            }










                </div>
</div>
)
export default Header