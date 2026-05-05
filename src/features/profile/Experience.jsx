
export default function Experience({ candidate }) {

    if (!candidate?.experience || candidate.experience.length === 0) {
        return (
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
                <p className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Experience</p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">No experience information available.</p>
            </div>
        )
    }

    return (
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
            <p className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Experience</p>
            <div className="space-y-6">
                {candidate?.experience?.map((exp, index) => (
                    <div key={index} className="relative pl-6 border-l-2 border-gray-200 dark:border-gray-800">
                        <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                        <div className="flex justify-between items-start mb-6">
                            <div className="">
                                <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">{exp.title}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-500">{exp.start} - {exp.end}</p>
                                <ul className="mt-2 list-disc pl-5 text-gray-600 dark:text-gray-400 space-y-1">
                                    {exp.highlights.map((highlight, highlightIndex) => (
                                        <li key={highlightIndex}>{highlight}</li>
                                    ))}
                                </ul>
                            </div>
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                {exp.company}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
