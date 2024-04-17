import {GiHamburgerMenu} from 'react-icons/gi'
import {BsInfoCircleFill} from 'react-icons/bs'
import {AiFillHome} from 'react-icons/ai'
import {IoMdClose} from 'react-icons/io'
import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import './index.css'

const Header = () => {
  return (
    <>
      <div className="header-container">
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
            alt="website logo"
            className="website-logo"
          />
        </Link>

        <Popup
          modal
          trigger={
            <button
              data-testid="hamburgerIconButton"
              type="button"
              className="trigger-button"
            >
              <GiHamburgerMenu className="icons" />
            </button>
          }
        >
          {close => (
            <div className="pop-up-menu">
              <button
                data-testid="closeButton"
                type="button"
                className="close-button"
                onClick={() => close()}
              >
                <IoMdClose className="icons" />
              </button>
              <ul className="menu-home">
                <Link to="/" className="link">
                  <li className="d-flex">
                    <AiFillHome className="home-info-icon" />
                    <h1 className="home-info-icon">Home</h1>
                  </li>
                </Link>
                <Link to="/about"  className="link">
                  <li className="d-flex">
                    <BsInfoCircleFill className="home-info-icon" />
                    <h1 className="home-info-icon">About</h1>
                  </li>
                </Link>
              </ul>
            </div>
          )}
        </Popup>
      </div>
      <hr />
    </>
  )
}
export default Header
