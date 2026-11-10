import "./App.css";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";
import { ThemeProvider } from "./contexts/theme";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [themeMode, setthemeMode] = useState("light");

  const lightTheme = () => {
    setthemeMode("light");
  };

  const darkTheme = () => {
    setthemeMode("dark");
  };

  //change in theme

  useEffect(()=>{
   const htmlElem = document.querySelector("html")
   htmlElem.classList.remove("light", "dark")
   htmlElem.classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
