import { store } from "./store/configureStore";
import { Provider } from "react-redux";
import Topbar from "./components/Layout/Topbar";
import Sidebar from "./components/Layout/Sidebar"; 
import Questionnaire from "./views/Questionnaire";

function App() {
  return (
    <Provider store={store}>
      <div className="App" style={{ height: "100%" }}>
        <Topbar />
        {/* To check sticky topbar
      {[...Array(100).keys()].map((item) => {
        return <div style={{ margin: "10px", backgroundColor: "grey" }}>{item}</div>
      })} */}
        <Sidebar>
          <Questionnaire />
        </Sidebar >
      </div>
    </Provider>
  );
}

export default App;
