import { useEffect, useState } from "react";
import Candidates from "../features/dashboard/Candidates";
import SearchAndFilter from "../features/dashboard/controls/SearchAndFilter";
import DashboardHeader from "../features/dashboard/DashboardHeader";
import Sort from "../features/dashboard/Sort";
import { useSearchParams } from "react-router-dom";

export default function Dashboard() {
    // clear the search params on initial load to reset filters and search
    const [searchParams, setSearchParams] = useSearchParams();
    useEffect(() => {
        if ([...searchParams.keys()].length > 0) {
            setSearchParams({}, { replace: true });
        }
    }, [])

    // 
    const [candidatesNumber, setCandidatesNumber] = useState(0);


    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <DashboardHeader />
            <SearchAndFilter />
            <Sort candidatesNumber={candidatesNumber} />
            <Candidates setCandidatesNumber={setCandidatesNumber} />
        </div>
    )
}
