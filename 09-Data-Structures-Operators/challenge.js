'use strict';

// #1
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//const players1 = [...game.players[0]];
//const players2 = [...game.players[1]];
const [players1, players2] = game.players;
const [gk, ...fieldPlayers] = players1;
const allPlayers = [...players1, ...players2];
const players1Final = [...players1, 'Thiago', 'Countinho', 'Perisic'];

//헷갈렸던 부분(5번): nested destructuring
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

const printGoals = (...players) => {
  //players의 수를 출력해야 함
  console.log(`${players.length} goals were scored`);
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

//헷갈렸던 부분(7번): 두 문장으로 나눠서 구현하기
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

// #2
for (const [number, name] of game.scored.entries()) {
  console.log(`Goal ${number + 1}: ${name}`);
}

let oddSum = 0;
const odds = Object.values(game.odds);
for (const odd of odds) {
  oddSum += odd;
}
const average = oddSum / odds.length;
console.log(average);

// 내 코드
console.log(`Odd of victory ${game?.team1}: ${game.odds.team1}`);
console.log(`Odd of draw: ${game.odds.x}`);
console.log(`Odd of victory ${game?.team2}: ${game.odds.team2}`);
// 모범답안
// teamStr을 따로 선언할 생각을 하지 못했다..! game의 프로퍼티를 조작하는 대신 문자열 자체로 접근하기
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}

const scorers = {};
const scoredPlayers = Object.values(game.scored);
scoredPlayers.forEach(player => {
  scorers[player] ? (scorers[player] += 1) : (scorers[player] = 1);
});
console.log(scorers);
//모범답안: forEach 대신 for (const player of game.scored)로도 가능하다.

// #3
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

//const events = [...new Set(gameEvents)];
// different game events를 저장하라고 했으므로 value만을 저장해야 한다
const events = [...new Set(gameEvents.values())];
console.log(events);

gameEvents.delete(64);
console.log(gameEvents);

const average = 90 / gameEvents.size;
console.log(`An event happend, on average, every ${average} minutes`); // 9
// Bonus: extra time 제외
const time = [...gameEvents.keys()].pop();
console.log(time); // 92
console.log(
  `An event happend, on average, every ${time / gameEvents.size} minutes`
); // 9.2

for (const [minute, event] of gameEvents) {
  console.log(
    minute <= 45
      ? `[FIRST HALF] ${minute}: ${event}`
      : `[SECOND HALF] ${minute}: ${event}`
  );
}
// 모범답안
for (const [minute, event] of gameEvents) {
  const half = minute <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${minute}: ${event}`);
}

// #4
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const underscoreToCamel = function (name) {
  const [left, right] = name.toLowerCase().trim().split('_');
  const camelCase = left + right.replace(right[0], right[0].toUpperCase());
  return camelCase;
};

const button = document.querySelector('button');

button.addEventListener('click', function () {
  // 버튼 클릭 후 text를 가져와야 한다
  const text = document.querySelector('textarea').value;
  const names = text.split('\n');
  let order = 1;
  for (const name of names) {
    console.log(underscoreToCamel(name).padEnd(20, ' '), '✅'.repeat(order));
    order += 1;
  }
});

// 모범답안: row.entries()를 이용하여 index로 emoji를 반복 출력함
document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});
