import { Link, useRouteError } from "react-router-dom";
import style from "./style.module.scss";
import Lottie from "lottie-react";
import animation from "./assets/animation_lmhuz9kd.json";

export function Error() {
	const error = useRouteError();

	return (
		<div className={style.container}>
			<h1>Something Went Wrong</h1>
			<div className={style.lottieError}>
				<Lottie animationData={animation} />
			</div>

			{(error as Error)?.message ||
				(error as { statusText?: string })?.statusText}

			<Link to="/"> Go to Home</Link>
		</div>
	);
}
