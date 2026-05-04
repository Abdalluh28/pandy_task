import SearchAndFilter from "../features/dashboard/controls/SearchAndFilter";
import DashboardHeader from "../features/dashboard/DashboardHeader";
import Sort from "../features/dashboard/Sort";

export default function Dashboard() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <DashboardHeader />
            <SearchAndFilter />
            <Sort />
        </div>
    )
}
