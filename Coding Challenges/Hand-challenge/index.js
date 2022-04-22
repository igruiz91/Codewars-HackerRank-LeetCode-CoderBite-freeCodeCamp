/* eslint-disable prefer-const */
/* eslint-disable semi */
/* eslint-disable quotes */
/*
  👉 : moves the memory pointer to the next cell
  👈 : moves the memory pointer to the previous cell
  👆 : increment the memory cell at the current position
  👇 : decreases the memory cell at the current position.
  🤜 : if the memory cell at the current position is 0, jump just after the corresponding 🤛
  🤛 : if the memory cell at the current position is not 0, jump just after the corresponding 🤜
  👊 : Display the current character represented by the ASCII code defined by the current position.
*/
const MIN_VALUE = 0;
const MAX_VALUE = 255;

const clamp = (value) => {
  if (value < MIN_VALUE) return MAX_VALUE
  if (value > MAX_VALUE) return MIN_VALUE
  return value
}

const searchPrevFist = (instructions, index) => {
  for (var i = index - 1, count = 1; i >= 0; i--) {
    if (instructions[i] === "🤛") count++;
    if (instructions[i] === "🤜") count--;
    if (count === 0) return i;
  }
  return index;
};
const searchNextFist = (instructions, index) => {
  for (var i = index + 1, count = 1; i < instructions.length; i++) {
    if (instructions[i] === "🤜") count++;
    if (instructions[i] === "🤛") count--;
    if (count === 0) return i
  }
  return index;
};

const translate = (string) => {
  let pointer = 0;
  let index = 0;
  let memory = [0];
  let output = "";
  const instructions = Array.from(string)
  const actions = {
    "👉": () => {
      pointer++;
      memory[pointer] |= 0
    },
    "👈": () => {
      pointer--
    },
    "👆": () => {
      memory[pointer] = clamp(memory[pointer] + 1);
    },
    "👇": () => {
      memory[pointer] = clamp(memory[pointer] - 1);
    },
    "🤜": () => {
      if (memory[pointer] === 0) {
        index = searchNextFist(instructions, index);
      }
    },
    "🤛": () => {
      if (memory[pointer] !== 0) {
        index = searchPrevFist(instructions, index);
      }
    },
    "👊": () => {
      output += String.fromCharCode(memory[pointer]);
    }
  };

  while (index < instructions.length) {
    const action = instructions[index];
    actions[action]();
    // console.log({ action, index, pointer, output, memory })
    index++;
  }

  return output
}

module.exports = translate
