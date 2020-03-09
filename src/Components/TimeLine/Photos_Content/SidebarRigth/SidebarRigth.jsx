import React from 'react';
import styles from  './SidebarRigth.module.css';
import Friends from "./Friends/Friends";



const SidebarRigth = (props) => {
	return (
		<div className={styles.sidebar_wrap	}>
			<div className={styles.sidebar}>
				<Friends state={props.state}/>
			</div>
		</div>
	);
};

export default SidebarRigth;