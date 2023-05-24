import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const asyncGetResult = createAsyncThunk(
    'resultSlice/asyncGetResult',
    async (updateNum: number) => {
        const resp = await fetch(
            `https://port-0-proxyserver-4jpolf2alg3hd2s1.sel3.cloudtype.app/result/${updateNum}`
        );
        const data = await resp.json();
        return data;
    }
);

interface resultObject {
    value: {
        bnusNo: number;
        drwNo: number;
        drwNoDate: string;
        drwtNo1: number;
        drwtNo2: number;
        drwtNo3: number;
        drwtNo4: number;
        drwtNo5: number;
        drwtNo6: number;
        firstAccumamnt: number;
        firstPrzwnerCo: number;
        firstWinamnt: number;
        returnValue: string;
        totSellamnt: number;
    };
}

const initialState: resultObject = {
    value: {
        bnusNo: 0,
        drwNo: 0,
        drwNoDate: '',
        drwtNo1: 0,
        drwtNo2: 0,
        drwtNo3: 0,
        drwtNo4: 0,
        drwtNo5: 0,
        drwtNo6: 0,
        firstAccumamnt: 0,
        firstPrzwnerCo: 0,
        firstWinamnt: 0,
        returnValue: '',
        totSellamnt: 0,
    },
};

const resultSlice = createSlice({
    name: 'result',
    initialState,
    reducers: {
        get: () => {},
    },
    extraReducers: builder => {
        builder.addCase(asyncGetResult.fulfilled, (state, action) => {
            state.value = action.payload;
        });
    },
});

export const { get } = resultSlice.actions;

export default resultSlice.reducer;
