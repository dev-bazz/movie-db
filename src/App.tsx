import { useQuery } from "@tanstack/react-query";
import style from "./App.module.scss";
import { Card, Spinner, TopNav } from "./components";
import { fetchAPI } from "./util";
import { movieType, moviesType } from "./types";
import { Link } from "react-router-dom";
import imbn from "./assets/imdb.png";
import tomato from "./assets/tomato.png";
import facebook from "./assets/fa-brands_facebook-square.png";
import instagram from "./assets/fa-brands_instagram.png";
import twitter from "./assets/fa-brands_twitter.png";
import youtube from "./assets/fa-brands_youtube.png";

function App() {
	const { isLoading, data } = useQuery(["top_rated"], {
		queryFn: () => fetchAPI("/movie/top_rated"),
	});

	const { data: heroMovie, isLoading: loadingHerro } = useQuery(["hero"], {
		queryFn: () => fetchAPI(`/movie/458156`),
	});
	if (isLoading || loadingHerro) {
		return <Spinner />;
	}

	const displayHero: movieType = heroMovie;
	if (Array.isArray(data.results) == false) return;
	const movies: moviesType[] = data.results;
	const sortedMovies = movies
		.slice(0, 12)
		.sort((a, b) => b.vote_average - a.vote_average);

	return (
		<div className={style.app}>
			<section
				aria-label="hero section"
				className={style.hero}>
				<TopNav />
				<div className={style.container}>
					<div className={style.hero_container}>
						<h2>{displayHero.title}</h2>
						<div className={style.stats_wrapper}>
							<div className={style.stats}>
								<img src={imbn} /> <span>86.0 / 100</span>
							</div>
							<div className={style.stats}>
								<img src={tomato} />
								<span>97%</span>
							</div>
						</div>
						<p>{displayHero.overview}</p>
						<Link to={{ pathname: "/movie" }}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								fill="none"
								viewBox="0 0 20 20">
								<path
									fill="#fff"
									fillRule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
									clipRule="evenodd"></path>
							</svg>
							Watch Trailer
						</Link>
					</div>
				</div>
			</section>
			<section
				aria-label="top rated"
				className={style.topRated}>
				<div className={style.container}>
					<h2
						id="top-rated"
						className={style.topRatedTitle}>
						Top Rated
					</h2>

					<div className={style.topRatedItems}>
						{sortedMovies.map((movie) => (
							<Card
								key={movie.id}
								movie={movie}
							/>
						))}
					</div>
				</div>
			</section>

			<footer>
				<div
					className={`${style.container} ${style.footer}`}
					style={{
						maxWidth: "492px",
					}}>
					<div className={style.social}>
						<div className="facebook">
							<img src={facebook} />
						</div>
						<div className="facebook">
							<img src={instagram} />
						</div>
						<div className="facebook">
							<img src={twitter} />
						</div>
						<div className="facebook">
							<img src={youtube} />
						</div>
					</div>
					<ul>
						<li>Conditions of Use</li>
						<li>Privacy & Policy</li>
						<li>Press Room</li>
					</ul>
					<p>© 2023 MovieBox by Clement Femi Bazuaye </p>
				</div>
			</footer>
		</div>
	);
}

export default App;
