import React from 'react';
import Table from '../Table/Table';

const Main = () => {
	return (
		<main>
			<div className="container-fluid px-4">
				<h1 className="mt-4">¡Bienvenido!</h1>
				<ol className="breadcrumb mb-4">
					<li className="breadcrumb-item active">Jesus Lopez</li>
				</ol>

				<div className="row">
					<div className="col-xl-6">
						<div className="card mb-4">
							<div className="card-header">
								<i className="fas fa-chart-area me-1"></i>
											Area Chart Example
							</div>
							<div className="card-body"><canvas id="myAreaChart" width="100%" height="40"></canvas></div>
						</div>
					</div>
					<div className="col-xl-6">
						<div className="card mb-4">
							<div className="card-header">
								<i className="fas fa-chart-bar me-1"></i>
											Bar Chart Example
							</div>
							<div className="card-body"><canvas id="myBarChart" width="100%" height="40"></canvas></div>
						</div>
					</div>
				</div>
				<div className="card mb-4">
					<div className="card-header">
						<i className="fas fa-table me-1"></i>
									Clientes
					</div>
					<div className="card-body">
						<Table />
					</div>
				</div>
			</div>
		</main>
	);
};

export default Main;
