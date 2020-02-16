import React from 'react';
import className from 'classnames';
import styles from  './Friends.module.css';
import img1 from './Friends_Img/1.png'
import img2 from './Friends_Img/2.png'
import img3 from './Friends_Img/3.png'
import img4 from './Friends_Img/4.png'
import img5 from './Friends_Img/1.png'



const Friends = () => {
	return (
		<div className={styles.widget}>
			<h4 className={styles.friends_title}>Friends</h4>
			<ul className={styles.friends}>
				<li>
				<figure><img src={img1 } alt=""/>
					<span className={className(styles.status,styles.status_online)}></span>
				</figure>
				<div className={styles.friend_meta}>
					<h4><a href="time-line.html" title="">Dimon Boss</a></h4>
					<a href="#" title="" className={styles.underline}>wintersolder@gmail.com</a>
				</div>
			</li>
				<li>
					<figure><img src={img2 } alt=""/>
						<span className={className(styles.status,styles.status_online)}></span>
					</figure>
					<div className={styles.friend_meta}>
						<h4><a href="time-line.html" title="">Issabel</a></h4>
						<a href="#" title="" className={styles.underline}>wintersolder@gmail.com</a>
					</div>
				</li>
				<li>
					<figure><img src={img3 } alt=""/>
						<span className={className(styles.status,styles.status_offline)}></span>
					</figure>
					<div className={styles.friend_meta}>
						<h4><a href="time-line.html" title="">Andrew</a></h4>
						<a href="#" title="" className={styles.underline}>wintersolder@gmail.com</a>
					</div>
				</li>
				<li>
					<figure><img src={img4 } alt=""/>
						<span className={className(styles.status,styles.status_online)}></span>
					</figure>
					<div className={styles.friend_meta}>
						<h4><a href="time-line.html" title="">Sophia</a></h4>
						<a href="#" title="" className={styles.underline}>wintersolder@gmail.com</a>
					</div>
				</li>
				<li>
					<figure><img src={img5 } alt=""/>
						<span className={className(styles.status,styles.status_afk)}></span>
					</figure>
					<div className={styles.friend_meta}>
						<h4><a href="time-line.html" title="">Ignat</a></h4>
						<a href="#" title="" className={styles.underline}>wintersolder@gmail.com</a>
					</div>
				</li>
				<li>
					<figure><img src={img1 } alt=""/>
						<span className={className(styles.status,styles.status_offline)}></span>
					</figure>
					<div className={styles.friend_meta}>
						<h4><a href="time-line.html" title="">Evgeni</a></h4>
						<a href="#" title="" className={styles.underline}>wintersolder@gmail.com</a>
					</div>
				</li>
				<li>
					<figure><img src={img2 } alt=""/>
						<span className={className(styles.status,styles.status_afk)}></span>
					</figure>
					<div className={styles.friend_meta}>
						<h4><a href="time-line.html" title="">Sveta</a></h4>
						<a href="#" title="" className={styles.underline}>wintersolder@gmail.com</a>
					</div>
				</li>
				<li>
					<figure><img src={img3 } alt=""/>
						<span className={className(styles.status,styles.status_online)}></span>
					</figure>
					<div className={styles.friend_meta}>
						<h4><a href="time-line.html" title="">Andrew</a></h4>
						<a href="#" title="" className={styles.underline}>wintersolder@gmail.com</a>
					</div>
				</li>
				<li>
					<figure><img src={img4 } alt=""/>
						<span className={className(styles.status,styles.status_afk)}></span>
					</figure>
					<div className={styles.friend_meta}>
						<h4><a href="time-line.html" title="">Sophia</a></h4>
						<a href="#" title="" className={styles.underline}>wintersolder@gmail.com</a>
					</div>
				</li>
				<li>
					<figure><img src={img5 } alt=""/>
						<span className={className(styles.status,styles.status_offline)}></span>
					</figure>
					<div className={styles.friend_meta}>
						<h4><a href="time-line.html" title="">Saveliy</a></h4>
						<a href="#" title="" className={styles.underline}>wintersolder@gmail.com</a>
					</div>
				</li>
			</ul>
		</div>
	);
}

export default Friends;