let sportsOne: string[] = ["Golf", "Boxing", "Football", "Swimming"]

for (let sport of sportsOne) {
    console.log(sport);
}

sportsOne.push("Baseball");
for (let i = 0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]);
}