import candidates from "../../../data/candidates.json";
export async function getCandidateById(id) {
    // simulate waiting for an API response
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const savedCandidate =
        JSON.parse(localStorage.getItem("candidates")) || candidates;

    // error handling for invalid id
    if (id === undefined || id === null) {
        throw new Error("Invalid candidate ID");
    }

    // error handling for candidate not found
    if (!savedCandidate.some((candidate) => candidate.id === id)) {
        throw new Error("Candidate not found");
    }

    const candidate = savedCandidate.find((candidate) => candidate.id === id);
    return candidate;
}
