import React, { useState } from 'react';
import { useAppDispatch } from '../../hooks/reduxHooks';
import './CreateLotto.css';
import { controlLogic } from '../../Logic/controlLogic';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const CreateLotto = () => {
    const [logics, setLogics] = useState<string[]>([]);
    const [gameCount, setGameCount] = useState<string>();
    const [isOn, setIsOn] = useState<boolean>(false);

    const dispatch = useAppDispatch();

    const createLotto = () => {
        if (logics.length === 0 || gameCount === undefined) {
            alert('추출 방법 또는 게임 수를 선택해 주세요');
            return;
        }
        dispatch(controlLogic(logics, gameCount));
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

    const toggleHandler = () => {
        setIsOn(!isOn);
    };

    return (
        <div className='create--container'>
            <div className='create--box'>
                <h2 className='create--title'>로또 번호 생성</h2>
                <div className='create--explanation'>
                    <div className='explanation--item'>
                        <span>1. 번호 추출방법 선택(갯수제한 없음)</span>
                        <span>2. 게임 수 선택</span>
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
                <div className='create--explanation__logic'>
                    <div className='explanation--top'>
                        <h3 className='explanation--title'>추출 번호별 설명</h3>
                        <button
                            onClick={toggleHandler}
                            className='explanation--arrow'
                        >
                            <ArrowDropDownIcon
                                fontSize='large'
                                viewBox='5 5 12 12'
                            />
                        </button>
                    </div>

                    <div
                        className={`explanation--logic ${isOn ? 'on' : 'off'}`}
                    >
                        <span>보통 1 - 1개의 구간에서 번호 2개 선택</span>
                        <span>보통 2 - 2개의 구간에서 각각 번호 2개 선택</span>
                        <span>보통 3 - 1개의 구간에서 번호 3개 선택</span>
                        <span>특수 1 - 1개의 구간에서 번호 4개 선택</span>
                        <span>특수 2 - 3개의 구간에서 각각 번호 2개 선택</span>
                        <span>특수 3 - 2개의 구간에서 각각 번호 3개 선택</span>
                        <span>남은 숫자는 선택된 구간 제외 후 랜덤 추출</span>
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
