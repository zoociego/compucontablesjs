/*eslint-disable */
import React from 'react';

const Form_represent = () => {
	return (
		<>
			<div className="form-group">
					<label>Rut</label>
					<input type="text" className="form-control" id="legalRepresentRut" />
			</div>
			<div className="form-group">
					<label>Nombre</label>
					<input type="text" className="form-control" id="legalRepresentName" />
			</div>
			<div className="form-group">
					<label>Contraseña SII</label>
					<input type="text" className="form-control" id="SIIpassword" />
			</div>
			<div className="form-group">
					<label>Email</label>
					<input type="text" className="form-control" id="legalRepresentEmail" />
			</div>
			<div className="form-group">
					<label>Contraseña de banco</label>
					<input type="text" className="form-control" id="passwordBank" />
			</div>
			
		</>

	);
};

export default Form_represent;