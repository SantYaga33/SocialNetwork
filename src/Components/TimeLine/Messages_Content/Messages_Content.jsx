import React from 'react';
import styles from './Messages_Content.module.css';
import SidebarLeft from "./SidebarLeft/SidebarLeft";
import Messages from "./Messages/Messages";


const Messages_Content = (props) => {
	return (
		<section >
			<div className={styles.section_wrap}>
				<div className={styles.container}>
					<div className={styles.content_wrap}>
						<SidebarLeft />
						<Messages state={props.state}/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Messages_Content;