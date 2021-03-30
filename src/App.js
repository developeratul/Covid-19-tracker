import React from "react";
import Cards from "./Components/Cards/Cards";
import CountryPicker from "./Components/Country-picker/CountryPicker";
import Chart from "./Components/chart/Chart";
import { fetchData } from "./Components/api/index";
import Header from "./Components/Header";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data: data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);
    this.setState({ data: data, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <>
        <Header />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </>
    );
  }
}

export default App;
