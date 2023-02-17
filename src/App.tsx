import { Outlet } from "react-router-dom";
import { Theme } from "./components/theme";

function App() {
  return (
    <Theme>
      <Outlet />
    </Theme>
  );
}

export default App;
