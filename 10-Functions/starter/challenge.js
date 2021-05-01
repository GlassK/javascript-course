'use strict';

// #1

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    let optionText = '';
    for (const option of this.options) {
      optionText += option + '\n';
    }
    const input = Number(
      prompt(`${this.question}\n${optionText}(Write option number)`)
    );
    // 모범답안: .join()을 이용하면 optionText를 별도로 정의할 필요 없다.
    // const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`));

    const validNum = [0, 1, 2, 3];
    if (!isNaN(input) && validNum.includes(input)) {
      this.answers[input] += 1;
    }

    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type == 'array') {
      console.log(this.answers);
    } else if (type == 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

const textCases = [
  [5, 2, 3],
  [1, 5, 3, 9, 6, 1],
];

for (const textCase of textCases) {
  // 헷갈렸던 부분: call method 이용하기
  poll.displayResults.call({ answers: textCase });
  poll.displayResults.call({ answers: textCase }, 'string');
}
