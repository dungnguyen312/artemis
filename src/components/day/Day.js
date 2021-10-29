import React from "react";
import "./Day.scss";

class Day extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render() {
    const DAYS_OF_THE_WEEK = {
      1: "MON",
      2: "TUE",
      3: "WED",
      4: "THU",
      5: "FRI",
      6: "SAT",
      0: "SUN",
    };
    let dateClassName = "calendar__day";
    if (this.props.date === new Date().getDate()) {
      dateClassName += " calendar__today";
    }
    return (
      <div className="calendar__body">
        <div className="calendar__day">
          {DAYS_OF_THE_WEEK[this.props.daysOfWeek]}
        </div>
        <div key={this.props.date} className="calendar__content">
          <span className={dateClassName}>{this.props.date}</span>
          {this.props.child}
        </div>
      </div>
    );
  }
}
export default Day;
