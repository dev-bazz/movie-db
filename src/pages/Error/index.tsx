import { Link } from "react-router-dom";
import style from "./style.module.scss";
import Lottie from "lottie-react";
import animation from "./assets/animation_lmhuz9kd.json";

export function Error() {
	// const error = useRouteError();
	return (
		<div className={style.container}>
			<h1>Something Went Wrong</h1>
			<div className={style.lottieError}>
				<Lottie animationData={animation} />
			</div>

			{/* <p>{error.statusText || error.message}</p> */}

			<Link to="/"> Go to Home</Link>
		</div>
	);
}
