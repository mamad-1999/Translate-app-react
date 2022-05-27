import ContextTranslate, { TranslateContext } from "./components/Context/ContextTranslate";
import Home from "./page/Home";

function App() {
  return (
    <>
      <ContextTranslate>
        <Home />
      </ContextTranslate>
    </>
  );
}

export default App;
