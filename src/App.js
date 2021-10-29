import React from "react";
import "./index.css";
import goodness from "./assets/artemis.png";

import Footer from "./components/footer/Footer";
import Day from "./components/day/Day";
import DragNDrop from "./components/dragndrop/DragNDrop";

class App extends React.Component {
  initialState = {
    25: ["workout 1", "workout 2", "workout 3"],
    26: ["workout 4", "workout 5", "workout 6"],
    27: ["workout 10", "workout9"],
    28: ["workout 11", "workout12"],
    29: ["workout 14", "workout13"],
    30: ["workout 15", "workout16"],
    31: ["workout 18", "workout17"],
    dragSource: null,
    dragTarget: null,
  };
  constructor(props) {
    super(props);
    this.state = this.initialState;
    this.onDrop = this.onDrop.bind(this);
    this.onDragStart = this.onDragStart.bind(this);
    this.onDragEnter = this.onDragEnter.bind(this);
    this.onDragOver = this.onDragOver.bind(this);
    this.onDragLeave = this.onDragLeave.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
    this.isDragSource = this.isDragSource.bind(this);
    this.isValidDragTarget = this.isValidDragTarget.bind(this);
    this.isDragTarget = this.isDragTarget.bind(this);
    this.moveElement = this.moveElement.bind(this);
  }

  onDrop(e) {
    if (this.isValidDragTarget(this.state.dragTarget)) {
      e.preventDefault();
      const elementId = e.dataTransfer.getData("text/plain");
      this.moveElement(elementId);
    }
  }

  moveElement(id) {
    const sourceElements = this.state[this.state.dragSource].filter(
      (e) => e !== id
    );
    this.setState((state) => ({
      [this.state.dragTarget]: [...state[this.state.dragTarget], id],
      [this.state.dragSource]: sourceElements,
      dragSource: null,
      dragTarget: null,
    }));
  }

  onDragStart(source) {
    this.setState({ dragSource: source });
  }

  onDragEnter(e, id) {
    if (this.isValidDragTarget(id)) {
      this.setState({ dragTarget: id });
    }
  }

  onDragOver(e, id) {
    if (this.isDragTarget(id)) {
      e.preventDefault();
    }
  }

  onDragLeave(e, id) {
    if (id === this.state.dragTarget) {
      this.setState({ dragTarget: null });
    }
  }

  onDragEnd() {
    this.setState({ dragSource: null, dragTarget: null });
  }

  isValidDragTarget(id) {
    return id !== this.state.dragSource;
  }

  isDragTarget(id) {
    return id === this.state.dragTarget && this.state.dragTarget !== null;
  }

  isDragSource(id) {
    return id === this.state.dragSource;
  }

  render() {
    const firstDayOfWeek = 0 - new Date().getDay() + 1;
    const weeklyDay = [
      firstDayOfWeek,
      firstDayOfWeek + 1,
      firstDayOfWeek + 2,
      firstDayOfWeek + 3,
      firstDayOfWeek + 4,
      firstDayOfWeek + 5,
      firstDayOfWeek + 6,
    ].map((n) => {
      const timestamp = new Date(new Date().setDate(new Date().getDate() + n));
      let a = {
        date: timestamp.getDate(),
        day: timestamp.getDay(),
      };
      return (
        <Day
          key={a.day + "_" + a.date}
          daysOfWeek={a.day}
          date={a.date}
          child={
            <DragNDrop
              elements={this.state[a.date]}
              id={a.date}
              onDrop={this.onDrop}
              onDragStart={this.onDragStart}
              onDragEnter={this.onDragEnter}
              onDragOver={this.onDragOver}
              onDragLeave={this.onDragLeave}
              onDragEnd={this.onDragEnd}
              isDragTarget={this.isDragTarget}
              isDragSource={this.isDragSource}
            />
          }
        />
      );
    });

    return (
      <div className="App">
        <div className="board">{weeklyDay}</div>
        <Footer logoSrc={goodness} title="Made by Jun with" subtitle="🌼" />
      </div>
    );
  }
}

export default App;
