
export default function Skills({ candidate }) {

    if (!candidate?.skills || candidate.skills.length === 0) {
        return (
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
                <p className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Skills</p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">No skills information available.</p>
            </div>
        )
    }

    return (
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
            <p className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Skills</p>
            <div className="flex flex-wrap gap-2">
                {candidate?.skills?.map((skill, index) => (
                    <span key={index} className="px-3 py-2 bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium">
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    )
}
