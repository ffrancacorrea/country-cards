import "./App.css";
import Landing from "./components/Landing";
import data from "./data";

const App = () => {
  return (
    <div className="App">
      <Landing data={data} />
    </div>
  );
};

export default App;
