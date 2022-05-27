import ContextTranslate from "./components/Context/ContextTranslate";
import Home from "./page/Home";
import { GlobalStyle } from "./index-css";

function App() {
  return (
    <>
      <ContextTranslate>
        <GlobalStyle />
        <Home />
      </ContextTranslate>
    </>
  );
}

export default App;
