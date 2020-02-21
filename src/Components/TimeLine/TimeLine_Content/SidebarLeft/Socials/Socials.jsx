import React from 'react';
import styles from  './Socials.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Socials = () => {
	return (
		<div className={styles.widget}>
			<h4 className={styles.widgetTitle}>Socials</h4>
			<ul className={styles.socials}>
				<li className={styles.facebook}>
					<a title="" href="#"><span>facebook</span>
						<FontAwesomeIcon icon={['fab', 'facebook']}  className={ styles.socials_icon } size ='lg'/>
						<ins>45 likes</ins>
					</a>
				</li>
				<li className={styles.twitter}>
					<a title="" href="#"><span>twitter</span>
						<FontAwesomeIcon icon={['fab', 'twitter']}  className={ styles.socials_icon } size ='lg'/>
						<ins>25 likes</ins>
					</a>
				</li>
				<li className={styles.google}>
					<a title="" href="#"><span>google</span>
						<FontAwesomeIcon icon={['fab', 'google']}  className={ styles.socials_icon } size ='lg'/>
						<ins>35 likes</ins>
					</a>
				</li>
			</ul>
		</div>
	);
}

export default Socials;