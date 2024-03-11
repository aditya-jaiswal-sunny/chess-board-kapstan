import { configureStore } from '@reduxjs/toolkit';
import boardData from './boardDataRedux';

export const store = configureStore({
	reducer: {
		boardData,
	},
});
