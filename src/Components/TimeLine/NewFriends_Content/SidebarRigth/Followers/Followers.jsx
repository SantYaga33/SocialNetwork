import React from 'react';
import styles from './Followers.module.css';
import Generate_ava_discr from "../../../General/Generate_ava_discr";


const Followers = (props) => {

	const followers = props.state.followersList.map(el => <Generate_ava_discr img={el.img}
																  className={styles[el.className_div]}
																  href={el.href}
																  title={el.title} button_title={el.button_title}
	/>);

	return (
		<div className={styles.widget}>
			<h4 className={styles.widgetTitle}>Who's follownig</h4>
			<ul className={styles.followers}>
				{followers}
			</ul>
		</div>
	);
};

export default Followers;