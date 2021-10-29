import React from "react";
import "./DragAndDrop.css";

const DragNDropElement = ({ element }) => {
  const onDragStart = (e) => {
    e.dataTransfer.setData("text/plain", e.target.id);
    e.dropEffect = "move";
  };
  return (
    <div
      key={element}
      id={element}
      className={"row"}
      draggable={true}
      onDragStart={onDragStart}
    >
      <i className="fa fa-ellipsis-h" />
      {element}
    </div>
  );
};

class DragNDrop extends React.Component {
  constructor(props) {
    console.log("Creating component " + props.id);
    super(props);
    this.onDragStart = this.onDragStart.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
    this.onDragEnter = this.onDragEnter.bind(this);
    this.onDragLeave = this.onDragLeave.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.onDragOver = this.onDragOver.bind(this);
  }

  onDragOver(e) {
    this.props.onDragOver(e, this.props.id);
  }

  onDragEnter(e) {
    this.props.onDragEnter(e, this.props.id);
  }

  onDragLeave(e) {
    if (e.target.id === this.props.id) {
      this.props.onDragLeave(e, this.props.id);
    }
  }

  onDragExit(e) {}

  onDragStart(e) {
    this.props.onDragStart(this.props.id);
  }

  onDragEnd(e) {
    this.props.onDragEnd();
  }

  onDrop(e) {
    this.props.onDrop(e);
  }

  render() {
    const focused = this.props.isDragTarget(this.props.id) ? "drag-enter" : "";
    return (
      <div
        id={this.props.id}
        key={this.props.id}
        className={"drag-and-drop-wrapper " + focused}
        onDragStart={this.onDragStart}
        onDragEnd={this.onDragEnd}
        onDragEnter={this.onDragEnter}
        onDragLeave={(e) => this.onDragLeave(e)}
        onDrop={this.onDrop}
        onDragOver={this.onDragOver}
      >
        {this.props.elements.map((e) => (
          <DragNDropElement key={e} element={e} />
        ))}
      </div>
    );
  }
}

export default DragNDrop;
