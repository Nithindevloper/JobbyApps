import Header from '../Header'
import './index.css'

const notFoundImage =
  'https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png'

const NotFound = () => (
  <>
    <div className="not-found-container">
      <div>
        <img src={notFoundImage} alt="not found" className="not-found-image" />
      </div>
      <h1 className="not-found-heading">Page Not Found</h1>
      <p className="not-desc">
        we're sorry, the page you requested could not be found
      </p>
    </div>
  </>
)

export default NotFound
