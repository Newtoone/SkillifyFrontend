import { Link } from 'react-router-dom'

const DifficultyBadge = ({ difficulty }) => {
  const colors = {
    easy: 'bg-green-100 text-green-800',
    medium: 'bg-yellow-100 text-yellow-800',
    hard: 'bg-red-100 text-red-800'
  }

  return (
    <span className={`px-2 py-1 text-xs font-medium rounded ${colors[difficulty.toLowerCase()]}`}>
      {difficulty}
    </span>
  )
}

const ChallengeCard = ({ challenge }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-5">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-secondary-800 truncate">
            {challenge.title}
          </h3>
          <DifficultyBadge difficulty={challenge.difficulty} />
        </div>
        <div className="mt-2">
          <p className="text-sm text-secondary-600 line-clamp-2">
            {challenge.description}
          </p>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <div className="flex space-x-2">
            {challenge.tags.map((tag, index) => (
              <span key={index} className="px-2 py-1 bg-secondary-100 text-secondary-600 text-xs rounded">
                {tag}
              </span>
            ))}
          </div>
          <span className="text-xs text-secondary-500">
            {challenge.submitCount} submissions
          </span>
        </div>
        <div className="mt-4">
          <Link
            to={`/challenges/${challenge._id}`}
            className="block w-full py-2 px-4 text-center text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-md"
          >
            Solve Challenge
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ChallengeCard