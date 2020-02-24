import React from 'react';
import styles from './HeaderNav.module.css';
import PropTypes from 'prop-types';

import Generate_li from "../../General/Generate_li";


const HeaderNav = (props) => {

	const newHeaderNavLinks = props.headerNavLinks.map(el => <Generate_li title={el} to={`/${el}`}
																		  active={styles.headerNavbar_active}/>);
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
					{newHeaderNavLinks}
				</li>
			</ul>
		</div>
	);
};

export default HeaderNav;


HeaderNav.propTypes = {
	headerNavLinks: PropTypes.array
};