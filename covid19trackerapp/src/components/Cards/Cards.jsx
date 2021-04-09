import React from 'react';
import {Card, CardContent, Typography , Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './Cards.module.css';
import cx from 'classnames';

const Cards = ({data:{confirmed,recovered,deaths,lastUpdate}})=> {//Here are destructuring props
   // console.log(props);
   console.log(confirmed)
    if(!confirmed){
        return 'Loading...';
    }

    return (
        //<h1>Cards</h1>
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5" >
                            <CountUp start={0} end={confirmed.value} duration={2.5} separation=","/>
                        </Typography>
                        <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2" >No of active cases of COVID-19</Typography>

                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5" >
                            <CountUp start={0} end={recovered.value} duration={2.5} separation=","/>
                        </Typography>                        
                        <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2" >No of recovered cases from COVID-19</Typography>

                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5" >
                            <CountUp start={0} end={deaths.value} duration={2.5} separation=","/>
                        </Typography>                        
                        <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2" >No of deaths cases by COVID-19</Typography>

                    </CardContent>
                </Grid>
 
            </Grid>
        
        </div>
    )
}

export default Cards;