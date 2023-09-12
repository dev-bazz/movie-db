import Lottie from "lottie-react";
import animation from "./assets/lottie/animation_lmg40px2.json";
import styles from "./style.module.scss";

export function Spinner() {
	return (
		<div className={styles.spiner}>
			<div className={styles.container}>
				<Lottie animationData={animation} />
			</div>
		</div>
	);
}
