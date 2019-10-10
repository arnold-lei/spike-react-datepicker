import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class Header extends Component {
  render() {

    return (

      <div className="flex pa1 justify-between nowrap bg-purple">

        <div className="flex flex-fixed white">

          <div className="fw7 mr1">React Date Picker Spike</div>

          <Link to="/airbnb" className="ml1 no-underline white">
            Airbnb
          </Link>

          <div className="ml1">
            |
          </div>

          <Link to="/react-dates" className="ml1 no-underline white">
            React Date Picker
          </Link>

          <div className="ml1">
            |
          </div>

          <Link to="/react-day-picker" className="ml1 no-underline white">
            React Day Picker
          </Link>
        </div>

      </div>

    );

  };

};

export default withRouter(Header);
