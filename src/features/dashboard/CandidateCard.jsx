import { Briefcase, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CandidateCard({ candidate }) {
    const tagName = candidate.fullName.split(' ')[0][0] + candidate.fullName.split(' ')[1][0];
    const canMakeOffer = candidate.status.toLowerCase() !== 'not currently looking' && candidate.status.toLowerCase() !== 'rejected' && candidate.status.toLowerCase() !== 'shortlisted';

    const navigate = useNavigate();
    return (
        <div className='bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg transition-shadow'>
            <div className='flex items-start gap-4 mb-4'>
                <span className='w-12 h-12 bg-linear-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold shrink-0'>{tagName}</span>
                <div className='flex-1 min-w-0'>
                    <p className="font-semibold text-gray-900 dark:text-gray-100 mb-1">{candidate.fullName}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{candidate.headline}</p>
                </div>
            </div>
            <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <MapPin className="w-4 h-4 shrink-0" />
                    <span className="">{candidate.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Briefcase className="w-4 h-4 shrink-0" />
                    <span className="">{candidate.yearsOfExperience}+ years</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                    {/* showing first 5 skills */}
                    {candidate.skills.slice(0, 5).map((skill, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md text-xs">
                            {skill}
                        </span>
                    ))}
                    {/* showing the rest as a count */}
                    {candidate.skills.length > 5 && (
                        <span className="px-2 py-1 text-gray-500 dark:text-gray-500 text-xs">
                            +{candidate.skills.length - 5} more
                        </span>
                    )}
                </div>
            </div>
            <div className="flex items-center justify-between">
                <p className={`px-3 py-1 rounded-full text-xs font-medium border ${canMakeOffer ? 'bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800' : 'bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800'}`}>{candidate.status}</p>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium cursor-pointer"
                    onClick={() => navigate(`/candidate/${candidate.id}`)}>
                    View Profile
                </button>
            </div>
        </div>
    )
}
