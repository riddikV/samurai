import MyPosts from "./MyPosts/MyPosts";
import cls from "./ProFile.module.css";

const ProFile = () => {
	return (
		<div className={cls.content}>
			<div className={cls.content__img}>
				<img src='https://www.topgear.com/sites/default/files/cars-car/image/2022/11/mini%20countryman.jpeg?w=1280&h=720' alt='rozaBl'/>
			</div>

			<div>ava+description</div>
				
			<MyPosts />
		</div>
	)
}

export default ProFile;