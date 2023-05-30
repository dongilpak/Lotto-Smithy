import React from 'react';

const valueOfLotto = (title: string, value: number[], i: number) => {
    const checkNumPart = (num: number) => {
        const numStorage = [
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
            [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
            [41, 42, 43, 44, 45],
        ];

        for (let i = 0; i < numStorage.length; i++) {
            const part = numStorage[i].find(item => item === num)
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
