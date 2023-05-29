import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import './CreateLotto.css';
import { controlLogic } from '../../Logic/controlLogic';

const CreateLotto = () => {
    const [logics, setLogics] = useState<string[]>([]);
    const [gameCount, setGameCount] = useState<string>();

    const dispatch = useAppDispatch();
    const lottoInventory = useAppSelector(state => state.lotto.inventory);

    const lottoValue = useAppSelector(state => state.lotto.value.flat());

    const createLotto = () => {
        dispatch(controlLogic(lottoInventory, logics, gameCount));
    };

    const getGameCount = (
        event: React.MouseEvent<HTMLInputElement, MouseEvent>
    ) => {
        const value: string = event.currentTarget.value;

        if (gameCount === value) {
            setGameCount(value);
            return;
        }

        setGameCount(value);
    };

    const getLogics = (
        event: React.MouseEvent<HTMLInputElement, MouseEvent>
    ) => {
        const value: string = event.currentTarget.value;

        if (logics.find(logic => logic === value)) {
            const removeRepeat = logics.filter(logic => logic !== value);

            setLogics(removeRepeat);

            return;
        }

        setLogics(logics => [...logics, value]);
    };

    useEffect(() => {
        console.log(lottoValue);
    }, [lottoValue]);

    return (
        <div className='create--container'>
            <div className='create--box'>
                <h2 className='create--title'>로또 번호 생성</h2>
                <div className='create--explanation'>
                    <h3 className='explanation--title'>설명</h3>
                    <div className='explanation--item'>
                        <span>1. 번호 추출방법 선택 - 갯수제한 없음</span>
                        <span>2. 게임 수 선택 - 1개만 선택 가능</span>
                    </div>
                </div>
                <div className='create--selectState'>
                    <div className='selectState--common'>
                        <h3 className='common--title'>보통</h3>
                        <ul className='common--selectNum'>
                            <li className='commonNum commonNum-one'>
                                <input
                                    type='checkbox'
                                    name='lotto-logic'
                                    id='commonOne'
                                    value='commonOne'
                                    onClick={e => getLogics(e)}
                                />
                                <label htmlFor='commonOne'>1</label>
                            </li>
                            <li className='commonNum commonNum-two'>
                                <input
                                    type='checkbox'
                                    name='lotto-logic'
                                    id='commonTwo'
                                    value='commonTwo'
                                    onClick={e => getLogics(e)}
                                />
                                <label htmlFor='commonTwo'>2</label>
                            </li>
                            <li className='commonNum commonNum-three'>
                                <input
                                    type='checkbox'
                                    name='lotto-logic'
                                    id='commonThree'
                                    value='commonThree'
                                    onClick={e => getLogics(e)}
                                />
                                <label htmlFor='commonThree'>3</label>
                            </li>
                        </ul>
                    </div>
                    <div className='selectState--special'>
                        <h3 className='special--title'>특수</h3>
                        <ul className='special--selectNum'>
                            <li className='specialNum specialNum-one'>
                                <input
                                    type='checkbox'
                                    name='lotto-logic'
                                    id='specialOne'
                                    value='specialOne'
                                    onClick={e => getLogics(e)}
                                />
                                <label htmlFor='specialOne'>1</label>
                            </li>
                            <li className='specialNum specialNum-two'>
                                <input
                                    type='checkbox'
                                    name='lotto-logic'
                                    id='specialTwo'
                                    value='specialTwo'
                                    onClick={e => getLogics(e)}
                                />
                                <label htmlFor='specialTwo'>2</label>
                            </li>
                            <li className='specialNum specialNum-three'>
                                <input
                                    type='checkbox'
                                    name='lotto-logic'
                                    id='specialThree'
                                    value='specialThree'
                                    onClick={e => getLogics(e)}
                                />
                                <label htmlFor='specialThree'>3</label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='create--numOfGame'>
                    <h3 className='numOfGame--title'>게임 수 선택</h3>
                    <ul className='numOfGame--select'>
                        <li className='numOfGame numOfGame-five'>
                            <input
                                type='radio'
                                name='lotto-count'
                                id='countFive'
                                value='countFive'
                                onClick={e => getGameCount(e)}
                            />
                            <label htmlFor='countFive'>5</label>
                        </li>
                        <li className='numOfGame numOfGame-ten'>
                            <input
                                type='radio'
                                name='lotto-count'
                                id='countTen'
                                value='countTen'
                                onClick={e => getGameCount(e)}
                            />
                            <label htmlFor='countTen'>10</label>
                        </li>
                    </ul>
                    <button
                        className='create--btn'
                        type='button'
                        onClick={createLotto}
                    >
                        로또 번호 생성
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateLotto;
