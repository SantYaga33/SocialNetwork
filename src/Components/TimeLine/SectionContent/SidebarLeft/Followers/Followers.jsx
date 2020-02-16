import React from 'react';
import styles from  './Followers.module.css';
import img1 from './Followers_Img/1.png'
import img2 from './Followers_Img/2.png'
import img3 from './Followers_Img/3.png'
import img4 from './Followers_Img/4.png'
import img5 from './Followers_Img/1.png'
import img6 from './Followers_Img/4.png'


const Followers = () => {
	return (
		<div className={styles.widget}>
			<h4 className={styles.widgetTitle}>Who's follownig</h4>
			<ul className={styles.followers}>
				<li>
					<figure><img src={img1 } alt=""/></figure>
					<div className={styles.friend_meta}>
						<h4><a href="time-line.html" title="">Dendi Boss</a></h4>
						<a href="#" title="" className={styles.underline}>Add Friend</a>
					</div>
				</li>
				<li>
					<figure><img src={img2 } alt=""/></figure>
					<div className={styles.friend_meta}>
						<h4><a href="time-line.html" title="">Issabel</a></h4>
						<a href="#" title="" className={styles.underline}>Add Friend</a>
					</div>
				</li>
				<li>
					<figure><img src={img3 } alt=""/></figure>
					<div className={styles.friend_meta}>
						<h4><a href="time-line.html" title="">Dread</a></h4>
						<a href="#" title="" className={styles.underline}>Add Friend</a>
					</div>
				</li>
				<li>
					<figure><img src={img4 } alt=""/></figure>
					<div className={styles.friend_meta}>
						<h4><a href="time-line.html" title="">Sophia</a></h4>
						<a href="#" title="" className={styles.underline}>Add Friend</a>
					</div>
				</li>
				<li>
					<figure><img src={img5 } alt=""/></figure>
					<div className={styles.friend_meta}>
						<h4><a href="time-line.html" title="">Kuroku</a></h4>
						<a href="#" title="" className={styles.underline}>Add Friend</a>
					</div>
				</li>
				<li>
					<figure><img src={img6 } alt=""/></figure>
					<div className={styles.friend_meta}>
						<h4><a href="time-line.html" title="">Allen</a></h4>
						<a href="#" title="" className={styles.underline}>Add Friend</a>
					</div>
				</li>
				<li>
					<figure><img src={img1 } alt=""/></figure>
					<div className={styles.friend_meta}>
						<h4><a href="time-line.html" title="">Dendi Boss</a></h4>
						<a href="#" title="" className={styles.underline}>Add Friend</a>
					</div>
				</li>
				<li>
					<figure><img src={img2 } alt=""/></figure>
					<div className={styles.friend_meta}>
						<h4><a href="time-line.html" title="">Issabel</a></h4>
						<a href="#" title="" className={styles.underline}>Add Friend</a>
					</div>
				</li>
				<li>
					<figure><img src={img3 } alt=""/></figure>
					<div className={styles.friend_meta}>
						<h4><a href="time-line.html" title="">Dread</a></h4>
						<a href="#" title="" className={styles.underline}>Add Friend</a>
					</div>
				</li>
				<li>
					<figure><img src={img4 } alt=""/></figure>
					<div className={styles.friend_meta}>
						<h4><a href="time-line.html" title="">Sophia</a></h4>
						<a href="#" title="" className={styles.underline}>Add Friend</a>
					</div>
				</li>
				<li>
					<figure><img src={img5 } alt=""/></figure>
					<div className={styles.friend_meta}>
						<h4><a href="time-line.html" title="">Kuroku</a></h4>
						<a href="#" title="" className={styles.underline}>Add Friend</a>
					</div>
				</li>
				<li>
					<figure><img src={img6 } alt=""/></figure>
					<div className={styles.friend_meta}>
						<h4><a href="time-line.html" title="">Allen</a></h4>
						<a href="#" title="" className={styles.underline}>Add Friend</a>
					</div>
				</li>
			</ul>
		</div>
	);
}

export default Followers;