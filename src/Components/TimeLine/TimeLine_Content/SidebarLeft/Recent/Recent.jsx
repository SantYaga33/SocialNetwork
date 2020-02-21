import React from 'react';
import styles from  './Recent.module.css';


const Recent = () => {
	return (
		<div className={styles.widget}>
			<h4 className={styles.widgetTitle}>Recent Activity</h4>
			<ul className={styles.recent}>
				<li>
					<div className={styles.recent_activity}>
						<i>10 hours Ago</i>
						<span><a href="#" title="">Commented on Video posted </a></span>
						<h6>by <a href="newsfeed.html">black demon.</a></h6>
					</div>
				</li>
				<li>
					<div className={styles.recent_activity}>
						<i>30 Days Ago</i>
						<span><a href="newsfeed.html"
								 title="">Posted your status. “Hello guys, how are you?”</a></span>
					</div>
				</li>
				<li>
					<div className={styles.recent_activity}>
						<i>2 Years Ago</i>
						<span><a href="#" title="">Share a video on her timeline.</a></span>
						<h6>"<a href="newsfeed.html">you are so funny mr.been.</a>"</h6>
					</div>
				</li>
			</ul>
		</div>
	);
}

export default Recent;