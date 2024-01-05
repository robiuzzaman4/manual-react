const Hello = () => {
  {
    return React.createElement("h2", { style: { color: "blue" } }, "Hello");
  }
};

// Create App
const App = () => {
  {
    return React.createElement("h2", { style: { color: "blue" } }, "App", Hello());
  }
};

// const Greetings = () => {
// return (
//     <div>
//       <h1>Hello Ruhan!</h1>
//     </div>
// )
// }
// const App = () => {
//   return (
//     <React.Fragment>
//       <h1>This is App Component</h1>
//       <Greetings/>
//     </React.Fragment>
//   );
// };

// Create Root Element Via React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));
