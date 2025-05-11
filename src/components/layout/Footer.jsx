const Footer = () => {
  return (
    <footer className="bg-white py-6 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-lg font-semibold text-primary-600">Skillify</span>
            <p className="text-sm text-secondary-500 mt-1">Improve your coding skills with challenges and competitions</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-secondary-500 hover:text-secondary-700">
              <span className="sr-only">About</span>
              About
            </a>
            <a href="#" className="text-secondary-500 hover:text-secondary-700">
              <span className="sr-only">Contact</span>
              Contact
            </a>
            <a href="#" className="text-secondary-500 hover:text-secondary-700">
              <span className="sr-only">Privacy</span>
              Privacy
            </a>
            <a href="#" className="text-secondary-500 hover:text-secondary-700">
              <span className="sr-only">Terms</span>
              Terms
            </a>
          </div>
        </div>
        <div className="mt-6 text-center text-sm text-secondary-500">
          &copy; {new Date().getFullYear()} SKillify. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer