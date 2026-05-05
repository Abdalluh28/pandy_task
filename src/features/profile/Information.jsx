import { Calendar, Earth, GraduationCap, Star, TrendingUp } from "lucide-react"

export default function Information({ candidate }) {

    if (!candidate) {
        return (
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
                <p className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Information</p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">No information available.</p>
            </div>
        )
    }

    const availability = candidate.availability.toLowerCase() === 'immediate' ? 'Available immediately' : `Available in ${candidate.availability}`;
    const lastUpdated = new Date(candidate.updatedAt).toLocaleDateString();

    return (
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
            <p className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Candidate Info</p>
            <div className="space-y-4">
                {/* Availability */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500 mb-1">
                        <Calendar className="w-4 h-4" />
                        <span className="">Availability</span>
                    </div>
                    <p className="text-gray-900 dark:text-gray-100 font-medium">{availability}</p>
                </div>
                {/* Languages */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500 mb-1">
                        <Earth className="w-4 h-4" />
                        <span className="">Languages</span>
                    </div>
                    <p className="text-gray-900 dark:text-gray-100 font-medium">{candidate?.languages?.join(', ') || 'Not specified'}</p>
                </div>
                {/* Education */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500 mb-1">
                        <GraduationCap className="w-4 h-4" />
                        <span className="">Education</span>
                    </div>
                    <p className="text-gray-900 dark:text-gray-100 font-medium">{candidate?.education || 'Not specified'}</p>
                </div>
                {/* Match Score */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500 mb-1">
                        <TrendingUp className="w-4 h-4" />
                        <span className="">Match Score</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="flex-1 bg-gray-200 dark:bg-gray-800 rounded-full h-2">
                            <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${candidate?.score}%` }}></div>
                        </div>
                        <span className="text-gray-900 dark:text-gray-100 font-semibold">{candidate?.score}%</span>
                    </div>
                </div>
                {/* Last Updated */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500 mb-1">
                        <Star className="w-4 h-4" />
                        <span className="">Last Updated</span>
                    </div>
                    <p className="text-gray-900 dark:text-gray-100 font-medium">{lastUpdated}</p>
                </div>
            </div>
        </div>
    )
}
