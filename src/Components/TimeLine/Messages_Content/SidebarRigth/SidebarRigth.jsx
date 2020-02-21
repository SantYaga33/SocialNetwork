import React from 'react';
import styles from  './SidebarRigth.module.css';
import Banner from "./Banner/Banner";
import Friends from "./Friends/Friends";


const SidebarRigth = () => {
	return (
		<div className={styles.sidebar_wrap	}>
			<div className={styles.sidebar}>
				<Banner/>
				<Friends/>

			</div>
		</div>
	);
};

export default SidebarRigth;