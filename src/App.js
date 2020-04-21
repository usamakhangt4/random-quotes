import React, { Component } from "react";
import { fetchData } from "./api/index";
import Header from "./components/Header/Header";
import Cards from "./components/card/Cards";
import "./App.module.css";

export default class App extends Component {
  state = {
    data: {},
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    // console.log(fetchedData);
    // Object.keys(fetchedData).map((key) => {
    //   fetchedData = fetchedData.map((quote) => {
    //     console.log(quote);
    //   });
    // });
    this.setState({ data: fetchedData });
  }

  render() {
    const { data } = this.state;
    return (
      <div className="App">
        <Header />
        <Cards quotes={data} />
      </div>
    );
  }
}
