import React from 'react';
import { checkNumPart } from '../../utils/CheckNumPart';

const valueOfLotto = (title: string, value: number[], i: number) => {
    return (
        <ul className={`${title}--lotto-ball`} key={i}>
            <li className={`${title}--ball ${checkNumPart(value[0])}`}>
                {value[0]}
            </li>
            <li className={`${title}--ball ${checkNumPart(value[1])}`}>
                {value[1]}
            </li>
            <li className={`${title}--ball ${checkNumPart(value[2])}`}>
                {value[2]}
            </li>
            <li className={`${title}--ball ${checkNumPart(value[3])}`}>
                {value[3]}
            </li>
            <li className={`${title}--ball ${checkNumPart(value[4])}`}>
                {value[4]}
            </li>
            <li className={`${title}--ball ${checkNumPart(value[5])}`}>
                {value[5]}
            </li>
        </ul>
    );
};

export default valueOfLotto;
