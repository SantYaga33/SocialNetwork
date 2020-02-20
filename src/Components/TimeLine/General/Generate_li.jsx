import React from 'react';
import {NavLink} from "react-router-dom";


const Generate_li = (props) => {
	return (
		<li>
			<NavLink to={props.to}> {props.title} </NavLink>
			<NavLink to={props.to}> {props.title} activeClassName={props.active} </NavLink>
		</li>
	);
};

export default Generate_li;