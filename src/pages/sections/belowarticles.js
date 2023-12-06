import React from "react";
import style from "./belowarticles.module.css";

import data from "../../dataBelowArticle.json";

const BelowArticles = () =>{
	const articlesData = data["below-articles"];

	let displayedArticles = [];
	let articleKey = 0;

	const handleArticleData = (article) =>{
		articleKey += 1;

		displayedArticles.push(
			<BelowArticle 
				href={article["href"]}
				src={article["src"]}

				alt={article["alt"]}
				figCaption={article["caption"]}

				author={article["author"]}
				key={articleKey}
			/>
		);

		return displayedArticles;
	};

	articlesData.forEach(handleArticleData)
	
	return(
		<section id={style["articles"]}>

			<ul>

				{displayedArticles}

			</ul>

		</section>
	);
};

const BelowArticle = ({href, src, alt, figCaption, author}) =>{
	return(
		<li className={style["below-article"]}>
			<article>
				<a href={href}>

					<figure>

						<img className={style["BelowArticle-image"]} src={src} alt={alt}/>
						<figcaption>{figCaption}</figcaption> {/*img credit*/}

					</figure>

					<h3>{author}</h3>				

				</a>
			</article>
		</li>
	);
};

export default BelowArticles;