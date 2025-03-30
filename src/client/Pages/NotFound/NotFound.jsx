
const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen px-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <h1 className="text-7xl md:text-9xl font-extrabold text-blue-600">404</h1>
            <h2 className="text-xl md:text-3xl font-semibold mt-4 text-center">Oops! Page Not Found</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400 text-center max-w-md text-sm md:text-base">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <a href="/" className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 dark:bg-blue-500 dark:hover:bg-blue-400">
                Go Home
            </a>
        </div>
    )
}

export default NotFound
