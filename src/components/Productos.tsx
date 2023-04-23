import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import {useRouter} from 'next/router'
import {
    deleteProduct
} from '../services/actions'
import {
    useDispatch,
    useSelector
} from 'react-redux'
import {
    Snackbar,
    Alert
} from '@mui/material'
import {
    useState
} from 'react'


const Productos = (productos: any) => {

    console.log(productos,"productos")
    
    const dispatch = useDispatch()
    const router = useRouter()
    const products = productos?.productos
    const [open, setOpen] = useState(false)

    const message = useSelector((state: any) => state?.messageDelete)

    const deleteProducto = (id : any) => {
        deleteProduct(id).then((res) => {
            dispatch<any>(res).finally(() => {
                setOpen(!open)
                setTimeout(() => {setOpen(false)}, 5000);
            })
        })
    }
    

    return (
        <div style={{
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2rem'
        }}>
            <Snackbar open={open} autoHideDuration={6000}>
                <Alert onClose={() => setOpen(false)} severity="success" sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>


            {
                products && products?.map((item: any, index: any) => {
                    return (
                        <div style={{
                            backgroundColor: 'rgba(46, 46, 72, 1)',
                            padding: '1rem',
                            borderRadius: '.6rem',
                        }}
                        key={index}
                        >
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                gap: '1rem',
                            }}>
                                <img src="https://th.bing.com/th/id/OIP.p05PEVS3VPm6nVlzlRwhSgHaHa?pid=ImgDet&rs=1" width="120px" />
                                <div>
                                    <h4 >Producto: {item.producto.nombre}</h4>
                                    <h4 >Marca: {item.marca}</h4>
                                    <h4 >Empaque: {item.empaque}</h4>
                                    <h4 >Etapa: {item.etapa}</h4>
                                    <h4 >Peso: {item.peso} {item.unidad}</h4>
                                    <h4 >Stock: {item.producto.empaque !== 'Bolsa' ? `${item.producto.total_unitario} Uni` : `${item.producto.total_kg} Kgs` }</h4>
                                    <h4 >Precio: {item.producto.empaque !== 'Bolsa' ? item.producto.precio_unitario : item.producto.precio_kg } $</h4>
                                </div>
                            </div>
                            
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                                <h4>Acciones:</h4>
                                <div style={{
                                    display: 'flex',
                                    gap: '.5rem',
                                    marginTop: '.5rem'
                                }}>
                                    <DeleteIcon onClick={() => deleteProducto(item._id)}  className="click"/>
                                    <EditIcon onClick={() => router.push(`/actualizarProducto/${item._id}`)} className="click"/>
                                    <RemoveRedEyeIcon className="click"/>
                                </div>
                            </div>
                        
                        </div>
                    )
                })
            }

        </div>
    )
}


export default Productos