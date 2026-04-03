import { Link } from 'react-router-dom'
import { ArrowRightIcon } from '../components/Icons'

const NotFound = () => {
  return (
    <main className="not-found">
      <div className="not-found-inner">
        <h1>404</h1>
        <h2>Page not found</h2>
        <p>The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="btn btn-primary">
          Back to Home <ArrowRightIcon size={16} />
        </Link>
      </div>
    </main>
  )
}

export default NotFound
