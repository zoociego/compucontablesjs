import React, { useEffect, useState, useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import pool from '../../database/database';

const Table = () => {
	const [users, setUsers] = useState([]);
	const getUsers = async () => {
		const clients = await pool.query('SELECT * FROM `cliente');
		setUsers(clients);
	};
	useEffect(() => {
		getUsers();
	}, []);

	const columns = useMemo(
		() => [
			{
				accessorKey: 'rut',
				header: 'Rut',
				Cell: ({ row }) => `${row.original.rut}-${row.original.dv}`
			},
			{
				accessorKey: 'razon_social',
				header: 'Razon Social'
			},
			{
				accessorKey: 'giro',
				header: 'Giro'
			},
			{
				accessorKey: 'celular',
				header: 'Celurar'
			},
			{
				accessorKey: 'email',
				header: 'Email'
			},
			{
				header: 'Gestiones',
				Cell: () => <button className="btn btn-light">Modificar</button>
			}
		],
		[]
	);

	return (
		<MaterialReactTable
			columns={columns}
			data={users}
			enableEditing='true'
		/>
	);
};

export default Table;
