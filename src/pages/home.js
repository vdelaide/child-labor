import React from "react";
import style from "./home.module.css";

// import Data from "../data.json";
import * as All from "../components/index";

const Home = () =>{
	return(
		<React.Fragment>

			<All.Header />

			<main>

				<section id={style["headline"]}>

					<img 
					src="https://rightsofchildlabor.weebly.com/uploads/2/3/7/5/23752031/5067419_orig.jpg"
					alt="Smiling children milking cows"/>

					<h1 id={style["title"]}>OPINION | Child Labor Laws Stifle Innovation</h1>
					<h2>by <cite>Adelaide "Addy" Martinez-Tapia dot <time dateTime="2023-11-10">10 Nov. 2023</time></cite></h2>

				</section>

				<section id={style["body-content"]}>

					<aside id={style["side-articles"]}>

						<article>
							<a href="https://google.com">
								placeholder
							</a>
						</article>

						<article>
							<a href="https://google.com">
								placeholder
							</a>
						</article>

						<article>
							<a href="https://google.com">
								placeholder
							</a>
						</article>

					</aside>

					<p id={style["body-text"]}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</p>

				</section>
				
			</main>

		</React.Fragment>
	);
};

export default Home;