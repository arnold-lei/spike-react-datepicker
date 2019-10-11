import React, { Fragment, useState, Component} from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import moment from 'moment';

import AirBnbDayRangeControllerWrapper from '../components/AirBnbDayPickerRangeControllerWrapper';

class AirBnbDatePicker extends Component {
  state = {
    startDate: moment().startOf('week'),
    endDate: moment().endOf('week'),
    focusedInput: moment().startOf('week'),
  }
  render(){

    return(
      <Fragment>
        <h1>
          AirBnb React Dates
        </h1>

        <AirBnbDayRangeControllerWrapper

          // startDate={this.state.startDate} // momentPropTypes.momentObj or null,
          // endDate={this.state.endDate} // momentPropTypes.momentObj or null,
          // onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
          // focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          // onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
          // initialVisibleMonth={() => moment().add(2, "M")} // PropTypes.func or null,

          numberOfMonths={1}
          calendarInfoPosition="after"
          startDateOffset={day => day.startOf('week')}
          endDateOffset={day => day.endOf('week')}
          autoFocusEndDate={true}
          initialStartDate={this.state.startDate}
          orientation='horizontal'
          renderCalendarInfo={() => (<div>Test Toggle</div>)}
          initialEndDate={this.state.endDate}
        >
          {/* this is not supported */}
          "Children"
        </AirBnbDayRangeControllerWrapper>
        {/* { !!this.state.startDate && (<div>{this.state.startDate.format('MMMM Do YYYY')}</div>) } */}
      </Fragment>

    )
  }
}

export default AirBnbDatePicker;

