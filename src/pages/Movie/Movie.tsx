import { Link, useLocation } from "react-router-dom";
import style from "./style.module.scss";
import logo from "./assets/movieboxblack.png";
import home from "./assets/Home.png";
import movies from "./assets/Movie_Projector.png";
import series from "./assets/TV_Show.png";
import calender from "./assets/Calendar.png";
import logout from "./assets/Logout.png";
import { useQuery } from "@tanstack/react-query";
import { fetchAPI } from "../../util";
import { movieType } from "../../types";
import { useState } from "react";
import { Spinner } from "../../components";
import star from "./assets/Star.png";

export function Movie() {
	const [runtime, setRunTime] = useState<string>();
	const { data, isLoading } = useQuery(["movie"], {
		queryFn: () => fetchAPI("/movie/614930"),
	});
	const movie: movieType = data;

	const formatter = new Intl.NumberFormat("en-US", {
		notation: "compact",
		compactDisplay: "short",
	});

	if (isLoading) {
		return <Spinner />;
	}

	function getUTC() {
		return new Date(movie.release_date).getTime();
	}
	// const { data: MoveVideo } = useQuery(["movieVideo"], {
	// 	queryFn: () => fetchAPI("/movie/614930/videos"),
	// });

	const location = useLocation();
	console.log("location", data);
	return (
		<div className={style.movieDetail}>
			<nav className={style.sideNav}>
				<div className={style.logo}>
					<img
						src={logo}
						alt=""
					/>
				</div>
				<ul>
					<li>
						<img
							src={home}
							alt=""
						/>
						<Link to={"/"}> Home </Link>
					</li>
					<li className={style.active}>
						<img
							src={movies}
							alt=""
						/>
						<Link to={"/movie"}> Movies </Link>
					</li>
					<li>
						<img
							src={series}
							alt=""
						/>
						<Link to={"/"}> TV Series </Link>
					</li>
					<li>
						<img
							src={calender}
							alt=""
						/>
						<Link to={"/"}> Upcoming </Link>
					</li>
				</ul>

				<div className={style.pop}>
					<h4>
						Play movie quizes <br /> and earn
						<br /> free tickets
					</h4>
					<p>50k people are playing now</p>
				</div>

				<li>
					<img
						src={logout}
						alt=""
					/>
					<Link to={"/"}> Log out </Link>
				</li>
			</nav>
			<main className={style.main}>
				<div className="trailer">
					<div
						className={style.mainImage}
						style={{
							backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
						}}></div>
				</div>
				<div className={style.allStats}>
					<div className={style.movieInfo}>
						<div className={style.movieStats}>
							<h1>{movie.title}</h1>{" "}
							<div className={style.meta}>
								<span>•</span> <p>{getUTC()}</p> <span>•</span>{" "}
								{isLoading ? (
									<h1>Loading</h1>
								) : (
									<div className="">
										<p>{movie.runtime}Minutes</p>
									</div>
								)}
								<div className={style.genres}>
									{movie.genres.map((item) => (
										<span key={item.id}>{item.name}</span>
									))}
								</div>
							</div>
						</div>

						<div className="">
							<p className={style.overview}>{movie.overview}</p>
						</div>
					</div>
					<div className="">
						<div className={style.rating}>
							<span>
								<img
									src={star}
									alt="vote"
								/>
							</span>
							<span>{movie.vote_average}</span> |
							<span>{formatter.format(movie.vote_count)}</span>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
