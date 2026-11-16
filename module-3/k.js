// 1. Ask for the number of candidates
const numCandidates = parseInt(prompt("Enter the number of candidates:"));

// Array to store candidate objects
const candidates = [];

// 2. Ask for the names of the candidates and initialize their votes to 0
for (let i = 0; i < numCandidates; i++) {
    const name = prompt(`Name for candidate ${i + 1}:`);
    candidates.push({
        name: name,
        votes: 0
    });
}

// 3. Ask for the number of voters
const numVoters = parseInt(prompt("Enter the number of voters:"));

// 4. Ask each voter in turn who they will vote for
for (let i = 0; i < numVoters; i++) {
    const vote = prompt(`Voter ${i + 1}, enter the name of the candidate you want to vote for (leave empty for an empty vote):`);
    
    // Check if the vote is not empty/null
    if (vote && vote.trim() !== "") {
        // Find if the candidate exists (case-insensitive search)
        const candidate = candidates.find(c => c.name.toLowerCase() === vote.trim().toLowerCase());
        if (candidate) {
            candidate.votes++;
        } else {
            console.log(`Candidate "${vote}" not found. Counted as an empty vote.`);
        }
    } else {
        console.log("Empty vote cast.");
    }
}

// 5. Sort candidates by votes in descending order using the object property comparison hint
candidates.sort((a, b) => {
    return b.votes - a.votes;
});

// 6. Announce the winner and print the results to the console
const winner = candidates[0];
console.log(`The winner is ${winner.name} with ${winner.votes} votes.`);
console.log("results:");

for (let i = 0; i < candidates.length; i++) {
    console.log(`${candidates[i].name}: ${candidates[i].votes} votes`);
}