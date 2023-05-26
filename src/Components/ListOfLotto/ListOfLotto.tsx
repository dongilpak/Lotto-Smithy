import React, { useEffect, useState } from 'react';
import './ListOfLotto.css';
import { useAppSelector } from '../../hooks';
import valueOfLotto from './valueOfLotto';

const ListOfLotto = () => {
    const [lottoValue, setLottoValue] = useState<number[][]>([]);
    const lottoInventory = useAppSelector(state => state.lotto.inventory);
    const createLottoValue = useAppSelector(state => state.lotto.value.flat());

    // if (createLottoValue.length > 30) {
    //     const startCount = createLottoValue.length - 30;
    //     setLottoValue(
    //         createLottoValue.slice(startCount, createLottoValue.length)
    //     );
    // } else {
    //     setLottoValue(createLottoValue);
    // }

    // useEffect(() => {
    //     console.log(lottoValue);
    // }, [lottoValue]);

    return (
        <div className='list--container'>
            <div className='list--box'>
                <h2 className='list--title'>로또 번호</h2>
                <p className='list--caution'>
                    번호는 최대 30개까지 저장 됩니다. 그 이상 생성할 경우 먼저
                    생성된 번호 목록은 삭제 됩니다.
                </p>
                <ul className='list--lotto'>
                    {createLottoValue.map((value, i) =>
                        valueOfLotto(value, lottoInventory, i)
                    )}
                </ul>
            </div>
        </div>
    );
};

export default ListOfLotto;
