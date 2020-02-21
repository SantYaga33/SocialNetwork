import React from 'react';
import styles from './NewPost.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import newPostAva from './NewPost_Img/4.png'






const NewPost = () => {
	return (
		<div className={styles.widget}>
			<div className={styles.newPost_wrap}>
				<div className={styles.newPost}>
					<div className={styles.newPost_Ava}>
						<img src={ newPostAva } alt=""/>
					</div>
					<div className={styles.newPost_input}>
						<form method="post" className={styles.newPostForm}>
							<textarea rows="2" placeholder="write something"></textarea>
							<div className={styles.newPost_service}>
								<ul>
									<li>
										<FontAwesomeIcon icon='music' className={styles.newPost_icon} />
										<label className={styles.newPost_fileContainer}>
											<input type="file"/>
										</label>
									</li>
									<li>
									<FontAwesomeIcon icon='image' className={styles.newPost_icon} />
										<label className={styles.newPost_fileContainer}>
											<input type="file"/>
										</label>
									</li>
									<li>
									<FontAwesomeIcon icon='file-video'className={styles.newPost_icon} />
										<label className={styles.newPost_fileContainer}>
											<input type="file"/>
										</label>
									</li>
									<li>
										<FontAwesomeIcon icon='camera' className={styles.newPost_icon} />
										<label className={styles.newPost_fileContainer}>
											<input type="file"/>
										</label>
									</li>
									<li>
										<button type="submit">Publish</button>
									</li>
								</ul>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewPost;