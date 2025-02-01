const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
  "🍒": 2,
  "🍊": 4,
  "🍇": 6,
  "🔔": 8,
};

const SYMBOL_VALUES = {
  "🍒": 0.5,
  "🍊": 1,
  "🍇": 2,
  "🔔": 5,
};

const deposit = () => {
  while (true) {
    const depositAmount = prompt("Enter the amount you want to deposit: ");
    const numberDepositAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount < 0) {
      console.log("Please enter a valid amount");
    } else {
      return numberDepositAmount;
    }
  }
};

const getNumberOfLines = () => {
  while (true) {
    const lines = prompt("Enter the number of lines you want to play: ");
    const numberOfLines = parseInt(lines);

    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > balance) {
      console.log("Please enter a valid number of lines");
    } else {
      return numberOfLines;
    }
  }
};

const getBet = (balance, lines) => {
  while (true) {
    const bet = prompt("Enter the amount you want to bet per line: ");
    const numberBet = parseFloat(bet);

    if (isNaN(numberBet) || numberBet < 0 || numberBet > balance / lines) {
      console.log("Please enter a valid amount");
    } else {
      return numberBet;
    }
  }
};

const spin = () => {
  const symbols = [];
  for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
    for (let i = 0; i < count; i++) {
      symbols.push(symbol);
    }
  }

  const reels = [[]];
  for (let i = 0; i < COLS; i++) {
    reels.push([]);
    const reelSymbols = [...symbols];
    for (let j = 0; j < ROWS; j++) {
      const randomIndex = Math.floor(Math.random() * reelSymbols.length);
      const selectedSymbol = reelSymbols[randomIndex];
      reels[i].push(selectedSymbol);
      reelSymbols.splice(randomIndex, 1);
    }
  }
};

const transpos = () => {
  const rows = [];

  for (let i = 0; i < ROWS; i++) {
    rows.push([]);
    for (let j = 0; j < Cols; j++) {
      rows[i].push(reels[j][i]);
    }
  }
};

const printRows = (rows) => {
  for (const row of rows) {
    let rowString = "";
    for (const [i, symbol] of row.entries()) {
      rowString += symbol;
      if (i < row.length - 1) {
        rowString += " | ";
      }
    }
  }
};

gets;

let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);
const reels = spin();
const rows = transpos(reels);
