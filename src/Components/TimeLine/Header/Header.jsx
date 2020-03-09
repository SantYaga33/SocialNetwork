import React from 'react';
import styles from  './Header.module.css';
import HeaderTop from "./HeaderTop/HeaderTop";
import HeaderBg from "./HeaderBg/HeaderBg";
import HeaderNav from "./HeaderNav/HeaderNav";


const Header = (props) => {
	return (
		<div>
			<header className={styles.header}>
				<HeaderTop state={props.state}/>
				<div className={styles.headerStub}></div>
			</header>
			<section >
				<HeaderBg />
				<HeaderNav state={props.state}/>
			</section>
		</div>


	);
}

export default Header;