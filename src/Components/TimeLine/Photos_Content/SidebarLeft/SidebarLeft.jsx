import React from 'react';
import styles from  './SidebarLeft.module.css';

import Shortcuts from "./Shortcuts/Shortcuts";
import Portfolio_Intro from "./Portfolio_Intro/Portfolio_Intro";



const SidebarLeft = () => {
	return (
		<div className={styles.sidebar_wrap	}>
			<div className={styles.sidebar}>
				<Portfolio_Intro/>
				<Shortcuts/>
			</div>
		</div>
	);
};

export default SidebarLeft;