import ContextTheme from "./components/Context/ContextTheme";
import ContextTranslate from "./components/Context/ContextTranslate";
import Home from "./page/Home";

function App() {
  return (
    <>
      <ContextTranslate>
        <ContextTheme>
          <Home />
        </ContextTheme>
      </ContextTranslate>
    </>
  );
}

export default App;
