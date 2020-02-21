import React from 'react';
import styles from './Shortcuts.module.css';
import Generate_li_icon_a from "../../../General/Generate_li_icon_a";


const chortcuts = [
	{icon: 'clipboard', className: styles.shortcuts_icon, href: 'newsfeed.html', name: 'News feed'},
	{icon: 'mouse', className: styles.shortcuts_icon, href: 'inbox.html', name: 'Inbox'},
	{icon: 'file', className: styles.shortcuts_icon, href: 'fav-page.html', name: 'My pages'},
	{icon: 'user', className: styles.shortcuts_icon, href: 'timeline-friends.html', name: 'friends'},
	{icon: 'images', className: styles.shortcuts_icon, href: 'timeline-photos.html', name: 'images'},
	{icon: 'video', className: styles.shortcuts_icon, href: 'timeline-videos.html', name: 'videos'},
	{icon: 'sms', className: styles.shortcuts_icon, href: 'messages.html', name: 'Messages'},
	{icon: 'bell', className: styles.shortcuts_icon, href: 'notifications.html', name: 'Notifications'},
	{icon: 'street-view', className: styles.shortcuts_icon, href: 'people-nearby.html', name: 'People Nearby'},
	{icon: 'chart-line', className: styles.shortcuts_icon, href: 'insights.html', name: 'insights'},
	{icon: 'power-off', className: styles.shortcuts_icon, href: 'landing.html', name: 'Logout'}
];

const newShortcuts = chortcuts.map(el => <Generate_li_icon_a className={el.className} icon={el.icon}
							href={el.href} name={el.name}/>
);

console.log(newShortcuts);

const Shortcuts = () => {
	return (
		<div className={styles.widget}>
			<h4 className={styles.widgetTitle}>Shortcuts</h4>
			<ul className={styles.shortcuts}>
				{newShortcuts}
			</ul>
		</div>
	);
};

export default Shortcuts;






















