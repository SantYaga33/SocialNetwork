import React from 'react';
import styles from  './SectionContent.module.css';
import SidebarLeft from "./SidebarLeft/SidebarLeft";
import CentralContent from "./Central/Central";
import SidebarRigth from "./SidebarRigth/SidebarRigth";
import {BrowserRouter, Route} from "react-router-dom";



const SectionContent = () => {
	return (
		<BrowserRouter>
			<section >
				<div className={styles.section_wrap}>
					<div className={styles.container}>
						<div className={styles.content_wrap}>
							<SidebarLeft />
								{/*<Route path='/photos'  component={ CentralContent }/>*/}
								{/*<Route path='/videos' component={ CentralContent }/>*/}
								{/*<Route path='/friends' component={ CentralContent }/>*/}
								{/*<Route path='/groups' component={ CentralContent }/>*/}
								{/*<Route path='/about' component={ CentralContent }/>*/}
								{/*<Route path='/more' component={ CentralContent }/>*/}
							<CentralContent/>
							<SidebarRigth />
						</div>
					</div>
				</div>
			</section>
		</BrowserRouter>
	);
}

export default SectionContent;