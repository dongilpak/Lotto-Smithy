import { useAppDispatch } from '../hooks/reduxHooks';
import { saveLotto } from '../reducers/saveLottoReducer';

export const SaveLottoList = (value: number[]) => {
    const dispatch = useAppDispatch();

    dispatch(saveLotto(value));
};
