import { useQuery } from "@tanstack/react-query";
import style from "./App.module.scss";
import { Spinner, TopNav } from "./components";
import { fetchAPI } from "./util";
import { moviesType } from "./types";
import { Link } from "react-router-dom";

function App() {
	const { isLoading, data } = useQuery(["top_rated"], {
		queryFn: () => fetchAPI("/movie/top_rated"),
	});

	if (isLoading) {
		return <Spinner />;
	}

	if (Array.isArray(data.results) == false) return;
	const movies: moviesType[] = data.results;
	const sortedMovies = movies.sort((a, b) => {
		return b.vote_count - a.vote_count;
	});
	const Top = sortedMovies.slice(0, 2)[0];
	console.log(Top, "Top");

	return (
		<div className={style.app}>
			<section
				aria-label="hero section"
				className={style.hero}
				style={{
					backgroundImage: `url(https://image.tmdb.org/t/p/w500${Top.backdrop_path})`,
				}}>
				<TopNav />
				<div className={style.container}>
					<div className={style.hero_container}>
						<h2>{Top.title}</h2>
						<div className="published">
							<h4>{Top.vote_count}</h4>
							<h4>{Top.release_date}</h4>
						</div>
						<p>{Top.overview}</p>
						<Link to={{ pathname: "/", search: "Bat Man" }}>Watch Trailer </Link>
					</div>
				</div>
			</section>
		</div>
	);
}

export default App;
