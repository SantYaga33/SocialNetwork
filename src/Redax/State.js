import img1 from "../Components/TimeLine/TimeLine_Content/SidebarLeft/Followers/Followers_Img/1.png";
import img2 from "../Components/TimeLine/TimeLine_Content/SidebarLeft/Followers/Followers_Img/2.png";
import img3 from "../Components/TimeLine/TimeLine_Content/SidebarLeft/Followers/Followers_Img/3.png";
import img4 from "../Components/TimeLine/TimeLine_Content/SidebarLeft/Followers/Followers_Img/4.png";
import className from "classnames";
import styles from "../Components/TimeLine/TimeLine_Content/SidebarRigth/Friends/Friends.module.css";
import img from "../Components/TimeLine/NewFriends_Content/NewFriends/Friends_Img/3.png";

const State = {
	headerNavLinks: [ 'Timeline', 'Photos', 'Friends', 'Messages', 'Groups', 'About', 'More' ],
	headerTopLinks: ['Home','Timeline','Account setting','More pages'],
	followersList: [
		{
			img: img1,
			className_div: 'friend_meta',
			href: 'time-line.html',
			title: 'Dendi Boss',
			button_title: 'Add Friend'
		},
		{
			img: img2,
			className_div: 'friend_meta',
			href: 'time-line.html',
			title: 'Issabel',
			button_title: 'Add Friend'
		},
		{
			img: img3,
			className_div: 'friend_meta',
			href: 'time-line.html',
			title: 'Dread',
			button_title: 'Add Friend'
		},
		{
			img: img4,
			className_div: 'friend_meta',
			href: 'time-line.html',
			title: 'Sophia',
			button_title: 'Add Friend'
		},
		{
			img: img1,
			className_div: 'friend_meta',
			href: 'time-line.html',
			title: 'Kuroku',
			button_title: 'Add Friend'
		},
		{
			img: img2,
			className_div: 'friend_meta',
			href: 'time-line.html',
			title: 'Allen',
			button_title: 'Add Friend'
		},
		{
			img: img3,
			className_div:'friend_meta',
			href: 'time-line.html',
			title: 'Dendi Boss',
			button_title: 'Add Friend'
		},
		{
			img: img4,
			className_div: 'friend_meta',
			href: 'time-line.html',
			title: 'Issabel',
			button_title: 'Add Friend'
		},
		{
			img: img1,
			className_div: 'friend_meta',
			href: 'time-line.html',
			title: 'Boss',
			button_title: 'Add Friend'
		},
	],
	friendsListOld: [
		{
			img: img1,
			cl_span: className(styles.status, styles.status_online),
			cl_meta:styles.friend_meta,
			email: 'wintersolder@gmail.com',
			href: '/Timeline',
			title: 'Dendi Boss',

		},
		{
			img: img2,
			cl_span: className(styles.status, styles.status_offline),
			cl_meta:styles.friend_meta,
			email: 'wintersolder@gmail.com',
			href: '/Timeline',
			title: 'Ignat',

		},
		{
			img: img3,
			cl_span: className(styles.status, styles.status_online),
			cl_meta:styles.friend_meta,
			email: 'wintersolder@gmail.com',
			href: '/Timeline',
			title: 'Boss',

		},
		{
			img: img4,
			cl_span: className(styles.status, styles.status_afk),
			cl_meta:styles.friend_meta,
			email: 'wintersolder@gmail.com',
			href: '/Timeline',
			title: 'Aisha',
		},
		{
			img: img3,
			cl_span: className(styles.status, styles.status_online),
			cl_meta:styles.friend_meta,
			email: 'wintersolder@gmail.com',
			href: '/Timeline',
			title: 'Timur',
		},
		{
			img: img3,
			cl_span: className(styles.status, styles.status_online),
			cl_meta:styles.friend_meta,
			email: 'wintersolder@gmail.com',
			href: '/Timeline',
			title: 'Anna',
		},
		{
			img: img1,
			cl_span: className(styles.status, styles.status_afk),
			cl_meta:styles.friend_meta,
			email: 'wintersolder@gmail.com',
			href: '/Timeline',
			title: 'NS',
		},
		{
			img: img4,
			cl_span: className(styles.status, styles.status_offline),
			cl_meta:styles.friend_meta,
			email: 'wintersolder@gmail.com',
			href: '/Timeline',
			title: 'Pupey',
		},
		{
			img: img2,
			cl_span: className(styles.status, styles.status_online),
			cl_meta:styles.friend_meta,
			email: 'wintersolder@gmail.com',
			href: '/Timeline',
			title: 'Shofia',
		},
		{
			img: img3,
			cl_span: className(styles.status, styles.status_online),
			cl_meta:styles.friend_meta,
			email: 'wintersolder@gmail.com',
			href: '/Timeline',
			title: 'Valera',
		},
		{
			img: img1,
			cl_span: className(styles.status, styles.status_online),
			cl_meta:styles.friend_meta,
			email: 'wintersolder@gmail.com',
			href: '/Timeline',
			title: 'Ignat',
		},
	],
	friendsList:  [
		{img: img, title: 'Jhon Kates', discr: 'Ftv Model'},
		{img: img1, title: 'Sophia Gate', discr: 'Studen'},
		{img: img2, title: 'Sara Grey', discr: 'Ftv Model'},
		{img: img3, title: 'Sexy Catt', discr: 'Studen'},
		{img: img1, title: 'Jhon Kates', discr: 'Study In Universityl'},
		{img: img, title: 'Caty Lasbo', discr: 'Ftv Model'},
		{img: img3, title: 'Jhon Kates', discr: 'Personal Business'},
		{img: img2, title: 'Jhon Kates', discr: 'Ftv Model'},
		{img: img1, title: 'Jhon Kates', discr: 'Studen'},
		{img: img, title: 'Jhon Kates', discr: 'Personal Business'},
		{img: img3, title: 'Jhon Kates', discr: 'Ftv Model'},
	],
	friendsListRemove: [
	{img: img3, title: 'Caty Lasbo', discr: 'Ftv Model'},
	{img: img4, title: 'Sophia Gate', discr: 'Studen'},
	{img: img1, title: 'Jhon Kates', discr: 'Ftv Model'},
	{img: img3, title: 'Sara Grey', discr: 'Ftv Model'},
	{img: img1, title: 'Jhon Kates', discr: 'Study In Universityl'},
	{img: img4, title: 'Sexy Catt', discr: 'Studen'},
	{img: img3, title: 'Jhon Kates', discr: 'Ftv Model'},
	{img: img4, title: 'Jhon Kates', discr: 'Personal Business'},
	{img: img, title: 'Jhon Kates', discr: 'Personal Business'},
	{img: img2, title: 'Jhon Kates', discr: 'Studen'},
	{img: img3, title: 'Jhon Kates', discr: 'Ftv Model'},
],


};

export default State;