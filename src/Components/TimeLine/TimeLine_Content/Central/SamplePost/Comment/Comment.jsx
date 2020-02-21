import React from 'react';
import styles from './Comment.module.css';
import CommentAva from './Comment_Img/4.png'


import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";



const Comment = () => {
	return (
		<div className={styles.comment_wrap}>
			<div className={styles.comment_ava}>
				<img src={CommentAva} alt="avatar"/>
			</div>
			<div className={styles.comment_info}>
				<div className={styles.comment_author}>
					<h5><a href="#" title="">Jason borne</a></h5>
					<span>1 year ago</span>
					<a className={styles.comment_icon} href="#" title="Reply">
						<FontAwesomeIcon icon='reply' />
					</a>
				</div>
				<p className={styles.comment_text}>
					У старика была дочь-красавица, жил он с нею тихо и мирно, пока не
					женился на другой бабе, а та баба была злая ведьма. Невзлюбила она
					падчерицу, пристала к старику:
					- Прогони ее из дому, чтоб я ее и в глаза не видела.
					Старик взял да и выдал свою дочку замуж. Живет она с мужем да радуется, и родился у них мальчик.
				</p>
			</div>
		</div>
	);
};

export default Comment;