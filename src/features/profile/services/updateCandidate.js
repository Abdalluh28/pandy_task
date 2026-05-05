import candidates from "../../../data/candidates.json";

export async function updateCandidate(id, updatedData) {
    // simulate waiting for an API response
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const savedCandidate =
        JSON.parse(localStorage.getItem("candidates")) || candidates;

    // error handling for invalid id
    if (id === undefined || id === null) {
        throw new Error("Invalid candidate ID");
    }

    // error handling for candidate not found
    const index = savedCandidate.findIndex((candidate) => candidate.id === id);
    if (index === -1) {
        throw new Error("Candidate not found");
    }

    
    // update candidate data
    const updatedCandidate = { ...savedCandidate[index], ...updatedData };
    savedCandidate[index] = updatedCandidate;

    // save updated candidate data to local storage
    localStorage.setItem("candidates", JSON.stringify(savedCandidate));
    return updatedCandidate;
}
