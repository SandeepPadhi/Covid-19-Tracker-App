import React from 'react';
//import Cards from './components/Cards/Cards';
//import Chart from './components/Chart/Chart';
//import CountryPicker from './components/CountryPicker/CountryPicker';

import {Cards,Chart,CountryPicker} from './components';
import styles from './App.module.css';
import  {fetchData } from './api';//Whenever it is index file you dont have to specify the file name..just specify the folder
//We use { .. } for name data

class App extends React.Component{
  state = {
    data : {}
  }

  async componentDidMount() {
    try{
      const data = await fetchData();
      this.setState({data:data});
      console.log(data);
    } catch (error){
        console.log("Error in componentDidMount");
        console.log(error);
    }
  }

  render(){
    //const {data} = this.state;
    const data = this.state.data;
    return (
      <div className={styles.container}>
        <Cards data={data}/>
        <CountryPicker/>
        <Chart/>
      </div>
    )
  }

}

export default App;