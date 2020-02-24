import React from 'react';
import styles from  './SidebarRigth.module.css';
import Friends from "./Friends/Friends";
import Followers from "./Followers/Followers";


const SidebarRigth = () => {
	return (
		<div className={styles.sidebar_wrap	}>
			<div className={styles.sidebar}>
				<Followers/>
				<Friends/>

			</div>
		</div>
	);
};

export default SidebarRigth;