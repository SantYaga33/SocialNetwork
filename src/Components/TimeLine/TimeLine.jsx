import React from 'react';
import styles from  './TimeLine.module.css';
import Header from "./Header/Header";
import TimeLine_Content from "./TimeLine_Content/TimeLine_Content";
import Footer from "./Footer/Footer";
import {Route} from "react-router-dom";
import Messages_Content from "./Messages_Content/Messages_Content";



const TimeLine = (props) => {
	return (
		<div className={styles.timeLine}>
			<Header headerNavLinks={props.headerNavLinks}/>
			<Route path='/Timeline'  render={ () => <TimeLine_Content /> }/>
			<Route path='/Messages'  render={ () => <Messages_Content /> }/>
			<Footer/>
		</div>

	);
}

export default TimeLine;