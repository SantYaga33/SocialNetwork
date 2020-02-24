import React from 'react';
import styles from './NewFriends.module.css';
import {NavLink} from "react-router-dom";
import img from './Friends_Img/3.png'
import img1 from './Friends_Img/1.png'
import img2 from './Friends_Img/2.png'
import img3 from './Friends_Img/4.png'


const NewFriends = () => {
	return (
		<div className={styles.newFriends_wrap}>
			<div className={styles.newFriends}>
				<div className={styles.newFriends_titleWrap}>
					<div className={styles.newFriends_title}>
						<NavLink to='#' activeClassName={styles.newFriends_titleActive}>
							<h4>My Friends</h4><span>50</span></NavLink></div>
					<div className={styles.newFriends_title}>
						<NavLink to='#' activeClassName={styles.newFriends_titleActive}>
							<h4>Friend Requests</h4><span>60</span></NavLink></div>
				</div>
				<ul className={styles.newFriends_infoCards}>
					<li>
						<div className={styles.card_ava}>
							<img src={img} alt=""/>
						</div>
						<div className={styles.card_info}>
							<div>
								<div className={styles.card_title}>Jhon Kates</div>
								<div className={styles.card_discr}>Ftv Model</div>
							</div>
							<div className={styles.card_buttons}>
								<button className={styles.card_buttonRemove}>Unfriend</button>
								<button className={styles.card_buttonAdd}>Add Friend</button>
							</div>
						</div>
					</li>
					<li>
						<div className={styles.card_ava}>
							<img src={img1} alt=""/>
						</div>
						<div className={styles.card_info}>
							<div>
								<div className={styles.card_title}>Jhon Kates</div>
								<div className={styles.card_discr}>Ftv Model</div>
							</div>
							<div className={styles.card_buttons}>
								<button className={styles.card_buttonRemove}>Unfriend</button>
								<button className={styles.card_buttonAdd}>Add Friend</button>
							</div>
						</div>
					</li>
					<li>
						<div className={styles.card_ava}>
							<img src={img2} alt=""/>
						</div>
						<div className={styles.card_info}>
							<div>
								<div className={styles.card_title}>Jhon Kates</div>
								<div className={styles.card_discr}>Ftv Model</div>
							</div>
							<div className={styles.card_buttons}>
								<button className={styles.card_buttonRemove}>Unfriend</button>
								<button className={styles.card_buttonAdd}>Add Friend</button>
							</div>
						</div>
					</li>
					<li>
						<div className={styles.card_ava}>
							<img src={img3} alt=""/>
						</div>
						<div className={styles.card_info}>
							<div>
								<div className={styles.card_title}>Jhon Kates</div>
								<div className={styles.card_discr}>Ftv Model</div>
							</div>
							<div className={styles.card_buttons}>
								<button className={styles.card_buttonRemove}>Unfriend</button>
								<button className={styles.card_buttonAdd}>Add Friend</button>
							</div>
						</div>
					</li>

				</ul>

			</div>
		</div>
	);
};

export default NewFriends;