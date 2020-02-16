import React from 'react';
import styles from  './Shortcuts.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// { clipboard,mouse, file,user,images,video,sms,bell, street-view,chart-line,power-off }


const Shortcuts = () => {
	return (
		<div className={styles.widget}>
			<h4 className={styles.widgetTitle}>Shortcuts</h4>
			<ul className={styles.shortcuts}>
				<li>
					<FontAwesomeIcon icon='clipboard'className={styles.shortcuts_icon} />
					<a href="newsfeed.html" title="">News feed</a>
				</li>
				<li>
					<FontAwesomeIcon icon='mouse'className={styles.shortcuts_icon} />
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