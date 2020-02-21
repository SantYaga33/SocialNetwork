import React from 'react';
import styles from './TimeLine_Content.module.css';
import SidebarLeft from "./SidebarLeft/SidebarLeft";
import CentralContent from "./Central/Central";
import SidebarRigth from "./SidebarRigth/SidebarRigth";





const TimeLine_Content = () => {
	return (
		<section >
			<div className={styles.section_wrap}>
				<div className={styles.container}>
					<div className={styles.content_wrap}>
						<SidebarLeft />
						<CentralContent/>
						<SidebarRigth />
					</div>
				</div>
			</div>
		</section>
	);
}

export default TimeLine_Content;