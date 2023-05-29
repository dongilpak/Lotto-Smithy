import React from 'react';

const valueOfLotto = (
    title: string,
    value: number[],
    lottoInventory: number[][],
    i: number
) => {
    const checkNumPart = (num: number) => {
        for (let i = 0; i < lottoInventory.length; i++) {
            const part = lottoInventory[i].find(item => item === num)
                ? `${i}`
                : null;

            switch (part) {
                case '0':
                    return 'part-one';
                case '1':
                    return 'part-two';
                case '2':
                    return 'part-three';
                case '3':
                    return 'part-four';
                case '4':
                    return 'part-five';

                default:
                    break;
            }
        }
    };

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
