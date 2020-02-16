import React from 'react';
import classNames from 'classnames';
import styles from  './HeaderNav.module.css';
import navAva from './HeaderNav_Img/navAva1.jpg'


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
						<li className={classNames(styles.headerNavbar_item,styles.headerNavbar_active )}>Timeline</li>
						<li className={styles.headerNavbar_item}>Photos</li>
						<li className={styles.headerNavbar_item}>Videos</li>
						<li className={styles.headerNavbar_item}>Friends</li>
						<li className={styles.headerNavbar_item}>Groups</li>
						<li className={styles.headerNavbar_item}>About</li>
						<li className={styles.headerNavbar_item}>More</li>
					</li>
				</ul>
		</div>
	);
}

export default HeaderNav;