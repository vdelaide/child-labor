import React from "react";
import style from "./header.module.css";

const Header = () =>{
	return(
		<header>
			<nav id={style["primary-nav"]}>

				<a id={style["logo"]} href="https://google.com">The Adelaide Dispatch</a>

			</nav>
		</header>
	);
};

export default Header;