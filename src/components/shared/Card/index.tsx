import { Link } from "react-router-dom";
import { moviesType } from "../../../types/index";
import style from "./style.module.scss";
import { useState } from "react";
export function Card({ movie }: { movie: moviesType }) {
	const [fav, setFav] = useState(false);
	return (
		<article
			data-testid="movie-card"
			className={style.card}>
			<div className="movie-poster">
				<div
					onClick={() => setFav(!fav)}
					className={fav ? `${style.red}` : style.like}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="21"
						fill="none"
						viewBox="0 0 20 21">
						<path
							fill={fav ? "#be123c" : "#F9FAFB"}
							fillRule="evenodd"
							d="M3.172 5.904c1.562-1.521 4.094-1.521 5.656 0L10 7.044l1.172-1.14c1.562-1.521 4.094-1.521 5.656 0a3.823 3.823 0 010 5.508L10 18.06l-6.828-6.65a3.823 3.823 0 010-5.507z"
							clipRule="evenodd"></path>
					</svg>
				</div>
				<Link
					to={{ pathname: `/movie/${movie.id}` }}
					state={{ movieId: movie.id }}>
					<img
						data-testid="movie-poster"
						className={style.poster}
						src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
					/>
				</Link>
			</div>
			<h4 data-testid="movie-title">{movie.title}</h4>
			<div className={style.stats_wrapper}>
				<div className={style.stats}>
					<h5>Release Date:</h5>{" "}
					<p data-testid="movie-release-date">{movie.release_date}</p>
				</div>
				<div className={style.statsVote}>
					<h5>Vote:</h5> <p>{movie.vote_count}</p>
				</div>
			</div>
		</article>
	);
}
