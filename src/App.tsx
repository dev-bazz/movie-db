import style from "./App.module.scss";
import { TopNav } from "./components";

function App() {
	return (
		<div className={style.app}>
			<section
				aria-label="hero section"
				className={style.hero}>
				<TopNav />
				<div className={style.container}>
					<h2>John Wick</h2>
				</div>
			</section>
		</div>
	);
}

export default App;
