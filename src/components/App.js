import React from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import AirBnbDatePicker from '../pages/airbnbDatePicker';
import ReactDatePicker from '../pages/reactDatePicker';
import ReactDayPicker from '../pages/reactDayPicker';

function App() {
  return (
    <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Switch>
          <Route exact path="/airbnb" component={AirBnbDatePicker} />
          <Route exact path="/react-dates" component={ReactDatePicker} />
          <Route exact path="/react-day-picker" component={ReactDayPicker} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
