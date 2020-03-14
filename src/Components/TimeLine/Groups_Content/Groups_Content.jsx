import React from 'react';
import styles from './Groups.module.css'
import group_img from './Groups_Img/group1.jpg'


const Groups_Content = () => {
	return (
		<section>
			<div className={styles.section_wrap}>
				<div className={styles.container}>
					<div className={styles.content_wrap}>
						<div className={styles.group_wrap}>
							<img src={group_img} alt="photo"/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Groups_Content;