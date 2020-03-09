import React from 'react';
import styles from './NewFriends.module.css';
import GenerateLiAddFriends from "../../General/GenerateLiAddFriends";


const NewFriendsList = (props) => {
	const newFriendsList = props.state.friendsList.map(el => <GenerateLiAddFriends card_ava={styles.card_ava}
																	   img={el.img} card_info={styles.card_info}
																	   card_title={styles.card_title} title={el.title}
																	   card_discr={styles.card_discr}
																	   discr={el.discr} card_buttons={styles.card_buttons}
																	   card_buttonRemove={styles.card_buttonRemove}
																	   buttonRemove={'Unfriend'}
																	   card_buttonAdd={styles.card_buttonAdd}
																	   buttonAdd={'Add Friend'}/>);
	return (
		<div>
			{newFriendsList}
		</div>

	);
};

export default NewFriendsList;