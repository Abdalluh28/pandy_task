
export default function DashboardHeader() {
    return (
        <div className='text-center max-w-3xl mx-auto mb-12'>
            <p className='text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4'>Discover Top Tech Talent</p>
            <p className='text-xl text-gray-600 dark:text-gray-400 mb-6'>Connect with verified professionals ready to join your team</p>
            <div className="flex justify-center items-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                    <span className='font-semibold text-gray-900 dark:text-gray-100'>1,247</span>
                    <span className='text-gray-600 dark:text-gray-400'>Active candidates</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className='font-semibold text-gray-900 dark:text-gray-100'>50+</span>
                    <span className='text-gray-600 dark:text-gray-400'>Tech skills</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className='font-semibold text-gray-900 dark:text-gray-100'>98%</span>
                    <span className='text-gray-600 dark:text-gray-400'>Response rate</span>
                </div>
            </div>
        </div>
    )
}
