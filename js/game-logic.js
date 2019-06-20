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
const isValidMove = (move) => {
	if (validMoves.includes(move)) {
		return true;
	}

	return false;
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

const isValidRound = (round) => {
	return round >= 1 && round <= 3;
};

const roundWinner = (playerOneMoveType, playerTwoMoveType, playerOneMoveValue, playerTwoMoveValue) => {
	if (playerOneMoveType === "rock" && playerTwoMoveType === "scissors") {
		return "Player One";
	} else if (playerOneMoveType === "paper" && playerTwoMoveType === "rock") {
		return "Player One";
	} else if (playerOneMoveType === "scissors" && playerTwoMoveType === "paper") {
		return "Player One";
	} else if (playerOneMoveOneType === playerTwoMoveType && playerOneMoveValue > playerTwoMoveValue) {
		return "Player One";
	} else if (playerOneMoveOneType === playerTwoMoveType && playerOneMoveValue === playerTwoMoveValue) {
		return "Tie";
	} else {
		return "Player Two";
	}
}

const getRoundWinner = (round) => {
	if (!isValidRound(round)) {
		return null;
	}

	if (round === 1) {
		return roundWinner(playerOneMoveOneType, playerTwoMoveOneType, playerOneMoveOneValue, playerTwoMoveOneValue);
	}

	if (round === 2) {
		return roundWinner(playerOneMoveTwoType, playerTwoMoveTwoType, playerOneMoveTwoValue, playerTwoMoveTwoValue);
	}

	if (round === 3) {
		return roundWinner(playerOneMoveThreeType, playerTwoMoveThreeType, playerOneMoveThreeValue, playerTwoMoveThreeValue);
	}
}