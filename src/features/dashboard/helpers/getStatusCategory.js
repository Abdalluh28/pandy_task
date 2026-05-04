// helper function to categorize status into "open-to-work", "open-to-offer", "not-currently-looking", "interviewing", "all"
function getStatusCategory(status) {
    const value = status.toLowerCase().trim();

    if (value === "open to work") return "open-to-work";

    // handle BOTH "offer" and "offers"
    if (value.includes("open to offer")) return "open-to-offer";

    if (value === "not currently looking") return "not-currently-looking";

    if (value === "interviewing") return "interviewing";

    return "all";
}

export default getStatusCategory