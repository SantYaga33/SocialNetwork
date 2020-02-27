import React from 'react';
import styles from  './SidebarRigth.module.css';
import Friends from "./Friends/Friends";



const SidebarRigth = () => {
	return (
		<div className={styles.sidebar_wrap	}>
			<div className={styles.sidebar}>
				<Friends/>
			</div>
		</div>
	);
};

export default SidebarRigth;