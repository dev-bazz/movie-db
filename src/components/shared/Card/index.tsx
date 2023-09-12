import { moviesType } from "../../../types/index";
import style from "./style.module.scss";
export function Card({ movie }: { movie: moviesType }) {
	return (
		<article
			data-testid="movie-card"
			className={style.card}>
			<div className="">
				<img
					data-testid="movie-poster"
					className={style.poster}
					src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
				/>
			</div>
			<h4 data-testid="movie-title">{movie.title}</h4>
			<div className={style.stats_wrapper}>
				<div className={style.stats}>
					<h5>Release Date:</h5> <p data-testid="">{movie.release_date}</p>
				</div>
				<div className={style.statsVote}>
					<h5>Vote:</h5> <p>{movie.vote_count}</p>
				</div>
			</div>
		</article>
	);
}
