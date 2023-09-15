import style from "./style.module.scss";
import logo from "./assets/Logo.png";
import search from "./assets/Search.png";
import menu from "./assets/Menu.png";
import { fetchAPI } from "../../../util";
import { Spinner } from "../..";
import { useEffect, useRef, useState } from "react";
import mobileLogo from "./assets/mobleIcon.png";
import { MovieSearch } from "../../../types";
import noImage from "./assets/noimage.png";
import { Link } from "react-router-dom";

export function TopNav() {
	const [searched, setSearched] = useState<MovieSearch[]>([]);
	const [open, setOpen] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);
	const searchRef = useRef<HTMLDivElement>(null);
	const searchIconRef = useRef<HTMLDivElement>(null);

	function handleSearch() {
		if (inputRef.current?.value == "") return;
		setOpen(true);
		fetchAPI(
			`/search/movie?query=${inputRef.current?.value}&include_adult=false&language=en-US&page=1`
		).then((data) => {
			setSearched(data.results);
			
		});
	}

	useEffect(() => {
		document.addEventListener("click", (e) => {
			if (searchRef.current == null) return;
			if (
				searchRef.current.contains(e.target as Node) ||
				searchIconRef.current?.contains(e.target as Node)
			) {
				
			} else {
				setOpen(false);
				
			}

			return () => {
				document.removeEventListener("click", () => {
					
				});
			};
		});
	});
	return (
		<div className={style.wrapperSearch}>
			<nav className={`${style.container}`}>
				<div className="logo">
					<img
						className={style.logo1}
						src={logo}
						alt="Movie Box Logo"
					/>
					<img
						className={style.logo2}
						src={mobileLogo}
						alt="Movie Box Logo"
					/>
				</div>

				<div className={`${style.navItem} ${style.searchBar}`}>
					<input
						type="text"
						placeholder="What do you want to watch?"
						ref={inputRef}
						onKeyDown={(e) => {
							e.key === "Enter" && handleSearch();
						}}
					/>
					<div
						className="searcIcon"
						ref={searchIconRef}
						onClick={() => handleSearch()}>
						<img
							src={search}
							alt="Search Icon"
						/>
					</div>
				</div>

				<div className={`${style.navItem}`}>
					<p>Sign in</p>
					<div className="menu">
						<img
							src={menu}
							alt="signin"
						/>
					</div>
				</div>
			</nav>

			<div
				className={open ? `${style.search}` : `${style.close}`}
				ref={searchRef}>
				{searched?.length == 0 || !searched ? (
					<div className="">
						<div
							className=""
							style={{
								width: "100px",
							}}>
							<Spinner styleS={false} />
						</div>
					</div>
				) : (
					<div className={style.moviesRes}>
						{searched.map((movie, key) => (
							<Link
								to={`/movies/${movie.id}`}
								className={style.card}
								key={key}>
								{movie.poster_path == null ? (
									<img
										src={noImage}
										alt={movie.title}
									/>
								) : (
									<img
										src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
										alt={movie.title}
									/>
								)}

								<h3>{movie.title}</h3>
							</Link>
						))}
					</div>
				)}
			</div>
		</div>
	);
}
