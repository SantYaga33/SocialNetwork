import React from 'react';
import styles from  './SidebarLeft.module.css';
import Socials from "./Socials/Socials";
import Shortcuts from "./Shortcuts/Shortcuts";
import Recent from "./Recent/Recent";
import Followers from "./Followers/Followers";


const SidebarLeft = (props) => {
	return (
		<div className={styles.sidebar_wrap	}>
			<div className={styles.sidebar}>
				<Socials/>
				<Shortcuts/>
				<Recent/>
				<Followers state={props.state}/>

			</div>
		</div>
	);
}

export default SidebarLeft;