import React from 'react';
import styles from './NewFriends_Content.module.css';
import SidebarLeft from "./SidebarLeft/SidebarLeft";

import NewFriends from "./NewFriends/NewFriends";
import SidebarRigth from "./SidebarRigth/SidebarRigth";


const NewFriends_Content = (props) => {
	return (
		<section >
			<div className={styles.section_wrap}>
				<div className={styles.container}>
					<div className={styles.content_wrap}>
						<SidebarLeft />
						<NewFriends state={props.state}/>
						<SidebarRigth state={props.state}/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default NewFriends_Content;