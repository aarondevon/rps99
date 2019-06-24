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

let playerOneScore = 0;
let playerTwoScore = 0;

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
const isValidValue = (moveValue) => {
	if (validValues.includes(moveValue)) {
		return true;
	}
	return false;
};

// check for valid value total
const isValidTotal = (moveOneValue, moveTwoValue, moveThreeValue) => {
	let total = moveOneValue + moveTwoValue + moveThreeValue;
	return total >= 1 && total <= 99;
}

// Set player moves
const setPlayerMoves = (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) => {
	if (!isValidMove(moveOneType) ||!isValidMove(moveTwoType) || !isValidMove(moveThreeType)) {
		return;
	}

	if (!isValidValue(moveOneValue) || !isValidValue(moveTwoValue) || !isValidValue(moveThreeValue)) {
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
		playerOneScore += 1;
		return "Player One";
	} else if (playerOneMoveType === "paper" && playerTwoMoveType === "rock") {
		playerOneScore += 1;
		return "Player One";
	} else if (playerOneMoveType === "scissors" && playerTwoMoveType === "paper") {
		playerOneScore += 1;
		return "Player One";
	} else if (playerOneMoveType === playerTwoMoveType && playerOneMoveValue > playerTwoMoveValue) {
		playerOneScore += 1;
		return "Player One";
	} else if (playerOneMoveType === playerTwoMoveType && playerOneMoveValue === playerTwoMoveValue) {
		return "Tie";
	} else {
		playerTwoScore += 1;
		return "Player Two";
	}
}

const getRoundWinner = (round) => {
	if (!isValidRound(round)) {
		return null;
	}

	if (round === 1) {
		if (!isValidMove(playerOneMoveOneType) || !isValidMove(playerTwoMoveOneType) || !isValidValue(playerOneMoveOneValue) || !isValidValue(playerTwoMoveOneValue)) {
			return null;
		}
		return roundWinner(playerOneMoveOneType, playerTwoMoveOneType, playerOneMoveOneValue, playerTwoMoveOneValue);
	}

	if (round === 2) {
		if (!isValidMove(playerOneMoveTwoType) || !isValidMove(playerTwoMoveTwoType)  || !isValidValue(playerOneMoveTwoValue) || !isValidValue(playerTwoMoveTwoValue)) {
			return null;
		}
		return roundWinner(playerOneMoveTwoType, playerTwoMoveTwoType, playerOneMoveTwoValue, playerTwoMoveTwoValue);
	}

	if (round === 3) {
		if (!isValidMove(playerOneMoveThreeType) || !isValidMove(playerTwoMoveThreeType)  || !isValidValue(playerOneMoveThreeValue) || !isValidValue(playerTwoMoveThreeValue)) {
			return null;
		}
		return roundWinner(playerOneMoveThreeType, playerTwoMoveThreeType, playerOneMoveThreeValue, playerTwoMoveThreeValue);
	}
}

const resetPlayerScore = () => {
	playerOneScore = 0;
	playerTwoScore = 0;
}

const getGameWinner = () => {
	debugger;
	console.log(playerOneScore, playerTwoScore);
	if (playerOneScore > playerTwoScore) {
		resetPlayerScore();
		return "Player One";
	} else if (playerOneScore < playerTwoScore) {
		resetPlayerScore();
		return "Player Two";
	} else {
		resetPlayerScore();
		return "Tie";
	}
}