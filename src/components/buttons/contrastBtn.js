import React from "react";
import style from "./contrastBtn.module.css";

const ContrastBtn = ({text}) =>{
	{/*like the wishlist button on that one website :)*/}
	return(

		<button className={style["contrast-button"]}>{text}</button>
		
	);
};

export default ContrastBtn;