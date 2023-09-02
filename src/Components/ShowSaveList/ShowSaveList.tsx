import React, { useRef } from 'react';
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
    const captureRef = useRef<HTMLDivElement>(null);
    const saveBtnRef = useRef<HTMLButtonElement>(null);
    const isMobile = navigator.userAgent.indexOf('Mobile') > -1;

    const dispatch = useAppDispatch();

    const saveLottoValue = useAppSelector(state => state.saveLotto.value);

    const removeLottoList = (i: number) => {
        dispatch(removeLotto(i));
    };

    const downloadLotto = async () => {
        if (!captureRef.current) return;

        const spans = document.querySelectorAll<HTMLSpanElement>(
            'div.captureSection div.captureBox ul.lotto-ball-list li.ball-value > span'
        );
        captureRef.current.style.display = 'block';

        for (let i = 0; i < spans.length; i++) {
            spans[i].style.height = '100%';
            spans[i].style.marginBottom = '10px';
        }

        if (isMobile) {
            document.querySelector<HTMLDivElement>(
                '.captureSection > .captureBox'
            ).style.display = 'flex';
        }

        try {
            const div = captureRef.current;

            const canvas = await html2canvas(div);

            if (isMobile) {
                document.querySelector<HTMLDivElement>(
                    '.captureSection > .captureBox'
                ).style.display = 'none';

                saveBtnRef.current.style.display = 'none';

                const imgSrc = canvas.toDataURL('image/png');
                const img = document.createElement('img');
                img.src = imgSrc;
                img.style.width = '100%';
                img.style.height = '100%';

                div.appendChild(img);
            } else {
                canvas.toBlob(blob => {
                    if (blob !== null) {
                        saveAs(blob, 'lotto.png');
                    }
                });
                captureRef.current.style.display = 'none';
            }
        } catch (error) {
            console.error('Error converting div to image:', error);
        }
    };

    const controlDisplayListBox = () => {
        openListControl();

        if (isMobile) {
            saveBtnRef.current.style.display = 'inline-block';

            const img = document.querySelector<HTMLCanvasElement>(
                '.captureSection > img'
            );

            captureRef.current.removeChild(img);
        }
    };

    return (
        <div className={`showSaveList ${on ? 'open' : 'close'}`}>
            <div className='showSaveBox'>
                {saveLottoValue.length === 0 ? (
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
                                onClick={controlDisplayListBox}
                                className='openControlBtn'
                            >
                                닫기
                            </button>
                            <button
                                ref={saveBtnRef}
                                onClick={downloadLotto}
                                className='saveImageBtn'
                            >
                                {isMobile ? '이미지로 보기' : '이미지로 저장'}
                            </button>
                        </div>
                        <div ref={captureRef} className='captureSection'>
                            <CaptureList saveList={saveLottoValue} />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default ShowSaveList;
