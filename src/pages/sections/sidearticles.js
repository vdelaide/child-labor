import React from "react";
import style from "./sidearticles.module.css";

import data from "../../dataSideArticle.json";

const SideArticles = () =>{
	const articlesData = data["side-articles"];

	let displayedArticles = [];
	let articleKey = 0;

	const handleArticleData = (article) =>{
		articleKey += 1;

		displayedArticles.push(
			<SideArticle
				link={article["link"]}
				src={article["src"]}

				alt={article["alt"]}
				dateTime={article["dateTime"]}

				textTime={article["textTime"]}
				headline={article["headline"]}

				author={article["author"]}
				key={articleKey}
			/>
		);

		return displayedArticles;
	};

	articlesData.forEach(handleArticleData)
	return(
		<aside id={style["side-articles"]}>

			{displayedArticles}

		</aside>
	);
};

const SideArticle = ({link, src, alt, dateTime, textTime, headline, author}) =>{
	return(
		<article>

			<a href={link}>

				<img src={src} alt={alt}/>

				<div className={style["article-desc"]}>

					<time dateTime={dateTime}>{textTime}</time>
					<h3>{headline}</h3>
					<cite>{author}</cite> {/*redundant/revise?*/}

				</div>

			</a>

		</article>
	);
};

export default SideArticles;