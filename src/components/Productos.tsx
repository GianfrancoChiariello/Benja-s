import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import {useRouter} from 'next/router'


const Productos = (productos: any) => {
    
    const router = useRouter()
    const products = productos?.productos

    

    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2rem'
        }}>

            {
                products && products.map((item: any, index: any) => {
                    return (
                        <div style={{
                            backgroundColor: 'rgba(46, 46, 72, 1)',
                            padding: '1rem',
                            borderRadius: '.6rem'
                        }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: '1rem'
                        }}>
                            <img src="https://th.bing.com/th/id/OIP.p05PEVS3VPm6nVlzlRwhSgHaHa?pid=ImgDet&rs=1" width="120px" />
                            <div>
                                <h4 key={index}>Producto: {item.producto.nombre}</h4>
                                <h4 key={index}>Marca: {item.marca}</h4>
                                <h4 key={index}>Empaque: {item.empaque}</h4>
                                <h4 key={index}>Etapa: {item.etapa}</h4>
                                <h4 key={index}>Peso: {item.peso} {item.unidad}</h4>
                                <h4 key={index}>Stock: {item.producto.empaque !== 'Bolsa' ? `${item.producto.total_unitario} Uni` : `${item.producto.total_kg} Kgs` }</h4>
                                <h4 key={index}>Precio: {item.producto.empaque !== 'Bolsa' ? item.producto.precio_unitario : item.producto.precio_kg } $</h4>
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
                                <DeleteIcon className="click"/>
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