import { getLogic, getSuggestion } from '../reducers/lottoReducer';
import { Dispatch } from '@reduxjs/toolkit';
import { comOne } from './comOne';
import { comTwo } from './comTwo';
import { comThree } from './comThree';
import { speOne } from './speOne';
import { speTwo } from './speTwo';
import { speThree } from './speThree';

const logicSelect = (logic: string, inventory: number[][]) => {
    switch (logic) {
        case 'commonOne':
            return comOne(inventory);
        case 'commonTwo':
            return comTwo(inventory);
        case 'commonThree':
            return comThree(inventory);
        case 'specialOne':
            return speOne(inventory);
        case 'specialTwo':
            return speTwo(inventory);
        case 'specialThree':
            return speThree(inventory);
        default:
            break;
    }
};

export const controlLogic =
    (inventory: number[][], logics: string[], count: string) =>
    (dispatch: Dispatch) => {
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
                lotto.push(logicSelect(logics[i], inventory));
            }
        } else if (gameCount % logics.length === 0) {
            while (lotto.length < gameCount) {
                for (let i = 0; i < logics.length; i++) {
                    lotto.push(logicSelect(logics[i], inventory));
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

                    lotto.push(logicSelect(logics[getLogicNum], inventory));
                } else {
                    for (let i = 0; i < logics.length; i++) {
                        lotto.push(logicSelect(logics[i], inventory));
                    }
                }
            }
        }

        dispatch(getLogic(lotto));
    };

export const controlSuggestion =
    (inventory: number[][]) => (dispatch: Dispatch) => {
        const lotto: number[][] = [];
        const logics = [
            'commonOne',
            'commonTwo',
            'commonThree',
            'specialOne',
            'specialTwo',
        ];

        for (let i = 0; i < logics.length; i++) {
            lotto.push(logicSelect(logics[i], inventory));
        }

        dispatch(getSuggestion(lotto));
    };
