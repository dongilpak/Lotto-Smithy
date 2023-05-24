import React, { useState, useEffect, useCallback } from 'react';
import './LottoResult.css';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { asyncGetResult } from '../../reducers/resultReducer';
import { useAppSelector, useAppDispatch } from '../../hooks';

const LottoResult = () => {
    const dispatch = useAppDispatch();
    const [updateNum, setUpdateNum] = useState(0);

    const lottoValue = useAppSelector(state => state.result.value);

    const lottoInventory = useAppSelector(state => state.lotto.inventory);

    const checkNumPart = (num: number) => {
        for (let i = 0; i < lottoInventory.length; i++) {
            const part = lottoInventory[i].find(item => item === num)
                ? `${i}`
                : null;

            switch (part) {
                case '0':
                    return 'part-one';
                case '1':
                    return 'part-two';
                case '2':
                    return 'part-three';
                case '3':
                    return 'part-four';
                case '4':
                    return 'part-five';

                default:
                    break;
            }
        }
    };

    const getUpdate = useCallback(() => {
        const standardDate = Number(new Date('2002-12-07'));
        const todayDate = Number(new Date());
        const diff = todayDate - standardDate;

        const diffDay = Math.floor(diff / (1000 * 60 * 60 * 24));
        const getUpdateNum = Math.floor(diffDay / 7 + 1);
        setUpdateNum(getUpdateNum);
        dispatch(asyncGetResult(updateNum));
    }, [dispatch, updateNum]);

    useEffect(() => {
        if (
            lottoValue.returnValue === 'fail' ||
            lottoValue.returnValue === ''
        ) {
            getUpdate();
        } else if (lottoValue.returnValue === 'success') {
            return;
        }
    }, [getUpdate, lottoValue.returnValue]);

    return (
        <div className='result--container'>
            <div className='result--box'>
                <h2 className='result--title'>
                    {`${lottoValue.drwNo}회 당첨결과`}
                </h2>
                <div className='result--date'>
                    <span>{lottoValue.drwNoDate}</span>
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
