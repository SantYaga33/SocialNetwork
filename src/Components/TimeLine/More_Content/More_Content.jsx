import React from 'react';
import styles from './More.module.css'
import more_img from "./More_Img/more.jpg";


const More_Content = () => {
	return (
		<section>
			<div className={styles.section_wrap}>
				<div className={styles.container}>
					<div className={styles.content_wrap}>
						<div className={styles.more_wrap}>
							<img src={more_img} alt="photo"/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default More_Content;