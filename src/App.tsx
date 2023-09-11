import style from "./App.module.scss";
import { TopNav } from "./components";

function App() {
	return (
		<div className={style.app}>
			<TopNav />
			<h1>Hello</h1>
		</div>
	);
}

export default App;
