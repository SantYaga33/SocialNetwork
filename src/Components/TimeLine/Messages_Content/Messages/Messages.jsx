import React from 'react';
import styles from  './Messages.module.css';
import img from './Friends_list/Friends_Img/3.png'
import img1 from './Friends_list/Friends_Img/2.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Friends_list from "./Friends_list/Friends_list";




const Messages = () => {
	return (
		<div className={styles.messages_wrap}>
			<div className={styles.messages	}>
				<div className={styles.messages_titleWrap}>
					<h5 className={styles.messages_title}>
						<FontAwesomeIcon icon='bell'className={styles.messages_titleIcon} />All Messages
					</h5>
					<FontAwesomeIcon icon='ellipsis-h'className={styles.messages_titleIcon} />
				</div>
				<div className={styles.messages_infoWrap}>
					<div className={styles.messages_friendsList}>
						<Friends_list/>
					</div>
					<div className={styles.messages_chat}>

						<div className={styles.messages_chatHead}>
							<div  className={styles.chatHead_ava}>
								<img src={img} alt=""/>
							</div>
							<div className={styles.chatHead_title}>
								<h4> john snow </h4>
								<span className={styles.chatHead_status}>online </span>
							</div>
						</div>

						<div className={styles.messages_chatArea}>
							<ul>
								<div className={styles.toolbar}></div>
								<li className={styles.you}>
									<div className={styles.chatArea_ava}>
										<img src={img} alt=""/>
									</div>
									<p className={styles.chatArea_text}>text  text  text text</p>
								</li>

								<li className={styles.me}>
									<div className={styles.chatArea_ava}>
										<img src={img1} alt=""/>
									</div>
									<p className={styles.chatArea_text}> пыуаыа цыуцукцк цукцук</p>
								</li>
								<li className={styles.you}>
									<div className={styles.chatArea_ava}>
										<img src={img} alt=""/>
									</div>
									<p className={styles.chatArea_text}>text  text  text text</p>
								</li>

								<li className={styles.me}>
									<div className={styles.chatArea_ava}>
										<img src={img1} alt=""/>
									</div>
									<p className={styles.chatArea_text}> пыуаыа цыуцукцк цукцук</p>
								</li>
								<li className={styles.you}>
									<div className={styles.chatArea_ava}>
										<img src={img} alt=""/>
									</div>
									<p className={styles.chatArea_text}>text  text  text text</p>
								</li>

								<li className={styles.me}>
									<div className={styles.chatArea_ava}>
										<img src={img1} alt=""/>
									</div>
									<p className={styles.chatArea_text}> пыуаыа цыуцукцк цукцук</p>
								</li>
								<li className={styles.you}>
									<div className={styles.chatArea_ava}>
										<img src={img} alt=""/>
									</div>
									<p className={styles.chatArea_text}>text  text  text text</p>
								</li>

								<li className={styles.me}>
									<div className={styles.chatArea_ava}>
										<img src={img1} alt=""/>
									</div>
									<p className={styles.chatArea_text}> пыуаыа цыуцукцк цукцук</p>
								</li>
							</ul>
						</div>


						<div className={styles.messages_chatText}>
							<form action="">
								<textarea name="" id="" cols="30" rows="10" placeholder='new massage'></textarea>
								<button></button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Messages;