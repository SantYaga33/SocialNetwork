import React from 'react';
import styles from  './Messages.module.css';
import SidebarLeft from "../SidebarLeft/SidebarLeft";
import {Route} from "react-router-dom";
import CentralContent from "../Central/Central";





const Messages = () => {
	return (
		<section >
			<div className={styles.section_wrap}>
				<div className={styles.container}>
					<div className={styles.content_wrap}>

						<SidebarLeft />
						<Route path='/Timeline'  component={ CentralContent }/>

					</div>
				</div>
			</div>
		</section>
	);
}

export default Messages;