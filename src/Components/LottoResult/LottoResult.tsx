import React, { useEffect, useCallback } from 'react';
import './LottoResult.css';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { asyncGetResult } from '../../reducers/resultReducer';
import { useAppSelector, useAppDispatch } from '../../hooks/reduxHooks';
import { checkNumPart } from '../../utils/CheckNumPart';
import Countdown from './Countdown';

const LottoResult = () => {
    const dispatch = useAppDispatch();

    const lottoValue = useAppSelector(state => state.result.value);

    const getUpdate = useCallback(() => {
        const standardDate = Number(new Date('2002-12-07'));
        const todayDate = Number(new Date());
        const diff = todayDate - standardDate;

        const diffDay = Math.floor(diff / (1000 * 60 * 60 * 24));
        const getUpdateNum =
            new Date().getDay() === 6 && new Date().getHours() < 21
                ? Math.floor(diffDay / 7)
                : Math.floor(diffDay / 7 + 1);
        console.log(getUpdateNum);
        dispatch(asyncGetResult(getUpdateNum));
    }, [dispatch]);

    useEffect(() => {
        if (lottoValue.returnValue === 'fail') {
            getUpdate();
        } else if (lottoValue.returnValue === 'success') {
            return;
        }
    }, [getUpdate, lottoValue.returnValue]);

    const sliceWinAmount = (winAmount: number) => {
        if (lottoValue.returnValue === 'fail') return;
        const numOfDigits = winAmount.toString().slice(0, -8);

        const roundNum = winAmount.toString().slice(-8, -7);

        const amountValue =
            Number(roundNum) > 4
                ? Number(numOfDigits) + 1
                : Number(numOfDigits);

        return amountValue;
    };

    const getCountdown = () => {
        if (lottoValue.returnValue === 'fail') return;
        const today = new Date().getDay();
        const hours = new Date().getHours();

        if ((today === 6 && hours >= 20) || (today === 0 && hours < 6)) {
            return '판매시간 아님';
        }

        const isSaturday = today === 6 ? true : false;

        if (isSaturday) {
            return <Countdown />;
        } else {
            const countday = 6 - today;

            return <span>D-{countday}</span>;
        }
    };

    return (
        <div className='result--container'>
            <div className='result--box'>
                <h2 className='result--title'>
                    {`${lottoValue.drwNo}회 당첨결과`}
                </h2>
                <div className='result--date'>
                    <span>{lottoValue.drwNoDate} 추첨</span>
                </div>
                <div className='result--info'>
                    <div className='next-turn'>
                        <div className='info--title'>
                            <span>{`${lottoValue.drwNo + 1}`}회차</span>
                        </div>
                        <div className='countdown'>{getCountdown()}</div>
                    </div>
                    <div className='firstWinamnt'>
                        <div className='info--title'>
                            <span>1등 총 당첨금</span>
                        </div>
                        <div className='win-amount-detail'>
                            <span>
                                {`${sliceWinAmount(
                                    lottoValue.firstAccumamnt
                                )}억`}
                            </span>
                            <span>
                                {`(${
                                    lottoValue.firstPrzwnerCo
                                }명 / ${sliceWinAmount(
                                    lottoValue.firstWinamnt
                                )}억)`}
                            </span>
                        </div>
                    </div>
                </div>
                <ul className='result--num'>
                    <li
                        className={`num--ball ${checkNumPart(
                            lottoValue.drwtNo1
                        )}`}
                    >
                        {lottoValue.drwtNo1}
                    </li>
                    <li
                        className={`num--ball ${checkNumPart(
                            lottoValue.drwtNo2
                        )}`}
                    >
                        {lottoValue.drwtNo2}
                    </li>
                    <li
                        className={`num--ball ${checkNumPart(
                            lottoValue.drwtNo3
                        )}`}
                    >
                        {lottoValue.drwtNo3}
                    </li>
                    <li
                        className={`num--ball ${checkNumPart(
                            lottoValue.drwtNo4
                        )}`}
                    >
                        {lottoValue.drwtNo4}
                    </li>
                    <li
                        className={`num--ball ${checkNumPart(
                            lottoValue.drwtNo5
                        )}`}
                    >
                        {lottoValue.drwtNo5}
                    </li>
                    <li
                        className={`num--ball ${checkNumPart(
                            lottoValue.drwtNo6
                        )}`}
                    >
                        {lottoValue.drwtNo6}
                    </li>
                    <li className='num--plus'>
                        <AddRoundedIcon fontSize='large' />
                    </li>
                    <li
                        className={`num--ball ${checkNumPart(
                            lottoValue.bnusNo
                        )}`}
                    >
                        {lottoValue.bnusNo}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default LottoResult;
