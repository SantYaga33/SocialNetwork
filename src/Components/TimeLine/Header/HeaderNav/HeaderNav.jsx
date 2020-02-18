import React from 'react';
import styles from  './HeaderNav.module.css';
import Generate_li from "../../General/Generate_li";



const headerNavNames =['Photos','Videos','Friends','Groups','About','More'];
const newHeaderNavNames = headerNavNames.map(el => <Generate_li title={el}/>);


const HeaderNav = () => {
	return (
		<div className={styles.headerNavbar}>

			<div className={styles.headerNavbar_ava}></div>
			<div className={styles.plug}></div>
				<ul className={styles.headerNavbar_ul}>
					<li className={styles.headerNavbar_admin}>
						<h5> John Doe</h5>
						<span>admin</span>
					</li>
					<li className={styles.headerNavbar_links}>
						<li className={styles.headerNavbar_active}>Timeline</li>
						{ newHeaderNavNames }
					</li>
				</ul>
		</div>
	);
}

export default HeaderNav;