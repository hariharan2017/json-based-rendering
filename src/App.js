import Topbar from "./components/Layout/Topbar";

function App() {
  return (
    <div className="App">
      <Topbar />
      <div>Home</div>
      {/* To check sticky topbar
      {[...Array(100).keys()].map((item) => {
        return <div style={{ margin: "10px", backgroundColor: "grey" }}>{item}</div>
      })} */}
    </div>
  );
}

export default App;
