// helper function to categorize availability into "immediate", "1-month", "3-months", "3-plus"
function getAvailabilityCategory(availability) {
    const value = availability.toLowerCase();

    if (value === "immediate") return "immediate";

    if (value.includes("week") || value.includes("2 week")) return "1-month";

    if (value.includes("1 month")) return "1-month";

    if (value.includes("month")) {
        const num = parseInt(value);
        if (num <= 3) return "3-months";
        return "3-plus";
    }

    return "3-plus";
}

export default getAvailabilityCategory;