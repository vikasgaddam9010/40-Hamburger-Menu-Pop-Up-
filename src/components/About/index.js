import Header from '../Header'
import './index.css'

const About = () => {
  return (
    <div className="width">
      <Header />
      <div className="home-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
          alt="about"
          className="home-box d-none-lg"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
          alt="about"
          className="home-box-sm"
        />
      </div>
    </div>
  )
}
export default About
