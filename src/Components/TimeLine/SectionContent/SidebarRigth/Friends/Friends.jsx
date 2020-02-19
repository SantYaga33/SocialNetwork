import React from 'react';
import className from 'classnames';
import styles from './Friends.module.css';
import img1 from './Friends_Img/1.png'
import img2 from './Friends_Img/2.png'
import img3 from './Friends_Img/3.png'
import img4 from './Friends_Img/4.png'
import img5 from './Friends_Img/1.png'


import Generate_ava_status from "../../../General/Generate_ava_status";


const friendsListOld = [
	{
		img: img1,
		cl_span: className(styles.status, styles.status_online),
		cl_meta:styles.friend_meta,
		email: 'wintersolder@gmail.com',
		href: 'time-line.html',
		title: 'Dendi Boss',

	},
	{
		img: img2,
		cl_span: className(styles.status, styles.status_offline),
		cl_meta:styles.friend_meta,
		email: 'wintersolder@gmail.com',
		href: 'time-line.html',
		title: 'Ignat',

	},
	{
		img: img3,
		cl_span: className(styles.status, styles.status_online),
		cl_meta:styles.friend_meta,
		email: 'wintersolder@gmail.com',
		href: 'time-line.html',
		title: 'Boss',

	},
	{
		img: img4,
		cl_span: className(styles.status, styles.status_afk),
		cl_meta:styles.friend_meta,
		email: 'wintersolder@gmail.com',
		href: 'time-line.html',
		title: 'Aisha',
	},
	{
		img: img3,
		cl_span: className(styles.status, styles.status_online),
		cl_meta:styles.friend_meta,
		email: 'wintersolder@gmail.com',
		href: 'time-line.html',
		title: 'Timur',
	},
	{
		img: img3,
		cl_span: className(styles.status, styles.status_online),
		cl_meta:styles.friend_meta,
		email: 'wintersolder@gmail.com',
		href: 'time-line.html',
		title: 'Anna',
	},
	{
		img: img1,
		cl_span: className(styles.status, styles.status_afk),
		cl_meta:styles.friend_meta,
		email: 'wintersolder@gmail.com',
		href: 'time-line.html',
		title: 'NS',
	},
	{
		img: img4,
		cl_span: className(styles.status, styles.status_offline),
		cl_meta:styles.friend_meta,
		email: 'wintersolder@gmail.com',
		href: 'time-line.html',
		title: 'Pupey',
	},
	{
		img: img2,
		cl_span: className(styles.status, styles.status_online),
		cl_meta:styles.friend_meta,
		email: 'wintersolder@gmail.com',
		href: 'time-line.html',
		title: 'Shofia',
	},
	{
		img: img3,
		cl_span: className(styles.status, styles.status_online),
		cl_meta:styles.friend_meta,
		email: 'wintersolder@gmail.com',
		href: 'time-line.html',
		title: 'Valera',
	},
	{
		img: img1,
		cl_span: className(styles.status, styles.status_online),
		cl_meta:styles.friend_meta,
		email: 'wintersolder@gmail.com',
		href: 'time-line.html',
		title: 'Ignat',
	},
];

const fiendsList = friendsListOld.map(el => <Generate_ava_status img={el.img}
																 cl_span={el.cl_span}
																 cl_meta={el.cl_meta}
																 href={el.href}
																 title={el.title} email={el.email
}
/>);


const Friends = () => {
	return (
		<div className={styles.widget}>
			<h4 className={styles.friends_title}>Friends</h4>
				<ul className={styles.friends}>
					{ fiendsList }
				</ul>
		</div>
	);
}

export default Friends;