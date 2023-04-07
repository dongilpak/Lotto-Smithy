import React, { useState, useEffect, useCallback } from 'react';
import './LottoResult.css';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { asyncGetResult } from '../../reducers/resultReducer';
import { useAppSelector, useAppDispatch } from '../../hooks';

const LottoResult = () => {
    const dispatch = useAppDispatch();
    const [updateNum, setUpdateNum] = useState(0);

    const lottoValue = useAppSelector(state => state.result.value);

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
                    <li className='num--ball num--ball-one'>
                        {lottoValue.drwtNo1}
                    </li>
                    <li className='num--ball num--ball-two'>
                        {lottoValue.drwtNo2}
                    </li>
                    <li className='num--ball num--ball-three'>
                        {lottoValue.drwtNo3}
                    </li>
                    <li className='num--ball num--ball-four'>
                        {lottoValue.drwtNo4}
                    </li>
                    <li className='num--ball num--ball-five'>
                        {lottoValue.drwtNo5}
                    </li>
                    <li className='num--ball num--ball-six'>
                        {lottoValue.drwtNo6}
                    </li>
                    <li className='num--plus'>
                        <AddRoundedIcon fontSize='large' />
                    </li>
                    <li className='num--ball num--ball-bonus'>
                        {lottoValue.bnusNo}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default LottoResult;
