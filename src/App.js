import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ProFile from './components/ProFile/ProFile';

const App = () => {
	return (
		<div className='app-wrapper'>
			<Header />

			<Navbar />

			<ProFile />
		</div>
	);
};

export default App;
