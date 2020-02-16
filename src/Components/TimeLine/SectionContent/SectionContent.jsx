import React from 'react';
import styles from  './SectionContent.module.css';
import SidebarLeft from "./SidebarLeft/SidebarLeft";
import CentralContent from "./Central/Central";
import SidebarRigth from "./SidebarRigth/SidebarRigth";



const SectionContent = () => {
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

export default SectionContent;