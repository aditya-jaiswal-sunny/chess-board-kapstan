import { createSlice } from '@reduxjs/toolkit';
import { BOARD_DATA } from '../utils/boardData';
import calculateMoves from '../utils/calculateMoves';

const boardDataInitialState = {
	board: BOARD_DATA,
	currentMove: 'white',
	selectedCell: { x: 0, y: 1 },
	possibleMoves: [],
};

export const boardDataSlice = createSlice({
	name: 'boardData',
	initialState: boardDataInitialState,
	reducers: {
		changeSelectedPiece: (state, action) => {
			state['selectedCell'] = {
				x: action.payload.x,
				y: action.payload.y,
			};
			state['possibleMoves'] = calculateMoves(action.payload, state.board);
		},
		movePiece(state, action) {
			const piece = state.board[state.selectedCell.y][state.selectedCell.x].piece;
			state["board"][action.payload.y][action.payload.x].piece = piece;
			state["board"][state.selectedCell.y][state.selectedCell.x].piece = {};
			state["possibleMoves"] = [];
			state["selectedCell"] = {};
			state["currentMove"] =
			state["currentMove"] === 'white' ? 'black' : 'white';
		},
	},
});

export const { changeSelectedPiece, movePiece } = boardDataSlice.actions;

export default boardDataSlice.reducer;
