import { useQuery } from "@tanstack/react-query";
import { getCandidateById } from "../services/getCandidateById";

export function useGetCandidateById(id) {
    const { data, error, isLoading } = useQuery({
        queryFn: () => getCandidateById(id),
        queryKey: ["candidate", id],
        retry: false,
    });

    return {
        candidate: data,
        error,
        isLoading,
    };
}
