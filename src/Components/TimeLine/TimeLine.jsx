import React from 'react';
import styles from  './TimeLine.module.css';
import Header from "./Header/Header";
import SectionContent from "./SectionContent/SectionContent";
import Footer from "./Footer/Footer";



const TimeLine = () => {
	return (
		<div className={styles.timeLine}>
			<Header />
			<SectionContent/>
			<Footer/>
		</div>

	);
}

export default TimeLine;