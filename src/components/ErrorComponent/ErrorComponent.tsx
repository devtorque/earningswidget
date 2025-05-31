export const ErrorComponent = ({ error }: { error: string }) => {
  return (
    <div className="min-h-[700px] flex flex-col items-center justify-center bg-red-50 border border-red-200 rounded-lg p-8">
    <div className="bg-red-100 rounded-full p-4 mb-4">
      <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>
    <h3 className="text-lg font-semibold text-red-500 mb-2">Oops! Unable to load earnings data</h3>
    <p className="text-red-500 italic text-xs text-center max-w-md">{error}</p>
    <button 
      onClick={() => window.location.reload()}
      className="mt-4 px-4 py-1 bg-defaultYellow hover:bg-red-200 rounded-md transition-colors duration-200 hover:cursor-pointer"
    >
      Try Again
    </button>
  </div>
  )
}
