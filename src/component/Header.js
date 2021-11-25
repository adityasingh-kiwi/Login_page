import React ,{useState}from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

const Header = () => {


    const [modalState,handleModalState] = useState(false);
    const handleUserDetails = () => {

        handleModalState(true);
     
    }

    return (

        <div className="header">
            <a href="#default" className="logo">Naviagtion</a>
            <div className="header-right">
                <button className="active" onClick={handleUserDetails}>user Details</button>


            </div>

        </div>
    )
}

export default Header;
