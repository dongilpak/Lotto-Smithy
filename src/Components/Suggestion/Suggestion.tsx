import React, { useEffect } from 'react';
import './Suggestion.css';
import { useAppDispatch, useAppSelector } from '../../hooks';
import valueOfLotto from '../ListOfLotto/valueOfLotto';
import { controlSuggestion } from '../../Logic/controlLogic';

const Suggestion = () => {
    const dispatch = useAppDispatch();
    const lottoInventory = useAppSelector(state => state.lotto.inventory);
    const suggestionValue = useAppSelector(state =>
        state.lotto.suggestions.flat()
    );

    const handleRefresh = () => {
        dispatch(controlSuggestion(lottoInventory));
    };

    useEffect(() => {
        dispatch(controlSuggestion(lottoInventory));
    }, [lottoInventory, dispatch]);

    return (
        <div className='suggestion--container'>
            <div className='suggestion--box'>
                <h2 className='suggestion--title'>추천 번호</h2>

                <ul className='suggestion--lotto'>
                    {suggestionValue.map((value, i) =>
                        valueOfLotto('suggestion', value, lottoInventory, i)
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
