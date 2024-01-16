import cls from './ProFile.module.css';

const ProFile = () => {
	return (
		<div className={cls.content}>
			<div>
			<img src='https://www.topgear.com/sites/default/files/cars-car/image/2022/11/mini%20countryman.jpeg?w=1280&h=720' alt='rozaBl'/>
			</div>

			<div>ava+description</div>
				
			<div>
				My post
				<div>
					New post
				</div>
				<div className={cls.posts}>
					<div className={cls.item}>post 1</div>
					<div className={`${cls.item} ${cls.active}`}>post 2</div>
				</div>
			</div>
		</div>
	)
}

export default ProFile;