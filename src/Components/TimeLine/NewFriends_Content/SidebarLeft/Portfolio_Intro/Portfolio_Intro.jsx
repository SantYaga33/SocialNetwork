import React from 'react';
import styles from './Portfolio_Intro.module.css';


const Portfolio_Intro = () => {
	return (
		<div className={styles.widget}>
			<h4 className={styles.widgetTitle}>Portfolio Intro</h4>
			<ul className={styles.intro}>
				<li>
					<h4 className={styles.intro_title}> About </h4>
					<p> Hi, i am jhon kates, i am 32 years
						old and worked as a web developer in microsoft company. </p>
				</li>
				<li>
					<div className={styles.intro_title}> Fav Tv Show </div>
					<p> Hi, i am jhon kates, i am 32 years
						old and worked as a web developer in microsoft company. </p>
				</li>
				<li>
					<div className={styles.intro_title}> Favourit Music </div>
					<p> Hi, i am jhon kates, i am 32 years
						old and worked as a web developer in microsoft company. </p>
				</li>
			</ul>
		</div>
	);
};

export default Portfolio_Intro;