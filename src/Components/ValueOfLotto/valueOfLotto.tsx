import React from 'react';
import { checkNumPart } from '../../utils/CheckNumPart';
import './ValueOfLotto.css';

const ValueOfLotto = (
    btnFunc,
    value: number[],
    i: number,
    remove?: boolean
) => {
    return (
        <ul className='lotto-ball-list' key={i}>
            <li className={`ball-value ${checkNumPart(value[0])}`}>
                {value[0]}
            </li>
            <li className={`ball-value ${checkNumPart(value[1])}`}>
                {value[1]}
            </li>
            <li className={`ball-value ${checkNumPart(value[2])}`}>
                {value[2]}
            </li>
            <li className={`ball-value ${checkNumPart(value[3])}`}>
                {value[3]}
            </li>
            <li className={`ball-value ${checkNumPart(value[4])}`}>
                {value[4]}
            </li>
            <li className={`ball-value ${checkNumPart(value[5])}`}>
                {value[5]}
            </li>
            {remove ? (
                <button onClick={() => btnFunc(i)} className='controlBtn'>
                    삭제
                </button>
            ) : (
                <button onClick={() => btnFunc(value)} className='controlBtn'>
                    저장
                </button>
            )}
        </ul>
    );
};

export default ValueOfLotto;
