import React from "react";

import { Cards, Chart, CountryPicker } from './components';
import { fetchData } from './api';
import styles from './App.module.css'
import image from './images/image.png';
import logo from './images/nuevo-logo.png';
import { style } from "@material-ui/system";

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }
  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
      <img className={styles.image} src={image} alt="COVID-19" />
      <div className={style.letra} > <h4> Por @Crists  </h4></div>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
