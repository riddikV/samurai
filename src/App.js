import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import ProFile from './components/ProFile';

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
