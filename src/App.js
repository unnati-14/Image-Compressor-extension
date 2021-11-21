import Popup from './components/Popup';
import { BrowserRouter as Router, Switch, Route, Routes} from "react-router-dom";
import Dropzone from './components/Dropzone';

function App() {
  return (
    // <Router>
      // <Popup />
      <Dropzone />
    //   {/* <Routes>
    //     <Route exact path="/" component={Popup} />
    //     <Route path="/dropzone" component={Dropzone} />
    //     <Route path="*" component={() => <h2>404 Not Found </h2>} />
    //   </Routes>
    // </Router> */}
  );
};

export default App;