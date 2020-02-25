import React from 'react';
import styles from './NewFriends.module.css';
import img from './Friends_Img/3.png'
import img1 from './Friends_Img/1.png'
import img2 from './Friends_Img/2.png'
import img3 from './Friends_Img/4.png'
import GenerateLiAddFriends from "../../General/GenerateLiAddFriends";


const friendsList = [
	{img: img, title: 'Jhon Kates', discr: 'Ftv Model'},
	{img: img1, title: 'Sophia Gate', discr: 'Studen'},
	{img: img2, title: 'Sara Grey', discr: 'Ftv Model'},
	{img: img3, title: 'Sexy Catt', discr: 'Studen'},
	{img: img1, title: 'Jhon Kates', discr: 'Study In Universityl'},
	{img: img, title: 'Caty Lasbo', discr: 'Ftv Model'},
	{img: img3, title: 'Jhon Kates', discr: 'Personal Business'},
	{img: img2, title: 'Jhon Kates', discr: 'Ftv Model'},
	{img: img1, title: 'Jhon Kates', discr: 'Studen'},
	{img: img, title: 'Jhon Kates', discr: 'Personal Business'},
	{img: img3, title: 'Jhon Kates', discr: 'Ftv Model'},
];

const newFriendsList = friendsList.map(el => <GenerateLiAddFriends card_ava={styles.card_ava}
																   img={el.img} card_info={styles.card_info}
																   card_title={styles.card_title} title={el.title}
																   card_discr={styles.card_discr}
																   discr={el.discr} card_buttons={styles.card_buttons}
																   card_buttonRemove={styles.card_buttonRemove}
																   buttonRemove={'Unfriend'}
																   card_buttonAdd={styles.card_buttonAdd}
																   buttonAdd={'Add Friend'}/>);

const NewFriendsList = () => {
	
	return (
		<div>
			{newFriendsList}
		</div>

	);
};

export default NewFriendsList;