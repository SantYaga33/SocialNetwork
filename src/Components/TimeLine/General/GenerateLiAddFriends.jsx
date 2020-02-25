import React from 'react';
import img from "../NewFriends_Content/NewFriends/Friends_Img/3.png";


const GenerateLiAddFriends = (props) => {
	return (
		<li>
			<div className={props.card_ava}>
				<img src={props.img} alt=""/>
			</div>
			<div className={props.card_info}>
				<div>
					<div className={props.card_title}>{props.title}</div>
					<div className={props.card_discr}>{props.discr}</div>
				</div>
				<div className={props.card_buttons}>
					<button className={props.card_buttonRemove}>{props.buttonRemove}</button>
					<button className={props.card_buttonAdd}>{props.buttonAdd}d</button>
				</div>
			</div>
		</li>
	);
};

export default GenerateLiAddFriends;