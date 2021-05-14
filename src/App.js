import "./App.css";
import FormWithValidation from "./components/FormWithValidation";
import FormWithoutValidation from "./components/FormWithoutValidation";

function App() {
  return (
    <div className="App">
      <FormWithValidation />
      <FormWithoutValidation />
    </div>
  );
}

export default App;
