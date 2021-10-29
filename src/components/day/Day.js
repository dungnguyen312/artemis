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
    let contentClassName = "calendar__content";
    if (this.props.date === new Date()) {
      contentClassName += " calendar__today";
    }
    return (
      <div className="calendar__body">
        <div className="calendar__day">
          {DAYS_OF_THE_WEEK[this.props.daysOfWeek]}
        </div>
        <div key={this.props.date} className={contentClassName}>
          <span className="calendar__day">{this.props.date}</span>
          {this.props.child}
        </div>
      </div>
    );
  }
}
export default Day;
