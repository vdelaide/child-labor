import React from "react";
import style from "./home.module.css";

const Home = () =>{
	return(
		<main>

			<section id={style["headline"]}>

				<h1 id={style["title"]}>OPINION | Child Labor Laws Stifle Innovation</h1>
				<h2>by <cite>Adelaide "Addy" Martinez-Tapia</cite></h2>

			</section>

			<section id={style["body-content"]}>

				<aside>
					<article>
						<a href="https://google.com"></a>
					</article>

					<article>
						<a href="https://google.com"></a>
					</article>

					<article>
						<a href="https://google.com"></a>
					</article>
				</aside>

			</section>
			
		</main>
	);
};

export default Home;