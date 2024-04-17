import Header from '../Header'
import './index.css'

const Home = () => {
  return (
    <div className="width">
      <Header />
      <div className="home-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
          alt="home"
          className="home-box d-none-lg"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
          alt="home"
          className="home-box-sm"
        />
      </div>
    </div>
  )
}
export default Home
