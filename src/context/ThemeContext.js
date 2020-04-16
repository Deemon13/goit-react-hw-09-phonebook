import React, { Component, createContext } from "react";

const themeProps = {
  light: {
    backgroundColor: "snow",
    inputField: "snow",
    inputFieldText: "black",
    titleColor: "black",
    butColor: "snow",
    butColorActive: "black",
    butTextColor: "black",
    bgButActiveText: "#0df704",
  },

  dark: {
    backgroundColor: "#424242",
    inputField: "#424242",
    inputFieldText: "#0df704",
    titleColor: "#0df704",
    butColor: "black",
    butColorActive: "snow",
    butTextColor: "snow",
    bgButActiveText: "black",
  },
};

const Context = createContext(themeProps.light);

export default class ThemeContext extends Component {
  static Consumer = Context.Consumer;

  toggleTheme = () => {
    const { theme, themeState } = this.state;
    this.setState({
      theme: theme === "light" ? "dark" : "light",
      themeState:
        themeState === themeProps.light ? themeProps.dark : themeProps.light,
    });
  };

  state = {
    theme: "light",
    toggleTheme: this.toggleTheme,
    themeState: themeProps.light,
  };

  render() {
    const { children } = this.props;
    return (
      <Context.Provider
        value={{
          ...this.state,
        }}
      >
        {children}
      </Context.Provider>
    );
  }
}
