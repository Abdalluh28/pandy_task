import { ArrowLeft, TriangleAlert } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import About from "./About";
import Experience from "./Experience";
import Header from "./Header";
import { useGetCandidateById } from "./hooks/useGetCandidateById";
import Information from "./Information";
import Projects from "./Projects";
import Skills from "./Skills";
import Loading from "./ui/Loading";
export default function Profile() {

    const params = useParams();
    const { id } = params;
    const { candidate, isLoading, error } = useGetCandidateById(id);

    const navigate = useNavigate();

    return (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <button onClick={() => navigate('/')} className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-6 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300 cursor-pointer">
                <ArrowLeft />
                <span>Back to candidates</span>
            </button>
            {error && (
                <div className="max-w-md w-full bg-white dark:bg-gray-900 rounded-2xl border border-red-200 dark:border-red-900 p-8 text-center">
                    <div className="w-16 h-16 bg-red-100 dark:bg-red-950 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <TriangleAlert className="w-8 h-8 text-red-600 dark:text-red-400" />
                    </div>
                    <p className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Something went wrong</p>
                    <p className='text-gray-600 dark:text-gray-400 mb-6'>Error: {error.message}</p>
                </div>
            )}

            {!error && (
                <>
                    {isLoading ? (
                        <Loading index={0} />
                    ) : (
                        <Header candidate={candidate} />
                    )}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2 space-y-6">
                            {isLoading ? (
                                <>
                                    <Loading index={1} />
                                    <Loading index={2} />
                                    <Loading index={3} />
                                    <Loading index={4} />
                                </>
                            ) : (
                                <>
                                    <About candidate={candidate} />
                                    <Skills candidate={candidate} />
                                    <Experience candidate={candidate} />
                                    <Projects candidate={candidate} />
                                </>
                            )}
                        </div>
                        {isLoading ? (
                            <Loading index={5} />
                        ) : (
                            <div className="space-y-6">
                                <Information candidate={candidate} />
                            </div>
                        )}
                    </div>
                </>
            )}

        </div>
    )
}
