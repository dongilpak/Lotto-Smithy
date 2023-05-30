import { getLogic, getSuggestion } from '../reducers/lottoReducer';
import { Dispatch } from '@reduxjs/toolkit';
import { comOne } from './comOne';
import { comTwo } from './comTwo';
import { comThree } from './comThree';
import { speOne } from './speOne';
import { speTwo } from './speTwo';
import { speThree } from './speThree';

const logicSelect = (logic: string) => {
    const numStorage = [
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
        [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
        [41, 42, 43, 44, 45],
    ];

    switch (logic) {
        case 'commonOne':
            return comOne(numStorage);
        case 'commonTwo':
            return comTwo(numStorage);
        case 'commonThree':
            return comThree(numStorage);
        case 'specialOne':
            return speOne(numStorage);
        case 'specialTwo':
            return speTwo(numStorage);
        case 'specialThree':
            return speThree(numStorage);
        default:
            break;
    }
};

export const controlLogic =
    (logics: string[], count: string) => (dispatch: Dispatch) => {
        const lotto: number[][] = [];
        const gameCount: number = count === 'countFive' ? 5 : 10;
        const checkRandom =
            Math.floor(gameCount / logics.length) * logics.length;

        if (logics.length > gameCount) {
            const getLogicNum = Math.floor((Math.random() * 10) / 1.8);

            const newLogics = logics.filter(
                logic => logic !== logics[getLogicNum]
            );

            for (let i = 0; i < newLogics.length; i++) {
                lotto.push(logicSelect(logics[i]));
            }
        } else if (gameCount % logics.length === 0) {
            while (lotto.length < gameCount) {
                for (let i = 0; i < logics.length; i++) {
                    lotto.push(logicSelect(logics[i]));
                }
            }
        } else {
            while (lotto.length < gameCount) {
                if (lotto.length >= checkRandom) {
                    const divider =
                        logics.length === 2
                            ? 5
                            : logics.length === 3
                            ? 4
                            : logics.length === 4
                            ? 3
                            : logics.length === 6
                            ? 1.8
                            : null;
                    const getLogicNum = Math.floor(
                        (Math.random() * 10) / divider
                    );

                    lotto.push(logicSelect(logics[getLogicNum]));
                } else {
                    for (let i = 0; i < logics.length; i++) {
                        lotto.push(logicSelect(logics[i]));
                    }
                }
            }
        }

        dispatch(getLogic(lotto));
    };

export const controlSuggestion = () => (dispatch: Dispatch) => {
    const lotto: number[][] = [];
    const logics = [
        'commonOne',
        'commonTwo',
        'commonThree',
        'specialOne',
        'specialTwo',
    ];

    for (let i = 0; i < logics.length; i++) {
        lotto.push(logicSelect(logics[i]));
    }

    dispatch(getSuggestion(lotto));
};
