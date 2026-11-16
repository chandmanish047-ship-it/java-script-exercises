
let candidates = [];

// Ask for the number of candidates
let numberOfCandidates = Number(prompt("Enter the number of candidates:"));

// Ask for candidate names and store them in objects
for (let i = 0; i < numberOfCandidates; i++) {
    let name = prompt("Name for candidate " + (i + 1));

    candidates.push({
        name: name,
        votes: 0
    });
}

// Ask for the number of voters
let numberOfVoters = Number(prompt("Enter the number of voters:"));

// Ask each voter for their choice
for (let i = 0; i < numberOfVoters; i++) {
    let vote = prompt("Voter " + (i + 1) + ", enter candidate name:");

    if (vote !== "") {
        let candidate = candidates.find(c => c.name === vote);

        if (candidate !== undefined) {
            candidate.votes++;
        }
    }
}

// Sort candidates according to votes (highest first)
candidates.sort((a, b) => {
    return b.votes - a.votes;
});

// Print the winner
console.log(
    "The winner is " + candidates[0].name +
    " with " + candidates[0].votes + " votes."
);

// Print all results
console.log("results:");

for (let i = 0; i < candidates.length; i++) {
    console.log(
        candidates[i].name + ": " +
        candidates[i].votes + " votes"
    );
}
