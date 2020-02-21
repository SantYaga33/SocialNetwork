import React from 'react';
import styles from  './SidebarLeft.module.css';

import Shortcuts from "./Shortcuts/Shortcuts";
import Banner from "./Banner/Banner";


const SidebarLeft = () => {
	return (
		<div className={styles.sidebar_wrap	}>
			<div className={styles.sidebar}>
				<div>
					<h4 className={styles.advertisment}>advertisment</h4>
				</div>
				<Banner/>
				<Shortcuts/>
			</div>
		</div>
	);
};

export default SidebarLeft;