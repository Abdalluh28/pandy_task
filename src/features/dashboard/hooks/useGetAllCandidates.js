import { useQuery } from "@tanstack/react-query";
import getAllCandidates from "../services/getAllCandidates";
import { useSearchParams } from "react-router-dom";

export const useGetAllCandidates = () => {
    // get the params from url to handle search, filters, and sort
    const [searchParams] = useSearchParams();
    const search = searchParams.get("search") || "";
    const filters = {
        location: searchParams.get("location") || "all",
        experience: searchParams.get("experience") || "all",
        availability: searchParams.get("availability") || "all",
        status: searchParams.get("status") || "all",
    };
    const sort = searchParams.get("sort") || "recent";

    // fetch candidates using react-query
    // and pass the search and filters as query params to the getAllCandidates service function
    const { data, error, isLoading, refetch } = useQuery({
        queryFn: () =>
            getAllCandidates({
                search,
                filters,
                sort
            }),
        queryKey: ["candidates", search, filters, sort],
        retry: false,
    });

    return {
        candidates: data,
        error,
        isLoading,
        refetch,
    };
};
