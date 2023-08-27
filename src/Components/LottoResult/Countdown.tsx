import React, { useState } from 'react';

import useInterval from '../../hooks/useInterval';

const Countdown = () => {
    const [date, setDate] = useState(new Date());

    useInterval(() => {
        setDate(new Date());
    }, 1000);

    const year = new Date().getFullYear();
    const month = new Date().getMonth();
    const day = new Date().getDate();

    const now = date;
    const endDate = new Date(year, month, day, 20, 0, 0);

    const diffTime = endDate.getTime() - now.getTime();

    const diffHour = Math.floor(
        (diffTime % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
    );
    const diffMin = Math.floor((diffTime % (60 * 60 * 1000)) / (60 * 1000));
    const diffSec = Math.floor((diffTime % (60 * 1000)) / 1000);

    return (
        <div>
            {diffHour}:{diffMin < 10 ? `0${diffMin}` : diffMin}:
            {diffSec < 10 ? `0${diffSec}` : diffSec}
        </div>
    );
};

export default Countdown;
