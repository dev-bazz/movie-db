import style from "./style.module.scss";
import logo from "./assets/Logo.png";
import search from "./assets/Search.png";
import menu from "./assets/Menu.png";

export function TopNav() {
	console.log(import.meta.env.VITE_APP_TEST)
	return (
		<nav className={`${style.container}`}>
			<div className="logo">
				<img
					src={logo}
					alt="Movie Box Logo"
				/>
			</div>

			<div className={`${style.navItem} ${style.searchBar}`}>
				<input
					type="text"
					placeholder="What do you want to watch?"
				/>
				<div className="searcIcon">
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
	);
}
