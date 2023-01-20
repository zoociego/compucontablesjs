import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Menu from '../Menu/Menu';
import AccountType from '../AccountType/AccountType';
import Main from '../main/main';
import Footer from '../Footer/Footer';
import DataClient from '../Form/DataClient';
import './Home.css';

const Home = () => {
	const [showAddNewUser, setShowAddNewUser] = useState(false);
	const toggle = () => {
		showAddNewUser ? setShowAddNewUser(!showAddNewUser) : setShowAddNewUser(showAddNewUser);
		console.log(showAddNewUser);
	};
	return (
		<div className="sb-nav-fixed">
			<Navbar />
			<div id="layoutSidenav">
				<div id="layoutSidenav_nav">
					<nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
						<Menu toggle={toggle}/>
						<AccountType/>
					</nav>
				</div>
				<div id="layoutSidenav_content">
					{!showAddNewUser ? <Main /> : <DataClient />}
					<Footer />
				</div>
			</div>
		</div>
	);
};

export default Home;
