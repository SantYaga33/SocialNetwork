import React from 'react';
import {NavLink} from "react-router-dom";


const Generate_li = (props) => {
	return (
		<li>
			<NavLink to={props.to}  activeClassName={props.active}> {props.title}</NavLink>
		</li>
	);
};

export default Generate_li;