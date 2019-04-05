import React from "react";
import NavBar from "./components/NavBar/NavBar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Search from "./components/Search/Search";

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavBar />
          <Search />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
