import React from 'react';
import './ListOfLotto.css';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import valueOfLotto from '../ValueOfLotto/valueOfLotto';
import { saveLotto } from '../../reducers/saveLottoReducer';

const ListOfLotto = () => {
    const dispatch = useAppDispatch();

    const createLottoValue = useAppSelector(state =>
        state.lotto.value.flat().reverse()
    );

    const saveLottoValue = useAppSelector(state => state.saveLotto.value);
    console.log(saveLottoValue);

    const checkDuplication = (value: number[]) => {
        const strValue = value.join();
        const strListValue = saveLottoValue.join('|').split('|');

        const checkIncludes = strListValue.includes(strValue);

        return checkIncludes;
    };

    const saveLottoList = (value: number[]) => {
        const saveLottoLength = saveLottoValue.length;

        if (checkDuplication(value)) {
            alert('이미 저장된 번호 목록입니다.');
            return;
        }

        if (saveLottoLength > 9) {
            alert(
                '목록 저장은 10개까지 가능합니다.\n더 저장하고 싶다면 저장 목록을 비워주세요.'
            );
            return;
        }

        dispatch(saveLotto(value));
    };

    return (
        <div className='list--container'>
            <div className='list--box'>
                <h2 className='list--title'>로또 번호</h2>
                <p className='list--caution'>
                    번호는 최대 30개까지 표시 됩니다.
                </p>
                <div className='list--lotto'>
                    {createLottoValue.map((value, i) =>
                        valueOfLotto(saveLottoList, value, i)
                    )}
                </div>
            </div>
        </div>
    );
};

export default ListOfLotto;
