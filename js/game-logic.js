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

const P1 = "Player One";
const P2 = "Player Two";
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const validMoves = [ROCK, PAPER, SCISSORS];

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
};

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

	if (player === P1) {
		playerOneMoveOneType = moveOneType;
		playerOneMoveTwoType = moveTwoType;
		playerOneMoveThreeType = moveThreeType;

		playerOneMoveOneValue = moveOneValue;
		playerOneMoveTwoValue = moveTwoValue;
		playerOneMoveThreeValue = moveThreeValue;
	} else if (player === P2) {
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
	if (playerOneMoveType === ROCK && playerTwoMoveType === SCISSORS) {
		return P1;
	} else if (playerOneMoveType === PAPER && playerTwoMoveType === ROCK) {
		return P1;
	} else if (playerOneMoveType === SCISSORS && playerTwoMoveType === PAPER) {
		return P1;
	} else if (playerOneMoveType === playerTwoMoveType && playerOneMoveValue > playerTwoMoveValue) {
		return P1;
	} else if (playerOneMoveType === playerTwoMoveType && playerOneMoveValue === playerTwoMoveValue) {
		return "Tie";
	} else {
		return P2;
	}
};

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
};

const resetPlayerScore = () => {
	playerOneScore = 0;
	playerTwoScore = 0;
};

const incrementScores = winner => {
	switch (winner) {
		case P1:
				playerOneScore += 1;
				break;
		case P2:
			playerTwoScore +=1;
	}
};

const getGameWinner = () => {
	let roundOneWinner = getRoundWinner(1);
	let roundTwoWinner = getRoundWinner(2);
	let roundThreeWinner = getRoundWinner(3);

	incrementScores(roundOneWinner);
	incrementScores(roundTwoWinner);
	incrementScores(roundThreeWinner);

	if (playerOneScore > playerTwoScore) {
		resetPlayerScore();
		return P1;
	} else if (playerOneScore < playerTwoScore) {
		resetPlayerScore();
		return P2;
	} else {
		resetPlayerScore();
		return "Tie";
	}
};

const getRandomType = (maxValue) => {
	return validMoves[Math.floor(Math.random() * (validMoves.length - 0))];
};

const getRandomValue = (maxValue) => {
	return Math.floor(Math.random() * (maxValue - 1) + 1);	

};

const setComputerMoves = () => {
	playerTwoMoveOneType = getRandomType();
	playerTwoMoveTwoType = getRandomType();
	playerTwoMoveThreeType = getRandomType();

	let maxValue = validValues.length - 2;

	playerTwoMoveOneValue = getRandomValue(maxValue);

	if (99 - playerTwoMoveOneValue === 2) {
		playerTwoMoveTwoValue = 1;
		
		playerTwoMoveThreeValue = 1
	} else {
		maxValue -= playerTwoMoveOneValue;
		playerTwoMoveTwoValue = getRandomValue(maxValue);
		maxValue -= playerTwoMoveTwoValue;
		
		playerTwoMoveThreeValue = maxValue + 2;
	}
};