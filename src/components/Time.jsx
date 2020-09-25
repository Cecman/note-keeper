import React, { useState } from 'react';


function Time() {

    const now = new Date().toLocaleTimeString();

    const [time, setTime] = useState(now);

    const updateTime = () => {
        setTime(new Date().toLocaleTimeString());
    }

    setInterval(updateTime, 1000);

    return (
        <p className="time">{time}</p>
    );
}

export default Time;