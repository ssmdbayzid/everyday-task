import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
const Calander = () => {
    const [date, setDate] = useState(new Date())

    console.log(date)
    const footer = <>
        <h1>You Picked {format(date, 'PP')}</h1>
    </>
    return (
        <div className='mx-auto flex justify-center'>
            {date && <DayPicker 
            mode='single'
            selected={date}
            onSelect={setDate}
            footer={footer}
            />
            }
        </div>
    );
};

export default Calander;