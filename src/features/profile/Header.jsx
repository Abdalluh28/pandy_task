import { Briefcase, CircleUserRound, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import LinkIcon from "./ui/LinkIcon";
import HeaderActions from "./HeaderActions";

export default function Header({ candidate }) {


    const tagName = candidate?.fullName?.split(' ').map(name => name[0]).join('').slice(0, 2);
    const canMakeOffer = candidate?.status?.toLowerCase() !== 'not currently looking' && candidate?.status?.toLowerCase() !== 'rejected' && candidate?.status?.toLowerCase() !== 'shortlisted';
    
    return (
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden mb-6">
            <div className="p-6 flex items-start justify-between mb-3">
                <div className="flex items-start gap-6">
                    <div className="w-20 h-20 bg-linear-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-semibold shrink-0">{tagName}</div>
                    <div className="space-y-2">
                        <p className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">{candidate?.fullName}</p>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">{candidate?.headline}</p>
                        <div className="flex flex-wrap gap-4 text-sm">
                            {/* location, years of experience, status */}
                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                <MapPin className="w-4 h-4" />
                                <span className="">{candidate?.location}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                <Briefcase className="w-4 h-4" />
                                <span className="">{candidate?.yearsOfExperience}+ years</span>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium border ${canMakeOffer ? 'bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800' : 'bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800'}`}>
                                {candidate?.status}
                            </span>
                        </div>
                        <div className="flex items-center gap-4 mt-4">
                            {/* links */}
                            <LinkIcon icon={<CircleUserRound className="w-5 h-5" />} url={candidate?.links?.portfolio} />
                            <LinkIcon icon={<FaLinkedin className="w-5 h-5" />} url={candidate?.links?.linkedin} />
                            <LinkIcon icon={<FaGithub className="w-5 h-5" />} url={candidate?.links?.github} />
                        </div>
                    </div>
                </div>
                <HeaderActions candidate={candidate} canMakeOffer={canMakeOffer} />
            </div>
        </div>
    )
}
