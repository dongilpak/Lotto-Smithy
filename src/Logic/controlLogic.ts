import { getLogic, getSuggestion } from '../reducers/lottoReducer';
import { comOne } from './comOne';
import { comTwo } from './comTwo';
import { comThree } from './comThree';
import { speOne } from './speOne';
import { speTwo } from './speTwo';
import { speThree } from './speThree';

export const controlLogic =
    (inventory: number[][], logics: string[], count: string) => dispatch => {
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
                switch (logics[i]) {
                    case 'commonOne':
                        lotto.push(comOne(inventory));
                        break;
                    case 'commonTwo':
                        lotto.push(comTwo(inventory));
                        break;
                    case 'commonThree':
                        lotto.push(comThree(inventory));
                        break;
                    case 'specialOne':
                        lotto.push(speOne(inventory));
                        break;
                    case 'specialTwo':
                        lotto.push(speTwo(inventory));
                        break;
                    case 'specialThree':
                        lotto.push(speThree(inventory));
                        break;
                    default:
                        break;
                }
            }
        }

        if (gameCount % logics.length === 0) {
            while (lotto.length < gameCount) {
                for (let i = 0; i < logics.length; i++) {
                    switch (logics[i]) {
                        case 'commonOne':
                            lotto.push(comOne(inventory));
                            break;
                        case 'commonTwo':
                            lotto.push(comTwo(inventory));
                            break;
                        case 'commonThree':
                            lotto.push(comThree(inventory));
                            break;
                        case 'specialOne':
                            lotto.push(speOne(inventory));
                            break;
                        case 'specialTwo':
                            lotto.push(speTwo(inventory));
                            break;
                        case 'specialThree':
                            lotto.push(speThree(inventory));
                            break;
                        default:
                            break;
                    }
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

                    switch (logics[getLogicNum]) {
                        case 'commonOne':
                            lotto.push(comOne(inventory));
                            break;
                        case 'commonTwo':
                            lotto.push(comTwo(inventory));
                            break;
                        case 'commonThree':
                            lotto.push(comThree(inventory));
                            break;
                        case 'specialOne':
                            lotto.push(speOne(inventory));
                            break;
                        case 'specialTwo':
                            lotto.push(speTwo(inventory));
                            break;
                        case 'specialThree':
                            lotto.push(speThree(inventory));
                            break;
                        default:
                            break;
                    }
                } else {
                    for (let i = 0; i < logics.length; i++) {
                        switch (logics[i]) {
                            case 'commonOne':
                                lotto.push(comOne(inventory));
                                break;
                            case 'commonTwo':
                                lotto.push(comTwo(inventory));
                                break;
                            case 'commonThree':
                                lotto.push(comThree(inventory));
                                break;
                            case 'specialOne':
                                lotto.push(speOne(inventory));
                                break;
                            case 'specialTwo':
                                lotto.push(speTwo(inventory));
                                break;
                            case 'specialThree':
                                lotto.push(speThree(inventory));
                                break;
                            default:
                                break;
                        }
                    }
                }
            }
        }

        dispatch(getLogic(lotto));
    };

export const controlSuggestion = (inventory: number[][]) => dispatch => {
    const lotto: number[][] = [];
    const logics = [
        'commonOne',
        'commonTwo',
        'commonThree',
        'specialOne',
        'specialTwo',
    ];

    for (let i = 0; i < logics.length; i++) {
        switch (logics[i]) {
            case 'commonOne':
                lotto.push(comOne(inventory));
                break;
            case 'commonTwo':
                lotto.push(comTwo(inventory));
                break;
            case 'commonThree':
                lotto.push(comThree(inventory));
                break;
            case 'specialOne':
                lotto.push(speOne(inventory));
                break;
            case 'specialTwo':
                lotto.push(speTwo(inventory));
                break;
            default:
                break;
        }
    }

    dispatch(getSuggestion(lotto));
};
