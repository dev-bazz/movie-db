import { Link, useLocation } from "react-router-dom";
import style from "./style.module.scss";
import logo from "./assets/movieboxblack.png";
import home from "./assets/Home.png";
import movies from "./assets/Movie_Projector.png";
import series from "./assets/TV_Show.png";
import calender from "./assets/Calendar.png";
import logout from "./assets/Logout.png";

export function Movie() {
	const location = useLocation();
	console.log(location, "location");
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
					<h2>Watch Trailer</h2>
				</div>
			</main>
		</div>
	);
}
