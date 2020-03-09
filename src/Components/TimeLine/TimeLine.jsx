import React from 'react';
import styles from  './TimeLine.module.css';
import Header from "./Header/Header";
import TimeLine_Content from "./TimeLine_Content/TimeLine_Content";
import Footer from "./Footer/Footer";

import Messages_Content from "./Messages_Content/Messages_Content";
import {Route} from "react-router-dom";
import NewFriends_Content from "./NewFriends_Content/NewFriends_Content";
import Photos_Content from "./Photos_Content/Photos_Content";



const TimeLine = (props) => {
	return (
		<div className={styles.timeLine}>
			<Header state={props.state}/>
			<Route path='/SocialNetwork' exact={true}    render={ () => <TimeLine_Content state={props.state}/> }/>
			<Route path='/Timeline'  render={ () => <TimeLine_Content  state={props.state}/> }/>
			<Route path='/Messages'  render={ () => <Messages_Content  state={props.state}/> }/>
			<Route path='/Friends'   render={ () => <NewFriends_Content state={props.state}/> }/>
			<Route path='/Photos'    render={ () => <Photos_Content state={props.state}/> }/>
			<Footer/>
		</div>

	);
};

export default TimeLine;