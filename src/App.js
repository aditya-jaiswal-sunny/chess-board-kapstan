import { useDispatch, useSelector } from 'react-redux';

import BoardCell from './components/BoardCell.js';
import './App.css';

function App() {
	const boardData = useSelector((state) => state?.boardData?.board);
	return (
		<div className="App">
			{boardData?.map((row, y) => {
				return (
					<div
						style={{
							display: 'flex',
							gap: '4px',
						}}
            key={'boardcell' + y}
					>
						{row?.map((col, x) => {
							return (
								<div
									style={{
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										flexDirection: 'column',
										gap: '4px',
									}}
								>
									<BoardCell
                    x={x}
                    y={y}
										cell={col}
										key={'boardcell' + x + y}
									/>
								</div>
							);
						})}
					</div>
				);
			})}
		</div>
	);
}

export default App;
