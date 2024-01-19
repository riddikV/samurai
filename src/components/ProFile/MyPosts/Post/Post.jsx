import cls from './Post.module.css';

const Post = ({ message }) => {
	return (
		<div className={cls.item}>
			<img src='https://static.1tv.ru/uploads/photo/image/2/huge/4062_huge_876c41f50e.jpg'  alt='photoAva'/>
			{message}
			<div>
				<span>Lick</span>
			</div>
		</div>
	)
}

export default Post;