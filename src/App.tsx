import { ThemeProvider } from "styled-components";
import theme from "./design-system/theme";

import UserList from "./pages/UserList/UserList";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <UserList />
      </div>
    </ThemeProvider>
  );
}

export default App;
