// All code should be written in this file.
let playerOneMoveOneType;
let playerOneMoveTwoType;
let playerOneMoveThreeType;

let playerTwoMoveOneType;
let playerTwoMoveTwoType;
let playerTwoMoveThreeType;

let playerOneMoveOneValue;
let playerOneMoveTwoValue;
let playerOneMoveThreeValue;

let playerTwoMoveOneValue;
let playerTwoMoveTwoValue;
let playerTwoMoveThreeValue;

const validMoves = ["rock", "paper", "scissors"];

// generate array of valid values
const fillRange = (start, end) => {
  return Array(end - start + 1).fill().map((item, index) => start + index);
};

const validValues = fillRange(1, 99);

// Check for valid move type
const isValidMove = (moveOneType, moveTwoType, moveThreeType) => {
	if (!(validMoves.includes(moveOneType)) || !(validMoves.includes(moveTwoType)) || !(validMoves.includes(moveThreeType))) {
		return false;
	}

	return true;
};

// Check for valid move values
const isValidValue = (moveOneValue, moveTwoValue, moveThreeValue) => {
	if (!(validValues.includes(moveOneValue)) || !(validValues.includes(moveTwoValue)) || !(validValues.includes(moveThreeValue))) {
		return false;
	}
	return true;
};

// check for valid value total
const isValidTotal = (moveOneValue, moveTwoValue, moveThreeValue) => {
	let total = moveOneValue + moveTwoValue + moveThreeValue;
	return total >= 1 && total <= 99;
}

// Set player moves
const setPlayerMoves = (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) => {
	if (!isValidMove(moveOneType, moveTwoType, moveThreeType)) {
		return;
	}

	if (!isValidValue(moveOneValue, moveTwoValue, moveThreeValue)) {
		return;
	}

	if (!isValidTotal(moveOneValue, moveTwoValue, moveThreeValue)) {
		return;
	}

	if (player === "Player One") {
		playerOneMoveOneType = moveOneType;
		playerOneMoveTwoType = moveTwoType;
		playerOneMoveThreeType = moveThreeType;

		playerOneMoveOneValue = moveOneValue;
		playerOneMoveTwoValue = moveTwoValue;
		playerOneMoveThreeValue = moveThreeValue;
	} else if (player === "Player Two") {
		playerTwoMoveOneType = moveOneType;
		playerTwoMoveTwoType = moveTwoType;
		playerTwoMoveThreeType = moveThreeType;

		playerTwoMoveOneValue = moveOneValue;
		playerTwoMoveTwoValue = moveTwoValue;
		playerTwoMoveThreeValue = moveThreeValue;
	}
};