import React from 'react';
import styles from  './SectionContent.module.css';
import SidebarLeft from "./SidebarLeft/SidebarLeft";
import CentralContent from "./Central/Central";
import SidebarRigth from "./SidebarRigth/SidebarRigth";
import { Route} from "react-router-dom";



const SectionContent = () => {
	return (
		<section >
			<div className={styles.section_wrap}>
				<div className={styles.container}>
					<div className={styles.content_wrap}>
						<SidebarLeft />
							<Route path='/Photos'  component={ CentralContent }/>
							<Route path='/Videos' component={ SidebarLeft }/>
							<Route path='/Friends' component={ SidebarRigth }/>
							{/*<Route path='/Groups' component={ CentralContent }/>*/}
							{/*<Route path='/About' component={ CentralContent }/>*/}
							{/*<Route path='/More' component={ CentralContent }/>*/}
						{/*<CentralContent/>*/}
						<SidebarRigth />
					</div>
				</div>
			</div>
		</section>
	);
}

export default SectionContent;