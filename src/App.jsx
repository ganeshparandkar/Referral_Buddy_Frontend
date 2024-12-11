import { useState } from "react";
import "./App.css";

import HomeScreen from "./components/HomeScreen";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <HomeScreen/>
    {/* <ProfileEdit/> */}

    </>
  );
}

export default App;
