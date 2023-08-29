import { configureStore } from '@reduxjs/toolkit';
import resultReducer from './reducers/resultReducer';
import lottoReducer from './reducers/lottoReducer';
import saveLottoReducer from './reducers/saveLottoReducer';

export const store = configureStore({
    reducer: {
        result: resultReducer,
        lotto: lottoReducer,
        saveLotto: saveLottoReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
