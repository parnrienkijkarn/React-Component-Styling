import Alert from "./components/Alert";
import { Button } from "./components/Button.js";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
      </div>
      <hr />
      <div className="alert-components-section">
        <Alert severity="error">This is error alert box</Alert>
        <Alert severity="warning">This is a warning alert box</Alert>
        <Alert severity="info">This is an info alert box</Alert>
        <Alert severity="success">This is a success alert box</Alert>
      </div>
    </div>
  );
}

export default App;
