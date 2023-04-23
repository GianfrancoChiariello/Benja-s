import {
    useRouter
} from 'next/router'
import Maquet from '../../components/Maquet'
import {
    getProductoId,
    updateProduct
} from '../../services/actions'
import {
    useDispatch,
    useSelector,
} from 'react-redux'
import {
    useEffect,
    useState
} from 'react'
import {
    TextField,
    Button,
    MenuItem,
    Select,
    Alert,
    Snackbar
} from '@mui/material'
import { useFormik } from 'formik';

const actualizarProducto = () => {

    const router = useRouter()
    const id = router?.query.id
    const dispatch = useDispatch()
    const [alertt, setAlertt] = useState(false)


    useEffect(() => {
        
        if (id !== undefined) {
            getProductoId(id)
            .then((res) => {
                dispatch<any>(res)
            })
        }
        
    },[router])


    const producto = useSelector((state: any) => state.productos.productoID)
    const message = useSelector((state: any) => state.productos.messageUpdate)
        
    const [selector, setSelector] = useState("kgs")


    const [productos, setProductos] = useState("")
    const [mascota, setMascota] = useState("Disabled")
    const [empaque, setEmpaque] = useState("Disabled")
    const [etapa, setEtapa] = useState("Disabled")
    const [peso, setPeso] = useState("")
    const [marca, setMarca] = useState("")
    const [unidad,setUnidad] = useState("Disabled")
    const [precio,setPrecio] = useState("")


    useEffect(() => {

        setProductos(producto?.producto?.nombre)
        setPeso(producto?.peso)
        setMarca(producto?.marca)
        setPrecio(producto?.empaque === 'Sobre' ? producto?.producto?.precio_unitario : producto?.producto?.precio_kg)
        setSelector(producto?.empaque === 'Bolsa' ? 'kgs' : 'unitario')

    },[producto])



    const formik = useFormik({
        
        
        initialValues: selector == 'Kgs' ? {
            producto: {
                nombre: producto?.producto?.nombre,
                precio_kg: parseInt(precio),
                total_kg:  parseInt(peso),
                empaque: producto?.empaque
            },
            marca: marca,
            animal: producto?.animal,
            etapa : producto?.etapa,
            empaque: producto?.empaque,
            peso: parseInt(peso),
            unidad: producto?.unidad
        } : {
            producto: {
                nombre: producto?.producto?.nombre,
                precio_unitario: parseInt(precio),
                total_unitario: parseInt(peso),
                empaque: producto?.empaque
            },
            marca: marca,
            animal: producto?.animal,
            etapa : producto?.etapa,
            empaque: producto?.empaque,
            peso: parseInt(peso),
            unidad: producto?.unidad
        },
        
        enableReinitialize: true,
        onSubmit: values => {
            updateProduct(values,id).then((res) => {
                dispatch<any>(res).finally(() => {
                    setAlertt(true)
                    setTimeout(() => {
                        setAlertt(false)
                    }, 5000);
            })})
        },
    })
    



    return (
        <Maquet title="Actualizar producto">
                        <div style={{
                width: '100%',
                height: '89vh',
                backgroundColor: 'rgba(46, 46, 72, 1)',
                padding: '1rem',
                borderRadius: '.5rem'
            }}>

                <Snackbar open={alertt} autoHideDuration={6000}>
                    <Alert onClose={() => setAlertt(false)} severity="success" sx={{ width: '100%' }}>
                        {message?.message}
                    </Alert>
                </Snackbar>


                <form onSubmit={formik.handleSubmit} >
                {/*header*/}
                <div style={{
                    backgroundColor: 'rgba(56, 56, 84, 1)',
                    padding: '1rem',
                    borderRadius: '.5rem'
                }}>

                    <div>
                        <h4>productos/add producto</h4>
                    </div>

                    <div>
                        <TextField id="producto.nombre" name="producto.nombre"  variant="standard" value={formik.values.producto.nombre} onChange={formik.handleChange}/>
                        <h4>Fecha y preview</h4>
                    </div>

                </div>


                {/*data*/}

                <div style={{
                    display: 'flex',
                    gap: '1rem',
                    marginTop: '1rem',
                    height: '65vh'
                }}>

                    {/*all data*/}
                    <div style={{
                        backgroundColor: 'rgba(56, 56, 84, 1)',
                        width: '70%',
                        borderRadius: '.5rem',
                        height: '90%'
                    }}>

                        <div style={{
                            backgroundColor: 'rgba(48, 48, 48, 1)',
                            textAlign: 'center',
                            padding: '1rem',
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '1rem'
                        }}>
                            <h3
                            style={{color: selector === 'unitario' ? 'green' : 'white', cursor: 'pointer'}}
                            >Producto Unitario</h3>
                            <span>|</span>
                            <h3
                            style={{color: selector === 'kgs' ? 'green' : 'white', cursor: 'pointer'}}
                            >Producto por Kgs</h3>
                        </div>

                        <div style={{
                            width: '100%',
                            height: '90%',
                            marginTop: '1rem'
                        }}>

                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-around'
                            }}>
                                <div>   
                                    <h4>marca</h4>
                                    <TextField id="marca" name="marca" variant="outlined" value={formik.values.marca} onChange={formik.handleChange} />
                                    <h4>etapa</h4>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={etapa}
                                        label="Age"
                                        disabled
                                        onChange={(e) => setEtapa(e.target.value)}
                                        sx={{
                                            width: '100%'
                                        }}
                                    >
                                        <MenuItem value="Disabled">Disabled</MenuItem>
                                    </Select>
                                    <h4>peso en "peso"</h4>
                                    <TextField id="peso" name="peso" variant="outlined" type="number" value={peso} onChange={(e) => setPeso(e.target.value)} />
                                </div>

                                <div>
                                    <h4>animal</h4>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={mascota}
                                        label="Age"
                                        disabled
                                        onChange={(e) => setMascota(e.target.value)}
                                        sx={{
                                            width: '100%'
                                        }}
                                    >
                                        <MenuItem value="Disabled">Disabled</MenuItem>
                                    </Select>
                                    <h4>empaque</h4>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={empaque}
                                        label="Age"
                                        disabled
                                        onChange={(e) => setEmpaque(e.target.value)}
                                        sx={{
                                            width: '100%'
                                        }}
                                    >
                                        <MenuItem value="Disabled">Disabled</MenuItem>
                                    </Select>
                                    <h4>unidad</h4>
                                    <TextField id="outlined-basic" disabled  variant="outlined" value={unidad} onChange={(e) => setUnidad(e.target.value)} />
                                </div>
                            </div>

                            <div style={{
                                textAlign: 'center',
                                marginTop: '2.5rem'
                            }}>
                                <Button sx={{
                                    backgroundColor: 'rgba(46, 46, 72, 1)',
                                    paddingX: '2rem',
                                    color: 'white'
                                }}
                                type="submit"
                                >Crear</Button>
                            </div>

                        </div>

                    </div>


                    {/*price*/}
                    <div style={{
                        backgroundColor: 'rgba(56, 56, 84, 1)',
                        width: '30%',
                        borderRadius: '.5rem',
                        height: '60%'
                    }}>

                        <div style={{
                            backgroundColor: 'rgba(48, 48, 48, 1)',
                            textAlign: 'center',
                            padding: '1rem'
                        }}>
                            <h3>Precio</h3>
                        </div>

                        <div style={{
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            marginTop: '3rem'
                        }}>
                            <h4>precio/'unidad'</h4>
                            <TextField id="outlined-basic"  variant="outlined" type="number" value={precio} onChange={(e) => setPrecio(e.target.value as any)} />
                        </div>

                    </div>


                </div>

                </form>


            </div>
        </Maquet>
    )
}

export default actualizarProducto