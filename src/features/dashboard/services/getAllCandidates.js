import candidates from '../../../data/candidates.json';

export default async function getAllCandidates() {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // simulate random error
    if (Math.random() < 0.1) {
        throw new Error('Failed to fetch candidates. Please check your connection and try again.');
    }

    return candidates;
}