import React, { useEffect } from 'react';
import './Suggestion.css';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import valueOfLotto from '../ValueOfLotto/valueOfLotto';
import { controlSuggestion } from '../../Logic/controlLogic';
import { saveLotto } from '../../reducers/saveLottoReducer';

const Suggestion = () => {
    const dispatch = useAppDispatch();
    const suggestionValue = useAppSelector(state =>
        state.lotto.suggestions.flat()
    );
    const saveLottoValue = useAppSelector(state => state.saveLotto.value);

    const handleRefresh = () => {
        dispatch(controlSuggestion());
    };

    useEffect(() => {
        dispatch(controlSuggestion());
    }, [dispatch]);

    const checkDuplication = (value: number[]) => {
        const strValue = value.join();
        const strListValue = saveLottoValue.join('|').split('|');

        const checkIncludes = strListValue.includes(strValue);

        return checkIncludes;
    };

    const saveLottoList = (value: number[]) => {
        if (checkDuplication(value)) {
            alert('이미 저장된 번호 목록입니다.');
            return;
        }

        if (saveLottoValue.length > 9) {
            alert(
                '목록 저장은 10개까지 가능합니다.\n더 저장하고 싶다면 저장 목록을 비워주세요.'
            );
            return;
        }

        dispatch(saveLotto(value));
    };

    return (
        <div className='suggestion--container'>
            <div className='suggestion--box'>
                <h2 className='suggestion--title'>추천 번호</h2>

                <ul className='suggestion--lotto'>
                    {suggestionValue.map((value, i) =>
                        valueOfLotto(saveLottoList, value, i)
                    )}
                </ul>

                <button
                    className='refresh--btn'
                    type='button'
                    onClick={handleRefresh}
                >
                    새로고침
                </button>
            </div>
        </div>
    );
};

export default Suggestion;
