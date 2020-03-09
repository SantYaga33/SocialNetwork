import React from 'react';
import styles from  './SidebarRigth.module.css';
import Friends from "./Friends/Friends";
import Followers from "./Followers/Followers";


const SidebarRigth = (props) => {
	return (
		<div className={styles.sidebar_wrap	}>
			<div className={styles.sidebar}>
				<Followers state={props.state}/>
				<Friends state={props.state}/>

			</div>
		</div>
	);
};

export default SidebarRigth;