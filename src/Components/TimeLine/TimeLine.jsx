import React from 'react';
import styles from  './TimeLine.module.css';
import Header from "./Header/Header";
import SectionContent from "./SectionContent/SectionContent";
import Footer from "./Footer/Footer";



const TimeLine = (props) => {
	return (
		<div className={styles.timeLine}>
			<Header headerNavLinks={props.headerNavLinks}/>
			<SectionContent/>
			<Footer/>
		</div>

	);
}

export default TimeLine;