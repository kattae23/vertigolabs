export default function Loading () {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900'>
      <h1 className='text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6'>Loading...</h1>
      <div className='animate-pulse flex space-x-4'>
        <div className='rounded-full bg-gray-400 h-12 w-12' />
        <div className='flex-1 space-y-4 py-1'>
          <div className='h-4 bg-gray-400 rounded w-3/4' />
          <div className='space-y-2'>
            <div className='h-4 bg-gray-400 rounded' />
            <div className='h-4 bg-gray-400 rounded w-5/6' />
          </div>
        </div>
      </div>
    </div>
  )
}
