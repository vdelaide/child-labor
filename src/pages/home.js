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

						<Sidearticle 
						link=""
						textSrc=""
						textAlt=""
						author=""
						/>

						<Sidearticle 
						link=""
						textSrc=""
						textAlt=""
						author=""
						/>

						<Sidearticle 
						link=""
						textSrc=""
						textAlt=""
						author=""
						/>

						<Sidearticle
						link=""
						textSrc=""
						textAlt=""
						author=""
						/>

					</aside>

					<p id={style["body-text"]}>

						<div> {/*introduction*/}

						</div>

						<div> {/*body 1*/}

						</div>

						<div> {/*body 2*/}

						</div>

						<div> {/*body 3*/}

						</div>

						<div> {/*conclusion*/}

						</div>

					</p>

				</section>
				
			</main>

		</React.Fragment>
	);
};

const Sidearticle = ({link, textSrc, textAlt, author}) =>{
	return(
		<article>

			<a href={link}>

				<img src={textSrc} alt={textAlt}/>
				<cite>{author}</cite>

			</a>

		</article>
	);
};

export default Home;