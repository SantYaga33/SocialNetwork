import React from 'react';
import styles from  './Shortcuts.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Generate_li_icon_a from "../../../General/Generate_li_icon_a";


const chortcuts = [
	{icon :'clipboard',  className : 'styles.shortcuts_icon',href: 'newsfeed.html',name:'News feed'},
	{icon :'mouse',      className : 'styles.shortcuts_icon',href: 'inbox.html',name:'Inbox'},
	{icon :'file',       className : 'styles.shortcuts_icon',href: 'fav-page.html',name:'My pages'},
	{icon :'user',       className : 'styles.shortcuts_icon',href: 'timeline-friends.html',name:'friends'},
	{icon :'images',     className : 'styles.shortcuts_icon',href: 'timeline-photos.html',name:'images'},
	{icon :'video',      className : 'styles.shortcuts_icon',href: 'timeline-videos.html',name:'videos'},
	{icon :'sms',        className : 'styles.shortcuts_icon',href: 'messages.html',name:'Messages'},
	{icon :'bell',       className : 'styles.shortcuts_icon',href: 'notifications.html',name:'Notifications'},
	{icon :'street-view',className : 'styles.shortcuts_icon',href: 'people-nearby.html',name:'People Nearby'},
	{icon :'chart-line', className : 'styles.shortcuts_icon',href: 'insights.html',name:'insights'},
	{icon :'power-off',  className : 'styles.shortcuts_icon',href: 'landing.html',name:'Logout'}
];

const newShortcuts = chortcuts.map(el => <Generate_li_icon_a icon={el.icon}
	               className={el.className} href={el.href} name={el.name}/>);

const Shortcuts = () => {
	return (
		<div className={styles.widget}>
			<h4 className={styles.widgetTitle}>Shortcuts</h4>
			<ul className={styles.shortcuts}>

				{newShortcuts }

				<li>
					<FontAwesomeIcon icon='clipboard' className={styles.shortcuts_icon} />
					<a href="newsfeed.html" title="">News feed</a>
				</li>
				<li>
					<FontAwesomeIcon icon='mouse' className={styles.shortcuts_icon} />
					<a href="inbox.html" title="">Inbox</a>
				</li>
				<li>
					<FontAwesomeIcon icon='file' className={styles.shortcuts_icon}/>
					<a href="fav-page.html" title="">My pages</a>
				</li>
				<li>
					<FontAwesomeIcon icon='user' className={styles.shortcuts_icon}/>
					<a href="timeline-friends.html" title="">friends</a>
				</li>
				<li>
					<FontAwesomeIcon icon='images' className={styles.shortcuts_icon}/>
					<a href="timeline-photos.html" title="">images</a>
				</li>
				<li>
					<FontAwesomeIcon icon='video' className={styles.shortcuts_icon}/>
					<a href="timeline-videos.html" title="">videos</a>
				</li>
				<li>
					<FontAwesomeIcon icon='sms' className={styles.shortcuts_icon}/>
					<a href="messages.html" title="">Messages</a>
				</li>
				<li>
				<FontAwesomeIcon icon='bell' className={styles.shortcuts_icon}/>
					<a href="notifications.html" title="">Notifications</a>
				</li>
				<li>
					<FontAwesomeIcon icon='street-view' className={styles.shortcuts_icon}/>
					<a href="people-nearby.html" title="">People Nearby</a>
				</li>
				<li>
					<FontAwesomeIcon icon='chart-line' className={styles.shortcuts_icon}/>
					<a href="insights.html" title="">insights</a>
				</li>
				<li>
					<FontAwesomeIcon icon='power-off' className={styles.shortcuts_icon}/>
					<a href="landing.html" title="">Logout</a>
				</li>
			</ul>
		</div>
	);
}

export default Shortcuts;