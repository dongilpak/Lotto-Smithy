import React, { useRef, useState } from 'react';
import './ShowSaveList.css';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import ValueOfLotto from '../ValueOfLotto/valueOfLotto';
import { removeLotto } from '../../reducers/saveLottoReducer';
import CaptureList from '../CaptureList/CaptureList';
import html2canvas from 'html2canvas';
import saveAs from 'file-saver';

interface isOpen {
    on: boolean;
    openListControl: () => void;
}

const ShowSaveList = ({ on, openListControl }: isOpen) => {
    const [isCapture, setIsCapture] = useState<boolean>(false);

    const captureRef = useRef(null);

    const dispatch = useAppDispatch();

    const saveLottoValue = useAppSelector(state => state.saveLotto.value);

    const removeLottoList = (i: number) => {
        dispatch(removeLotto(i));
    };

    const toggleHandler = () => {
        setIsCapture(!isCapture);
    };

    const downloadLotto = async () => {
        if (!captureRef.current) return;

        const spans = document.querySelectorAll<HTMLSpanElement>(
            'div.captureSection div.captureBox ul.lotto-ball-list li.ball-value > span'
        );

        for (let i = 0; i < spans.length; i++) {
            spans[i].style.height = '100%';
            spans[i].style.marginBottom = '10px';
        }
        try {
            const div = captureRef.current;

            const canvas = await html2canvas(div);
            canvas.toBlob(blob => {
                if (blob !== null) {
                    saveAs(blob, 'lotto.png');
                }
            });
        } catch (error) {
            console.error('Error converting div to image:', error);
        }

        setIsCapture(!isCapture);
    };

    return (
        <div className={`showSaveList ${on ? 'open' : 'close'}`}>
            <div className='showSaveBox'>
                {isCapture ? (
                    <>
                        <div ref={captureRef} className='captureSection'>
                            <CaptureList saveList={saveLottoValue} />
                        </div>
                        <div className='controlBtns'>
                            <button
                                onClick={toggleHandler}
                                className='openControlBtn'
                            >
                                닫기
                            </button>
                            <button
                                onClick={downloadLotto}
                                className='saveControlBtn'
                            >
                                갤러리에 저장
                            </button>
                        </div>
                    </>
                ) : saveLottoValue.length === 0 ? (
                    <>
                        <p className='listNone'>저장된 목록 없음.</p>
                        <div className='controlBtns'>
                            <button
                                onClick={openListControl}
                                className='openControlBtn single'
                            >
                                닫기
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        {saveLottoValue.map((value, i) =>
                            ValueOfLotto(removeLottoList, value, i, true)
                        )}

                        <div className='controlBtns'>
                            <button
                                onClick={openListControl}
                                className='openControlBtn'
                            >
                                닫기
                            </button>
                            <button
                                onClick={toggleHandler}
                                className='saveImageBtn'
                            >
                                이미지로 보기
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default ShowSaveList;
