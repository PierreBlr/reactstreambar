import './datetime.css';

import React, { useState, useEffect } from 'react';

export const Datetime = () => {

    var [date, setDate] = useState(new Date());
    const options = { weekday: 'long', year: '2-digit', month: '2-digit', day: 'numeric' };

    useEffect(() => {
        var timer = setInterval(() => setDate(new Date()), 1000)
        return function cleanup() {
            clearInterval(timer)
        }

    });

    return (
        <div>
            <p className="timezone">{date.toLocaleDateString('fr-FR', options)} {date.toLocaleTimeString()}</p>
        </div>
    )
}

export default Datetime;