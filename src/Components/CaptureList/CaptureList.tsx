import React from 'react';
import './CaptureList.css';
import { checkNumPart } from '../../utils/CheckNumPart';

interface isOpen {
    saveList: number[][];
}

const CaptureList = ({ saveList }: isOpen) => {
    return (
        <div className='captureBox'>
            {saveList.map((value, i) => (
                <ul className='lotto-ball-list' key={i}>
                    <li className={`ball-value ${checkNumPart(value[0])}`}>
                        <span>{value[0]}</span>
                    </li>
                    <li className={`ball-value ${checkNumPart(value[1])}`}>
                        <span>{value[1]}</span>
                    </li>
                    <li className={`ball-value ${checkNumPart(value[2])}`}>
                        <span>{value[2]}</span>
                    </li>
                    <li className={`ball-value ${checkNumPart(value[3])}`}>
                        <span>{value[3]}</span>
                    </li>
                    <li className={`ball-value ${checkNumPart(value[4])}`}>
                        <span>{value[4]}</span>
                    </li>
                    <li className={`ball-value ${checkNumPart(value[5])}`}>
                        <span>{value[5]}</span>
                    </li>
                </ul>
            ))}
        </div>
    );
};

export default CaptureList;
