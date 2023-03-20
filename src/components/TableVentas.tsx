import { useSelector } from 'react-redux'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CircleIcon from '@mui/icons-material/Circle';





const TableVentas = () => {

    const ventas = useSelector((state: any) => state?.ventas)

    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Cliente</TableCell>
                        <TableCell align="right">Order ID</TableCell>
                        <TableCell align="right">Fecha</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="right">Estado</TableCell>
                        <TableCell align="right">Monto</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {ventas.map((row : any) => (
                        <TableRow
                        key={row.nombre}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.nombre}
                        </TableCell>
                        <TableCell align="right">{row._id}</TableCell>
                        <TableCell align="right">{row.fecha}</TableCell>
                        <TableCell align="right">{row.email}</TableCell>
                        <TableCell align="right" sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}>Correcto<CircleIcon sx={{color: 'green', width: '8px',marginRight: '.4rem'}}/></TableCell>
                        <TableCell align="right">{row.total} ARS</TableCell>
                        <TableCell align="right"><MoreVertIcon/></TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default TableVentas