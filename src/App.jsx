import "./App.scss";

import Button from "react-bootstrap/Button";
import Menubar from "./components/Menubar";

function App() {
  return (
    <div>
      <Menubar></Menubar>
      <h1>TESTE</h1>
      <Button variant="primary">Primary</Button>
    </div>
  );
}

export default App;
