import { Component } from "react";
import "./App.css";
import AddItem from "./Components/AddItem";
import TaskList from "./Components/TaskList";
import NavbarC from "./Components/Navbar/NavbarC";
import FooterC from "./Components/Footer/FooterC";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: [
        { id: Math.random(), text: "task1" },
        { id: Math.random(), text: "task2" },
        { id: Math.random(), text: "task3" },
      ],
    };
  }
  addTask = (text) => {
    this.setState({
      // taskList: this.state.taskList.concat({ id: Math.random(), text: text }),
      taskList: [...this.state.taskList, { id: Math.random(), text: text }],
    });
  };
  deleteTask = (id) => {
    this.setState({
      taskList: this.state.taskList.filter((task) => task.id != id),
    });
  };
  render() {
    return (
      <div className="App">
        <NavbarC />
        <AddItem addTask={this.addTask} />
        <TaskList taskList={this.state.taskList} deleteTask={this.deleteTask} />
        <FooterC />
      </div>
    );
  }
}

export default App;
