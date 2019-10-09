import React, {Fragment} from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';

const AirBnbDatePicker = () => {
  return (
    <Fragment>
      <h1>
        AirBnb Date Picker
      </h1>
      <DateRangePicker />
      <SingleDatePicker />
      <DayPickerRangeController />

    </Fragment>
  );
}

export default AirBnbDatePicker;
