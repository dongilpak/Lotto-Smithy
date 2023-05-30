import React from 'react';
import './ListOfLotto.css';
import { useAppSelector } from '../../hooks';
import valueOfLotto from './valueOfLotto';

const ListOfLotto = () => {
    const lottoInventory = useAppSelector(state => state.lotto.inventory);
    const createLottoValue = useAppSelector(state =>
        state.lotto.value.flat().reverse()
    );

    return (
        <div className='list--container'>
            <div className='list--box'>
                <h2 className='list--title'>로또 번호</h2>
                <p className='list--caution'>
                    번호는 최대 30개까지 저장 됩니다.
                </p>
                <ul className='list--lotto'>
                    {createLottoValue.map((value, i) =>
                        valueOfLotto('list', value, lottoInventory, i)
                    )}
                </ul>
            </div>
        </div>
    );
};

export default ListOfLotto;
