import React, { Fragment, useState, Component} from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import moment from 'moment';

import {
  SingleDatePicker,
  DayPickerRangeController,
  DayPickerRangeControllerWrapper,
} from 'react-dates';
import AirBnbDayRangeControllerWrapper from '../components/AirBnbDayPickerRangeControllerWrapper'
// const AirBnbDatePicker = () => {

//   const { date, setDate } = useState(moment());
//   const { focused, setFocused } = useState(false);
//   return(

//     <Fragment>
//       <h1>
//         AirBnb Date Picker
//       </h1>

//       <SingleDatePicker
//         date={date} // momentPropTypes.momentObj or null
//         onDateChange={(date) => setDate(date)} // PropTypes.func.isRequired
//         focused={focused} // PropTypes.bool
//         onFocusChange={(focused) => setFocused(focused)} // PropTypes.func.isRequired
//         id="your_unique_id" // PropTypes.string.isRequired,
//       />

//     </Fragment>

//   )

// }

class AirBnbDatePicker extends Component {
  state = {
    startDate: moment(),
    endDate: moment().add(7, 'days'),
    focusedInput: null,
  }
  render(){

    return(
      <Fragment>

        <AirBnbDayRangeControllerWrapper
          // startDate={this.state.startDate} // momentPropTypes.momentObj or null,
          // endDate={this.state.endDate} // momentPropTypes.momentObj or null,
          // onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
          // focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          // onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
          // initialVisibleMonth={() => moment().add(2, "M")} // PropTypes.func or null,
          numberOfMonths={4}
          autoFocusEndDate={true}
          initialStartDate={this.state.startDate}
          orientation='vertical'
          renderCalendarInfo={() => (<div>Test Toggle</div>)}
          // initialEndDate={this.state.endDate}
        />
        {/* { !!this.state.startDate && (<div>{this.state.startDate.format('MMMM Do YYYY')}</div>) } */}
      </Fragment>

    )
  }
}

export default AirBnbDatePicker;

