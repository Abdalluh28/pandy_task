import { useState } from "react";
import Candidates from "./Candidates";
import SearchAndFilter from "./controls/SearchAndFilter";
import DashboardHeader from "./DashboardHeader";
import Sort from "./Sort";

export default function Dashboard() {
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
