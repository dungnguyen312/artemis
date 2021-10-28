import artemis from "./static/artemis-goodness.jpg";
import "./App.css";
import React from "react";

function PersonList(props) {
  var people = props.value;
  const listItems = props.value.map((p) => <li key={p.id}>{p.name}</li>);
  const formatName = (name) => name.join(" & ");
  return (
    <div>
      <ul>{listItems}</ul>
      {people.length > 0 && <h2>You have {people.length} unread messages.</h2>}
      <b>{formatName(name)}</b>
      <p> {new Date().toLocaleTimeString()}</p>
    </div>
  );
}

const data = [
  {
    id: 0,
    name: "dung",
    age: 26,
    language: ["Vi", "Jp"],
  },
  {
    id: 1,
    name: "ann",
    age: 18,
    language: ["Vi", "En"],
  },
];
const comment = {
  date: 1635332108,
  text: "I hope you enjoy learning React!",
  author: {
    name: "Dzung",
    avatarUrl: "https://cdn.myanimelist.net/images/characters/16/74945.jpg",
  },
};
const name = ["Dung", "Nguyen", "Ann"];
function Avatar(props) {
  return (
    <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">{props.user.name}</div>
    </div>
  );
}

const formatDate = (timestamp) =>
  new Date(timestamp).toLocaleTimeString("en-US");

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date)}</div>
    </div>
  );
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  tick() {
    this.setState({
      date: new Date(),
    });
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Comment
          date={comment.date}
          text={comment.text}
          author={comment.author}
        />
        <Clock />
        <img src={artemis} className="App-logo" alt="logo" />
        <p>
          Welcome you to <code>Artemis</code>.
        </p>
      </header>
    </div>
  );
}

export default App;
