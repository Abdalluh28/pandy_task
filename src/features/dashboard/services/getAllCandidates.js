import candidates from "../../../data/candidates.json";
import getAvailabilityCategory from "../helpers/getAvailabilityCategory";
import getStatusCategory from "../helpers/getStatusCategory";

export default async function getAllCandidates({ search, filters, sort }) {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // simulate random error
    if (Math.random() < 0.1) {
        throw new Error(
            "Failed to fetch candidates. Please check your connection and try again.",
        );
    }

    // filter candidates based on search query
    let searchResults = JSON.parse(localStorage.getItem("candidates")) || candidates;
    if (search && search.length > 0) {
        const lowerSearch = search.toLowerCase();
        searchResults = searchResults.filter((candidate) => {
            return (
                candidate.fullName.toLowerCase().includes(lowerSearch) ||
                candidate.headline.toLowerCase().includes(lowerSearch) ||
                candidate.skills.some((skill) =>
                    skill.toLowerCase().includes(lowerSearch),
                )
            );
        });
    }

    // filter candidates based on filters
    searchResults = searchResults.filter((candidate) => {
        // handle location filter
        const locationMatch =
            filters.location === "all" ||
            candidate.location
                .toLowerCase()
                .includes(filters.location.toLowerCase());

        // handle experience filter
        const [from, to] = filters.experience.split("-");

        const experienceFrom = parseInt(from) || 0;
        const experienceTo = to ? parseInt(to) : Infinity;

        const candidateExperience = candidate.yearsOfExperience;

        const experienceMatch =
            filters.experience === "all" ||
            (candidateExperience >= experienceFrom &&
                candidateExperience <= experienceTo);

        // handle availability filter
        const availabilityParser = getAvailabilityCategory(
            candidate.availability,
        );
        const availabilityMatch =
            filters.availability === "all" ||
            availabilityParser === filters.availability;

        // handle status filter
        const statusParser = getStatusCategory(candidate.status);
        const statusMatch =
            filters.status === "all" || statusParser === filters.status;

        return (
            locationMatch && experienceMatch && availabilityMatch && statusMatch
        );
    });

    // sort candidates based on sort option
    searchResults.sort((a, b) => {
        if (sort === "experience") {
            return b.yearsOfExperience - a.yearsOfExperience;
        } else if (sort === "best") {
            return b.score - a.score;
        } else {
            return new Date(b.updatedAt) - new Date(a.updatedAt);
        }
    });


    return searchResults;
}
