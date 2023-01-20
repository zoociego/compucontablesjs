import React from 'react';
import './Menu.css';
import { BiUserPlus } from 'react-icons/bi';

const Menu = (props) => {
	return (
		<div className="sb-sidenav-menu">
			<div className="nav">
				<div className="sb-sidenav-menu-heading">Gestiones</div>

				{/* eslint-disable-next-line */}
				<a className="nav-link agregar-nuevo-cliente" /* href="test" */ onClick={props.toggle}>
					<div className="sb-nav-link-icon"><BiUserPlus /></div>
									Agregar nuevo Cliente
				</a>
				<div className="sb-sidenav-menu-heading">Facturas</div>
				{/* <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
					<div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
									Layouts
					<div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
				</a>
				<div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
					<nav className="sb-sidenav-menu-nested nav">
						<a className="nav-link" href="layout-static.html">Static Navigation</a>
						<a className="nav-link" href="layout-sidenav-light.html">Light Sidenav</a>
					</nav>
				</div>
				<a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
					<div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
									Pages
					<div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
				</a>
				<div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
					<nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
						<a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
											Authentication
							<div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
						</a>
						<div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
							<nav className="sb-sidenav-menu-nested nav">
								<a className="nav-link" href="login.html">Login</a>
								<a className="nav-link" href="register.html">Register</a>
								<a className="nav-link" href="password.html">Forgot Password</a>
							</nav>
						</div>
						<a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
											Error
							<div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
						</a>
						<div className="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
							<nav className="sb-sidenav-menu-nested nav">
								<a className="nav-link" href="401.html">401 Page</a>
								<a className="nav-link" href="404.html">404 Page</a>
								<a className="nav-link" href="500.html">500 Page</a>
							</nav>
						</div>
					</nav>
				</div>
				<div className="sb-sidenav-menu-heading">Addons</div>
				<a className="nav-link" href="charts.html">
					<div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
									Charts
				</a>
				<a className="nav-link" href="tables.html">
					<div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>
									Tables
				</a> */}
			</div>
		</div>
	);
};

export default Menu;
