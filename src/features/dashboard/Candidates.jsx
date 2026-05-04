import Skeleton from "react-loading-skeleton";
import CandidateCard from "./CandidateCard";
import { useGetAllCandidates } from "./hooks/useGetAllCandidates";
import "react-loading-skeleton/dist/skeleton.css";
import useTheme from "../../context/useTheme";
import ErrorBoundary from "./ErrorBoundary";

export default function Candidates() {
    const { candidates, error, isLoading, refetch } = useGetAllCandidates();
    const { darkMode } = useTheme();

    return (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Loading Skeleton when the data is loading */}
            {isLoading && (
                Array.from({ length: 6 }).map((_, index) => (
                    <Skeleton key={index} height={150} baseColor={darkMode ? "#1f2937" : "#ebebeb"}
                        highlightColor={darkMode ? "#374151" : "#f5f5f5"} className="mb-4" />
                ))
            )}

            {/* Error message when there is an error */}
            {error && (
                <div className="col-span-full flex items-center justify-center">
                    <ErrorBoundary error={error} refetch={refetch} />
                </div>
            )}

            {/* Render the candidates */}
            {candidates && candidates.map(candidate => (
                <CandidateCard key={candidate.id} candidate={candidate} />
            ))}

            {/* if no candidates are found */}
            {!isLoading && !error && candidates && candidates.length === 0 && (
                <p className="text-gray-500">No candidates found.</p>
            )}

        </div>
    )
}
