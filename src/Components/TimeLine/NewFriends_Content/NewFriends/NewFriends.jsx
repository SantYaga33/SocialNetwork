import React from 'react';
import styles from './NewFriends.module.css';
import {NavLink, Route, Redirect } from "react-router-dom";
import NewFriendsList from "./NewFriendsList";
import NewFriendsRemove from "./NewFriendsRemove";



const NewFriends = (props) => {

		return (
		<div className={styles.newFriends_wrap}>
			<div className={styles.newFriends}>
				<div className={styles.newFriends_titleWrap}>
					<div className={styles.newFriends_title}>
						<NavLink to='/Friends' exact={true}  activeClassName={styles.newFriends_titleActive}>
							<h4>My Friends</h4><span>50</span></NavLink>
					</div>
					<div className={styles.newFriends_title}>
						<NavLink to='/Friends/Friend Requests'  activeClassName={styles.newFriends_titleActive}>
							<h4>Friend Requests</h4><span>60</span></NavLink>
					</div>
				</div>
				<ul className={styles.newFriends_infoCards}>
					<Route path='/Friends'    exact={true}   render={ () => <NewFriendsList state={props.state}/> }/>
					<Route path='/Friends/Friend Requests'  render={ () => <NewFriendsRemove state={props.state}/> }/>
				</ul>
			</div>
		</div>
	);
};

export default NewFriends;