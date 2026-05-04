import { useQuery } from "@tanstack/react-query";
import getAllCandidates from "../services/getAllCandidates";

export const useGetAllCandidates = () => {
    const { data, error, isLoading, refetch } = useQuery({
        queryKey: ["candidates"],
        queryFn: getAllCandidates,
        retry: false,
    });

    return {
        candidates: data,
        error,
        isLoading,
        refetch
    };
};
