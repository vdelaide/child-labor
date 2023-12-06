import React from "react";
import style from "./header.module.css";

import ContrastBtn from "../buttons/contrastBtn";

const Header = () =>{
	return(
		<header>

			<PrimaryNav />
			
		</header>
	);
};

const PrimaryNav = () =>{
	return(
		<nav id={style["primary-nav"]}>

			<a id={style["logo"]} href="https://google.com">The Adelaide Dispatch</a>

			<div id={style["scroll"]}>

				<p>this could be like the article title maybe? once you scroll down.</p>

			</div>

			<div>

				<ContrastBtn text="Subscribe" />
				<button>Sign-up/Log-in</button>

			</div>

		</nav>
	);
};

const SecondaryNav = () =>{
	return(
		<nav id={style["secondary-nav"]}>
			<p>The navigation for when the reader scrolls down thru the article (less intrusive)</p>
		</nav>
	);
};

export default Header;