import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth()

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-primary-600">Skillify</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link to="/challenges" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-secondary-500 hover:text-secondary-700 hover:border-secondary-300">
                Challenges
              </Link>
              <Link to="/leaderboard" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-secondary-500 hover:text-secondary-700 hover:border-secondary-300">
                Leaderboard
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            {isAuthenticated ? (
              <div className="flex items-center">
                <Link to="/dashboard" className="px-3 py-2 rounded-md text-sm font-medium text-secondary-500 hover:text-secondary-700">
                  Dashboard
                </Link>
                <Link to="/profile" className="px-3 py-2 rounded-md text-sm font-medium text-secondary-500 hover:text-secondary-700">
                  {user.username}
                </Link>
                <button
                  onClick={logout}
                  className="ml-3 px-3 py-2 rounded-md text-sm font-medium text-white bg-primary-600 hover:bg-primary-700"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div>
                <Link
                  to="/login"
                  className="px-3 py-2 rounded-md text-sm font-medium text-secondary-500 hover:text-secondary-700"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="ml-3 px-3 py-2 rounded-md text-sm font-medium text-white bg-primary-600 hover:bg-primary-700"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar