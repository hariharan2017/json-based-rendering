import { store } from "./store/configureStore";
import { useState } from "react";
import { Provider } from "react-redux";
import { JSON_EDITOR, QUESTIONNAIRE } from "./constants/constants";
import Topbar from "./components/Layout/Topbar";
import Sidebar from "./components/Layout/Sidebar"; 
import Questionnaire from "./views/Questionnaire";
import JsonEditor from "./views/JsonEditor";

function App() {
  const [tab, setTab] = useState(JSON_EDITOR);

  return (
    <Provider store={store}>
      <div className="App" style={{ height: "100%" }}>
        <Topbar />
        {/* To check sticky topbar
      {[...Array(100).keys()].map((item) => {
        return <div style={{ margin: "10px", backgroundColor: "grey" }}>{item}</div>
      })} */}
        <Sidebar tab={tab} setTab={setTab}>
          {tab === QUESTIONNAIRE && <Questionnaire />}
          {tab === JSON_EDITOR && <JsonEditor />}
        </Sidebar >
      </div>
    </Provider>
  );
}

export default App;
