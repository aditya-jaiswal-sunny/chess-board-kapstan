import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { movePiece, changeSelectedPiece } from '../redux/boardDataRedux';

import './BoardCell.css';

const BoardCell = (props) => {
	const { cell } = props;
	const dispatch = useDispatch();

	const selectedCell = useSelector((state) => state.boardData.selectedCell);
	const possibleMoves = useSelector((state) => state.boardData.possibleMoves);
	const currentMove = useSelector((state) => state.boardData.currentMove);

	const isPossibleMove = () => {
		return possibleMoves.find(
			(move) => move?.x == cell.x && move?.y == cell.y
		);
	};

	const isSelected = () => {
		return selectedCell.x == cell.x && selectedCell?.y === cell.y;
	};

	const OnClickHandler = () => {
		if (isPossibleMove()) {
			dispatch(movePiece(cell));
		} else {
			if (!cell.piece.type || currentMove !== cell.piece.player) return;
			dispatch(changeSelectedPiece(cell));
		}
	};
	return (
		<div
			className={`${
				(cell.x + cell.y) % 2 === 0 ? 'is-white' : "'is-dark'"
			} ${
				currentMove === cell.piece.player && !isSelected
					? ' is-highlighted'
					: ''
			} ${isSelected() ? 'is-selected' : ''}
            ${isPossibleMove() ? 'is-possible-move' : ''}`}
			onClick={() => OnClickHandler()}
		>
			<span className={`${'is-' + cell.piece.player + '-piece'}`}>
				<i
					className={`$fa-2x fa-solid fa-chess-${cell.piece.type}`}
				></i>
			</span>
		</div>
	);
};

export default BoardCell;
