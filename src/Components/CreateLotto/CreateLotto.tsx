import React from 'react';
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
                            <li className='commonNum commonNum-one'>1</li>
                            <li className='commonNum commonNum-two'>2</li>
                            <li className='commonNum commonNum-three'>3</li>
                        </ul>
                    </div>
                    <div className='selectState--special'>
                        <h3 className='special--title'>특수</h3>
                        <ul className='special--selectNum'>
                            <li className='specialNum specialNum-one'>1</li>
                            <li className='specialNum specialNum-two'>2</li>
                            <li className='specialNum specialNum-three'>3</li>
                        </ul>
                    </div>
                </div>
                <div className='create--numOfGame'>
                    <h3 className='numOfGame--title'>게임 수 선택</h3>
                    <ul className='numOfGame--selectNum'>
                        <li className='numOfGameNum numOfGameNum-one'>1</li>
                        <li className='numOfGameNum numOfGameNum-two'>2</li>
                        <li className='numOfGameNum numOfGameNum-three'>3</li>
                        <li className='numOfGameNum numOfGameNum-one'>4</li>
                        <li className='numOfGameNum numOfGameNum-two'>5</li>
                        <li className='numOfGameNum numOfGameNum-three'>6</li>
                        <li className='numOfGameNum numOfGameNum-one'>7</li>
                        <li className='numOfGameNum numOfGameNum-two'>8</li>
                        <li className='numOfGameNum numOfGameNum-three'>9</li>
                        <li className='numOfGameNum numOfGameNum-three'>10</li>
                    </ul>
                    <button className='create--btn' type='submit'>
                        로또 번호 생성
                    </button>
                </div>
                <div className='create--question'>
                    <span>?</span>
                </div>
                <div className='create--answer'>
                    
                </div>
            </div>
        </div>
    );
};

export default CreateLotto;
