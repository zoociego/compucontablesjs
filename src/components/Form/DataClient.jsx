import React from 'react';
import './Form.css';
import ExtraDataClient from './ExtraDataClient';

function DataClient () {
	return (
		<>
			<form className='container'>
				<div className="form-child-container">
					<div className='form-group'>
						<label className='form-label'>Alias</label>
						<input type="text" className="form-control" id="Alias" placeholder="Roberto" />
					</div>
					<div className='form-group'>
						<label className='form-label'>Rut</label>
						<input type="text" className="form-control" id="rut" placeholder="Ej: 12345678-9" />
					</div>
				</div>
				<div className="form-group">
					<label className='form-label'>Razon Social</label>
					<input type="text" className="form-control" id="razon_social" placeholder="La Casa de Toni Limitada" />
				</div>
				<div className="form-group">
					<label>Giro</label>
					<input type="text" className="form-control" id="previred_password" placeholder='Pasteleria'/>
				</div>
				<div className="form-group form-child-container2">
					<div>
						<label className='form-label'>Celular</label>
						<input type="text" className="form-control " id="celular" placeholder="+56933444555" />
					</div>
					<div className="form-group">
						<label>Clave SII</label>
						<input type="text" className="form-control" id="clave_sii" />
					</div>
					<div >
						<label className='form-label'>Email</label>
						<input type="email" className="form-control" style={{ width: 300 }} id="previred_password" placeholder='alguien.al@compucontable.cl'/>
					</div>
				</div>
				<div className='form-child-container3'>
					<div className="form-group">
						<label>Usuario Previred</label>
						<input type="text" className="form-control" id="previred_user" />
					</div>
					<div className="form-group">
						<label>Clave Previred</label>
						<input type="text" className="form-control" id="previred_password" />
					</div>
				</div>
				<ExtraDataClient />
				<div className='form-button'>
					<button type="submit" className="btn btn-lg btn-primary">Guardar</button>
				</div>
			</form>

		</>
	);
}

export default DataClient;
