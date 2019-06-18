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

// Check for valid move type
const isValidMove = (moveOneType, moveTwoType, moveThreeType) => {
	if (!(validMoves.includes(moveOneType)) || !(validMoves.includes(moveTwoType)) || !(validMoves.includes(moveThreeType))) {
		return false;
	}

	return true;
};

const setPlayerMoves = (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) => {
	if (!isValidMove(moveOneType, moveTwoType, moveThreeType)) {
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