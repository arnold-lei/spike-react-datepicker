import React, { Fragment } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class ReactDatePicker extends React.Component {
  state = {
    startDate: new Date()
  };

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  render() {
    return (
      <Fragment>

        <h1>
          React Date Picker
        </h1>

        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
        />

      </Fragment>
    );
  }
}

export default ReactDatePicker;
