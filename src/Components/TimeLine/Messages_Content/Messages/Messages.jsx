import React from 'react';
import styles from  './Messages.module.css';




const Messages = () => {
	return (
		<div className={styles.messages_wrap}>
			<div className={styles.messages	}>
				<div className={styles.messages_title}></div>
				<div className={styles.messages_infoWrap}>
					<div className={styles.messages_friendsList}></div>
					<div className={styles.messages_chat}>
						<div className={styles.messages_chatHead}>
							<div className={styles.chatHead_ava}></div>
							<span></span>
						</div>
						<div className={styles.messages_chatArea}></div>
						<div className={styles.messages_chatText}></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Messages;