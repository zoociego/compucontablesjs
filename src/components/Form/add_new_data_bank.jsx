/*eslint-disable */
import React from 'react';

const Form_bank = () => {

	return (
		<>
			<div className="form-group">
					<label>Rut</label>
					<input type="text" className="form-control" id="rutBank" />
			</div>
			<div className="form-group">
					<label>Tipo de Banco</label>
					<input type="text" className="form-control" id="typeofBank" />
			</div>
			<div className="form-group">
					<label>Tipo de Cuenta</label>
					<input type="text" className="form-control" id="typeofAccount" />
			</div>
			<div className="form-group">
					<label>Numero de Cuenta</label>
					<input type="text" className="form-control" id="accountNumber" />
			</div>
			<div className="form-group">
					<label>Contraseña de banco</label>
					<input type="text" className="form-control" id="passwordBank" />
			</div>
		</>
	);
};


export default Form_bank;