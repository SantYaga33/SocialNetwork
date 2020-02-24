import React from 'react';
import styles from './Followers.module.css';
import img1 from './Followers_Img/1.png'
import img2 from './Followers_Img/2.png'
import img3 from './Followers_Img/3.png'
import img4 from './Followers_Img/4.png'

import Generate_ava_discr from "../../../General/Generate_ava_discr";


const followersList = [
	{
		img: img1,
		className_div: styles.friend_meta,
		href: 'time-line.html',
		title: 'Dendi Boss',
		button_title: 'Add Friend'
	},
	{
		img: img2,
		className_div: styles.friend_meta,
		href: 'time-line.html',
		title: 'Issabel',
		button_title: 'Add Friend'
	},
	{
		img: img3,
		className_div: styles.friend_meta,
		href: 'time-line.html',
		title: 'Dread',
		button_title: 'Add Friend'
	},
	{
		img: img4,
		className_div: styles.friend_meta,
		href: 'time-line.html',
		title: 'Sophia',
		button_title: 'Add Friend'
	},
	{
		img: img1,
		className_div: styles.friend_meta,
		href: 'time-line.html',
		title: 'Kuroku',
		button_title: 'Add Friend'
	},
	{
		img: img2,
		className_div: styles.friend_meta,
		href: 'time-line.html',
		title: 'Allen',
		button_title: 'Add Friend'
	},
	{
		img: img3,
		className_div: styles.friend_meta,
		href: 'time-line.html',
		title: 'Dendi Boss',
		button_title: 'Add Friend'
	},
	{
		img: img4,
		className_div: styles.friend_meta,
		href: 'time-line.html',
		title: 'Issabel',
		button_title: 'Add Friend'
	},
	{
		img: img1,
		className_div: styles.friend_meta,
		href: 'time-line.html',
		title: 'Boss',
		button_title: 'Add Friend'
	},

];

const followers = followersList.map(el => <Generate_ava_discr img={el.img}
															  className={el.className_div}
															  href={el.href}
															  title={el.title} button_title={el.button_title}
/>);

const Followers = () => {
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