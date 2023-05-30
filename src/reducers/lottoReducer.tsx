import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface lottoObject {
    value: number[][][];

    suggestions: number[][][];
}

const initialState: lottoObject = {
    value: [],
    suggestions: [],
};

const lottoSlice = createSlice({
    name: 'lotto',
    initialState,
    reducers: {
        getLogic: (state, action: PayloadAction<number[][]>) => {
            if (state.value.flat().length >= 30) {
                const startCount =
                    state.value.flat().length + action.payload.length - 30;
                const originalLotto = state.value
                    .flat()
                    .slice(startCount, state.value.flat().length);
                state.value.splice(0);
                for (let i = 0; i < action.payload.length; i++) {
                    originalLotto.push(action.payload[i]);
                }

                state.value.push(originalLotto);
            } else {
                state.value.push(action.payload);
            }
        },
        getSuggestion: (state, action) => {
            if (state.suggestions) {
                state.suggestions.splice(0);
                state.suggestions.push(action.payload);
                return;
            }
            state.suggestions.push(action.payload);
        },
    },
});

export const { getLogic, getSuggestion } = lottoSlice.actions;

export default lottoSlice.reducer;
