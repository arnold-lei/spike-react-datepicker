import React, { Fragment, useState } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const ReactDatePicker = () => {
  const [startDate, setStartDate] = useState(new Date(moment().startOf('week').format('L')));
  const [endDate, setEndDate] = useState(new Date(moment().endOf('week').format('L')));

  const setDate = (date) => {
    const selectedDate = moment(date);
    setStartDate(new Date(selectedDate.startOf('week').format('L')));
    setEndDate(new Date(selectedDate.endOf('week').format('L')))

  }
  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={date => setDate(date)}
        selectsStart
        shouldCloseOnSelect={false}
        startDate={startDate}
        endDate={endDate}
      />
    </>
  );

}

export default ReactDatePicker;
