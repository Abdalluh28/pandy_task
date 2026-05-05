import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCandidate as updateCandidateApi } from "../services/updateCandidate";

export function useUpdateCandidate(id) {
    const queryClient = useQueryClient();

    const { mutate, error, isPending } = useMutation({
        mutationFn: (updatedData) => updateCandidateApi(id, updatedData),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["candidate", id]});
            queryClient.invalidateQueries({queryKey: ["candidates"]});
            toast.success("Candidate updated successfully");
        },
        onError: () => {
            toast.error("Failed to update candidate. Please try again.");
        },
    });

    return {
        updateCandidate: mutate,
        error,
        isLoading: isPending,
    };
}
