import "./App.css";
import { Button } from "./components/Button";
import { Flex } from "./components/Flex";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <div className="App">
      <h1>Theme is {theme}</h1>
      <Button theme={theme}>Styled Components</Button>
      <Button theme={theme} onClick={() => alert("Click Me")}>
        Click Me
      </Button>
      <Button children={"Sign In"} theme={theme} />
      <Button
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        Change Theme
      </Button>
      <Flex>
        <div>One</div>
        <div>Two</div>
        <div>Three</div>
      </Flex>
    </div>
  );
}

export default App;
