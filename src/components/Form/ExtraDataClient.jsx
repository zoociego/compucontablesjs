import React, { useState } from 'react';
import AddNewDataBank from './add_new_data_bank';
import AddNewLegalRepresent from './add_new_legal_represent';

const ExtraDataClient = () => {
	const [selected, setSelected] = useState('');

	const handleSelect = () => {
		const select = document.querySelector('#credentials');
		setSelected(select.value);
	};
	return (
		<>
			<div className='add-other-item'>
				<h4>Otras Credenciales</h4>
			</div>
			<select className="form-select" name="credentials" id="credentials" onChange={handleSelect} >
				<option value='null' >-</option>
				<option value='datos_bancarios' id='datos_bancarios'>Datos Bancarios</option>
				<option value='representates_legales' id='' >Representates Legales</option>
			</select>

			{selected === 'datos_bancarios' && <AddNewDataBank />}
			{selected === 'representates_legales' && <AddNewLegalRepresent /> }
		</>
	);
};

export default ExtraDataClient;
