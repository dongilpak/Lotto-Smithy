import React from 'react';
import './LottoResult.css';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';

const LottoResult = () => {
    return (
        <div className='result--container'>
            <div className='result--box'>
                <h2 className='result--title'>1050회 당첨결과</h2>
                <div className='result--date'>
                    <span>2023-03-11</span>
                </div>
                <ul className='result--num'>
                    <li className='num--ball num--ball-one'>6</li>
                    <li className='num--ball num--ball-two'>12</li>
                    <li className='num--ball num--ball-three'>31</li>
                    <li className='num--ball num--ball-four'>35</li>
                    <li className='num--ball num--ball-five'>38</li>
                    <li className='num--ball num--ball-six'>43</li>
                    <li className='num--plus'>
                        <AddRoundedIcon fontSize='large' />
                    </li>
                    <li className='num--ball num--ball-bonus'>17</li>
                </ul>
            </div>
            <div className='result--control result--control-left'>
                <KeyboardArrowLeftRoundedIcon viewBox='0 0 24 24' />
            </div>
            <div className='result--control result--control-right'>
                <KeyboardArrowRightRoundedIcon />
            </div>
        </div>
    );
};

export default LottoResult;
