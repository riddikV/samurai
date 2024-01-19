import cls from "./Navbar.module.css";

const Navbar = () => {
	return (
		<nav className={cls.nav}>
			<div><a className={`${cls.lolckek
			} ${cls.item}`} href='#f'>ProFile</a></div>
			<div><a className={cls.item} href='#w'>Messang</a></div>
			<div><a className={cls.item} href='#r'>News</a></div>
			<div><a className={cls.item} href='#t'>Music</a></div>
		</nav>
	)
}

export default Navbar;