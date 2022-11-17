import { store } from "./store/configureStore";
import { Provider } from "react-redux";
import Topbar from "./components/Layout/Topbar";
import Questionnaire from "./views/Questionnaire";

function App() {
  return (
    <Provider store={store}>
      <div className="App" style={{ height: "100vh" }}>
        <Topbar />
        {/* To check sticky topbar
      {[...Array(100).keys()].map((item) => {
        return <div style={{ margin: "10px", backgroundColor: "grey" }}>{item}</div>
      })} */}
        <Questionnaire />
      </div>
    </Provider>
  );
}

export default App;
