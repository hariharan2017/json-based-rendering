import Topbar from "./components/Layout/Topbar";
import Questionnaire from "./views/Questionnaire";

function App() {
  return (
    <div className="App" style={{ height: "100vh" }}>
      <Topbar />
      {/* To check sticky topbar
      {[...Array(100).keys()].map((item) => {
        return <div style={{ margin: "10px", backgroundColor: "grey" }}>{item}</div>
      })} */}
      <Questionnaire />
    </div>
  );
}

export default App;
