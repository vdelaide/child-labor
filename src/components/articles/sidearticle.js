import React from "react";
import style from "./sidearticle.module.css";

const Sidearticle = ({link, src, alt, dateTime, textTime, headline, author,}) =>{
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

export default Sidearticle;