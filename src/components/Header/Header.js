import React, {useReducer} from "react";
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { UseStateValue } from '../../Provider/StateProvider';
import './Header.css'

const Header = () => {

  const [{ basket }, dispatch] = UseStateValue();

  let logo_image = "http://pngimg.com/uploads/amazon/amazon_PNG11.png";
  
  return(
    <>
      <nav className="header">
        { /* logo */}
        <Link to="/">
          <img
            className="header_logo"
            src={logo_image}
            alt="logo image"
          />
        </Link>
        
        { /* search box */}
        <div className="header_search">
          <input className="header_input" type='text' />
          <SearchIcon className="header_icon" />
        </div>

        { /* links */}
        <div className="header_nav">
          <Link to="/" className="header_link">
            <div className="header_option">
              <span className="header_optionLineOne">Hello Mahmoud</span>
              <span className="header_optionLineTwo">Sign In</span>
            </div>
          </Link>

          <Link to="/" className="header_link">
            <div className="header_option">
              <span className="header_optionLineOne">Returns</span>
              <span className="header_optionLineTwo">& Orders</span>
            </div>
          </Link>

          <Link to="/" className="header_link">
            <div className="header_option">
              <span className="header_optionLineOne">Your</span>
              <span className="header_optionLineTwo">Prime</span>
            </div>
          </Link>
        </div>

        { /* basket icon */}
        <Link to='/checkout' className="header_link">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionLineTwo header_basketCount"> {basket.length} </span>
          </div>
        </Link>
      </nav>
    </>
  )
}

export default Header;