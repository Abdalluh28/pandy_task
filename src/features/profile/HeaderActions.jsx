import { useState } from "react";
import { useUpdateCandidate } from "./hooks/useUpdateCandidate"
import Spinner from "./ui/Spinner";

export default function HeaderActions({ candidate, canMakeOffer }) {
    const { updateCandidate, isLoading } = useUpdateCandidate(candidate?.id);

    // State to track the active action button to show a loading spinner
    // null - reject - shortlist
    const [activeAction, setActiveAction] = useState(null);

    const handleRejectCandidate = () => {
        if (activeAction !== null) return;
        setActiveAction("reject");
        updateCandidate({ status: "Rejected" }, {
            onSettled: () => {
                setActiveAction(null);
            }
        });
    }


    const handleShortlistCandidate = () => {
        if (activeAction !== null) return;
        if (!canMakeOffer) return;
        setActiveAction("shortlist");
        updateCandidate({ status: "Shortlisted" }, {
            onSettled: () => {
                setActiveAction(null);
            }
        });
    }

    return (
        <div className="flex gap-3">
            <button className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition duration-200 cursor-pointer"
                onClick={handleRejectCandidate}>
                {isLoading && activeAction === 'reject' ? <Spinner /> : 'Reject'}
            </button>
            <button
                className={`px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200 ${!canMakeOffer ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                disabled={!canMakeOffer}
                onClick={handleShortlistCandidate}
            >
                {isLoading && activeAction === 'shortlist' ? <Spinner /> : 'Shortlist'}
            </button>
        </div>
    )
}
