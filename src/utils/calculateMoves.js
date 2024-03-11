const calculateMoves = (currentCell, board) => {
  const moves = []

  switch (currentCell.piece.type) {
    case 'pawn': {
      const cellInFront = findCell(currentCell, board, 'front', 1)
      if (currentCell.piece.player === 'white') {
        if (!cellInFront.piece.player) moves.push({ x: currentCell.x, y: currentCell.y + 1 })
        if (currentCell.y === 1 && !cellInFront.piece.player)
          moves.push({ x: currentCell.x, y: currentCell.y + 2 })
      } else {
        if (!cellInFront.piece.player) moves.push({ x: currentCell.x, y: currentCell.y - 1 })
        if (currentCell.y === 6 && !cellInFront.piece.player)
          moves.push({ x: currentCell.x, y: currentCell.y - 2 })
      }
      break
    }
    default:
      break
  }
  return moves
}

const findCell = (currentCell, board, direction, steps) => {
  switch (direction) {
    case 'front':
      return currentCell.piece.player === 'white'
        ? board[currentCell.y + steps][currentCell.x]
        : board[currentCell.y - steps][currentCell.x]
    default:
      break
  }
}

export default calculateMoves
