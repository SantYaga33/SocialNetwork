import React from 'react';
import styles from './Photos_Content.module.css';
import SidebarLeft from "./SidebarLeft/SidebarLeft";

import SidebarRigth from "./SidebarRigth/SidebarRigth";
import Photos from "./Photos/Photos";


const Photos_Content = (props) => {
	return (
		<section >
			<div className={styles.section_wrap}>
				<div className={styles.container}>
					<div className={styles.content_wrap}>
						<SidebarLeft />
						<Photos/>
						<SidebarRigth state={props.state}/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Photos_Content;