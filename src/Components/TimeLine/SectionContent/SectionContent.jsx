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
							<Route path='/Timeline'  render={ () => <CentralContent /> }/>
							<Route path='/Photos'   render={ () => <CentralContent />}/>
							<Route path='/Groups' render={ () => <SidebarLeft /> }/>
							<Route path='/Friends' render={ () => <SidebarRigth /> }/>
							<Route path='/Messages' render={ () => <CentralContent /> }/>

						{/*<CentralContent/>*/}
						<SidebarRigth />
					</div>
				</div>
			</div>
		</section>
	);
}

export default SectionContent;