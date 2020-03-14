import React from 'react';
import styles from './About.module.css';
import about_img from "./About_Img/about.jpg";


const About_Content = () => {
	return (
		<section>
			<div className={styles.section_wrap}>
				<div className={styles.container}>
					<div className={styles.content_wrap}>
						<div className={styles.about_wrap}>
							<img src={about_img} alt="photo"/>
						</div>
					</div>
				</div>
			</div>
		</section>

	);
};

export default About_Content;