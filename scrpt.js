let scores = { red: 0, blue: 0, green: 0, yellow: 0 };

function OpeningCeremony(callback) {
  console.log("Welcome to the Sports Day Event!");
  console.log("Initial Scores:", scores);  
  setTimeout(() => {
    console.log("The event is about to begin!");
    callback(Race100M);
  }, 1000);
}


function Race100M(callback) {
  console.log("100m Race Starting...");
    let times = Object.keys(scores).reduce((acc, color) => {
    acc[color] = Math.floor(Math.random() * 6) + 10; 
    return acc;
  }, {});
  
  let sorted = Object.keys(times).sort((a, b) => times[a] - times[b]);
  scores[sorted[0]] += 50; 
  scores[sorted[1]] += 25; 
  console.log("Race Results (times in seconds):", times);
  console.log("Updated Scores after 100m Race:", scores);  
  setTimeout(() => callback(LongJump), 3000);
}


function LongJump(callback) {
  console.log("Long Jump Starting...");
  
  let winner = Object.keys(scores)[Math.floor(Math.random() * 4)];
  scores[winner] += 30; 
  console.log(`Long Jump Winner: ${winner}`);
  console.log("Updated Scores after Long Jump:", scores);  
  setTimeout(() => callback(HighJump), 2000);
}


function HighJump(callback) {
  console.log("High Jump Starting...");  
  let color = prompt("Which color had the highest jump? (red, blue, green, yellow)");
  if (color && scores[color] !== undefined) {
    scores[color] += 20; 
    console.log(`${color} gets 20 points!`);
  } else {
    console.log("No valid input provided. Event skipped. No points awarded.");
  }
  console.log("Updated Scores after High Jump:", scores);  
  callback(AwardCeremony);
}


function AwardCeremony() {
  console.log("Award Ceremony Starting...");
  console.log("Final Scores:", scores);
  
  let sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);  
  console.log("🏆 Winners:");
  sorted.forEach(([color, score], i) => {
    console.log(`${i + 1}. ${color}: ${score} points`);
  });
}

OpeningCeremony(Race100M);
