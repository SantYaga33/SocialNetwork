import React from 'react';
import styles from  './HeaderNav.module.css';
import Generate_li from "../../General/Generate_li";


const headerNavLinks = [
	{title: 'Photos', active: styles.headerNavbar_active},
	{title: 'Friends', active: styles.headerNavbar_active},
	{title: 'Groups', active: styles.headerNavbar_active},
	{title: 'About', active: styles.headerNavbar_active},
	{title: 'More', active: styles.headerNavbar_active}
];

const newHeaderNavLinks = headerNavLinks.map(el => <Generate_li title={el.title} to={`/${el.title}`}
																active={el.active}/>);

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
						{ newHeaderNavLinks }
					</li>
				</ul>
		</div>
	);
};

export default HeaderNav;