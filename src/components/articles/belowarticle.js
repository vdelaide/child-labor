import React from "react";
import style from "./belowarticle.module.css";

{/*below component will be highly under construction and revision*/}

const BelowArticle = ({src, alt, figCaption, author}) =>{
	return(
		<li>
			<article>
				<a href="google.com">

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

export default BelowArticle;