// import React, { Component, createRef } from "react";
// import "./App.css";
// import Todo from "./Todo";
// export default class Listed extends Component {
//   state = {
//     task: "",
//     tasks: [],
//   };
//   deleteTodo = () => {
//     let mycurrenttasks = this.state.tasks.filter((task)=>{return task!==this.state.task})
//     this.setState({ tasks: mycurrenttasks });
//     return this.state.tasks;
//   };
//   handleInputChange = (ev) => {
//     this.setState({ task: ev.target.value });
//     console.log(this.state.task);
//   };
//   handleFormSubmit = (ev) => {
//     ev.preventDefault();
//     const mycurrenttasks = this.state.tasks.slice();
//     mycurrenttasks.push(this.state.task);
//     this.setState({ tasks: mycurrenttasks });
//   };
//   render() {
//     return (
//       <div>
//         <form
//           style={{ textAlign: "center", marginTop: 20 }}
//           onSubmit={this.handleFormSubmit}
//         >
//           <label htmlFor="Task"></label>
//           <input
//             onChange={this.handleInputChange}
//             value={this.state.task}
//             style={{
//               padding: 10,
//               outline: "none",
//               border: 0,
//               width: 400,
//               background: "#f5f5f5",
//             }}
//             type="text"
//           ></input>
//           <button
//             style={{
//               padding: 8,
//               outline: "none",
//               border: 0,
//               cursor: "pointer",
//               marginLeft: 5,
//               background: "#198754",
//               color: "white",
//             }}
//             type="submit"
//           >
//             Add task
//           </button>
//         </form>
//         <ul>
//           {this.state.tasks.map((task, index) => {
//             return (
//               <Todo
//                 deleteTodo={this.deleteTodo()}
//                 key={task + index}
//                 task={task}
//                 tasks = {this.state.tasks}
//               />
//             );
//           })}
//         </ul>
//       </div>
//     );
//   }
// }
import React, { Component, createRef } from "react";
import "./App.css";
import Todo from "./Todo";
export default class App extends Component {
  state = {
    task: "",
    tasks: [],
  };
  deleteTodo = (task) => {
    this.setState({ tasks: task });
  };
  handleInputChange = (ev) => {
    this.setState({ task: ev.target.value });
    console.log(this.state.task);
  };
  handleFormSubmit = (ev) => {
    ev.preventDefault();
    const mycurrenttasks = this.state.tasks.slice();
    mycurrenttasks.push(this.state.task);
    this.setState({ tasks: mycurrenttasks });
  };
  render() {
    return (
      <div>
        <form
          style={{ textAlign: "center", marginTop: 20 }}
          onSubmit={this.handleFormSubmit}
        >
          <label htmlFor="Task"></label>
          <input
            onChange={this.handleInputChange}
            value={this.state.task}
            style={{
              padding: 10,
              outline: "none",
              border: 0,
              width: 400,
              background: "#f5f5f5",
            }}
            type="text"
          ></input>
          <button
            style={{
              padding: 8,
              outline: "none",
              border: 0,
              cursor: "pointer",
              marginLeft: 5,
              background: "#198754",
              color: "white",
            }}
            type="submit"
          >
            Add task
          </button>
        </form>
        <ul>
          {this.state.tasks.map((task, index) => {
            return (
              <Todo
                deleteTodo={this.deleteTodo}
                key={task + index}
                id={index}
                task={task}
                tasks={this.state.tasks}
                
                />
            );
          })}
        </ul>
      </div>
    );
  }
}