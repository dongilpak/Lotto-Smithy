import React, { useEffect, useState } from 'react';
import './CreateLotto.css';

const CreateLotto = () => {
    return (
        <div className='create--container'>
            <div className='create--box'>
                <h2 className='create--title'>로또 번호 생성</h2>
                <div className='create--selectState'>
                    <div className='selectState--common'>
                        <h3 className='common--title'>보통</h3>
                        <ul className='common--selectNum'>
                            <li className='commonNum commonNum-one'>
                                <input
                                    type='checkbox'
                                    name='lotto-logic'
                                    id='commonOne'
                                />
                                <label htmlFor='commonOne'>1</label>
                            </li>
                            <li className='commonNum commonNum-two'>
                                <input
                                    type='checkbox'
                                    name='lotto-logic'
                                    id='commonTwo'
                                />
                                <label htmlFor='commonTwo'>2</label>
                            </li>
                            <li className='commonNum commonNum-three'>
                                <input
                                    type='checkbox'
                                    name='lotto-logic'
                                    id='commonThree'
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
                                />
                                <label htmlFor='specialOne'>1</label>
                            </li>
                            <li className='specialNum specialNum-two'>
                                <input
                                    type='checkbox'
                                    name='lotto-logic'
                                    id='specialTwo'
                                />
                                <label htmlFor='specialTwo'>2</label>
                            </li>
                            <li className='specialNum specialNum-three'>
                                <input
                                    type='checkbox'
                                    name='lotto-logic'
                                    id='specialThree'
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
                            />
                            <label htmlFor='countFive'>5</label>
                        </li>
                        <li className='numOfGame numOfGame-ten'>
                            <input
                                type='radio'
                                name='lotto-count'
                                id='countTen'
                            />
                            <label htmlFor='countTen'>10</label>
                        </li>
                    </ul>
                    <button className='create--btn' type='button'>
                        로또 번호 생성
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateLotto;
