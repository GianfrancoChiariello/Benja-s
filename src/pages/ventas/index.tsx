import Maquet from '../../components/Maquet'
import {
    TextField,
    Button,
    MenuItem,
    Select,
    Alert,
    Snackbar,
    Breadcrumbs,
    Typography,
    Badge,
    Tooltip,
    Chip,
    Divider
} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import InputAdornment from '@mui/material/InputAdornment';
import DateRangeIcon from '@mui/icons-material/DateRange';
import LayersClearIcon from '@mui/icons-material/LayersClear';
import SearchIcon from '@mui/icons-material/Search';
import AddBoxIcon from '@mui/icons-material/AddBox';
import {
    useState,
    useEffect
} from 'react'

import {
    useDispatch,
    useSelector
} from 'react-redux'

import {
    newProducto,
    getProductos,
    getTypes
} from '../../services/actions'
import {
    useRouter
} from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCat,faDog,faBox } from '@fortawesome/free-solid-svg-icons'
import Modals from '../../components/Modal'

const ventas = () => {


    const dispatch = useDispatch()
    const router = useRouter()
    const tipos = useSelector((state: any) => state?.productos.tipos)

    const [nombre,setNombre] = useState("Nombre")
    const [email,setEmail] = useState("Email")
    const [marca,setMarca] = useState("")
    const [animal,setAnimal] = useState("")
    const [empaque,setEmpaque] = useState("")
    const [peso,setPeso] = useState("")


    useEffect(() => {
        getProductos(marca,animal,"",empaque,peso).then((res) => {
            dispatch<any>(res)
        })
    },[marca,animal,empaque,peso])

    useEffect(() => {
        getTypes().then((res) => {
            dispatch<any>(res)
        })
    },[])

    const fecha = new Date().toDateString()
    const fecha1 = new Date().toISOString
    const productos = useSelector((state: any) => state.productos.productos)
    const carrito = useSelector((state: any) => state.productos.carrito)

    const [search, setSearch] = useState("")

    const setter = (e: any) => {
        setSearch(e)
    }

    const deleteFilter = () => {
        setMarca("")
        setAnimal("")
        setEmpaque("")
        setPeso("")
    }
    
    const addProduct = (item: any) => {

/*         {
            "_id": "6415fe69eb6565c72eb08fb3",
            "producto": {
                "nombre": "Pedigree perrote",
                "precio_kg": 1,
                "total_kg": 1,
                "empaque": "Bolsa",
                "_id": "6415fe69eb6565c72eb08fb4"
            },
            "marca": "Pedigree",
            "animal": "Perros",
            "etapa": "Adultos",
            "empaque": "Bolsa",
            "peso": 15,
            "unidad": "Kg",
            "__v": 0,
            "subtotal": 55
        } */

/*         const producto = {
            "_id": item.id,
            "producto": {
                nombre: name,
                precio
            }
        }
 */
        dispatch({
            type: 'CARRITO',
            payload: [...carrito, item]
        })

    }

    const filtrados = () => {
        const products = productos?.map((producto: any) => producto) || []
        const filtrados = products?.filter((item: any) => item.producto.nombre.includes(search)) || []


        return (
                   filtrados.map((item: any,key:any) => {
                    return (
                        <div style={{
                            display: 'flex',
                            margin: '.3rem',
                        }}
                        key={key}
                        >
                            <div></div>
                            <div style={{
                                backgroundColor: 'rgba(46, 46, 72, 1)',
                                width: '160px',
                                height: 'fit-content',
                                padding: '.5rem',
                                borderRadius: '.6rem'
                            }}>
                                <h4 >Producto: {item.producto.nombre}</h4>
                                <h4 >Marca: {item.marca}</h4>
                                <h4 >Empaque: {item.empaque}</h4>
                                <h4 >Etapa: {item.etapa}</h4>
                                <div style={{
                                    width: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-around',
                                    marginTop: '.5rem'
                                }}>
                                    <Tooltip title={`${item.empaque} de ${item.peso} ${item.unidad}`}>
                                        <Badge badgeContent={`${item.peso}${item.unidad}`} color="primary" max={999} />
                                    </Tooltip>
                                    <Tooltip title={item.animal}>
                                        <FontAwesomeIcon icon={item.animal === "Gatos" ? faCat : faDog} />
                                    </Tooltip>
                                    <AddBoxIcon onClick={() => addProduct(item)}/>
                                </div>
                            </div>
                        </div>
                    )
                   })
        )
    }


    console.log(carrito)

    return (
        <Maquet title='Nueva Venta' venta={true}>
            <div style={{
                width: '100%',
                height: '89vh',
                backgroundColor: 'rgba(46, 46, 72, 1)',
                padding: '1rem',
                borderRadius: '.5rem'
            }}>
                {/*header*/}
                <div style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    borderRadius: '.5rem',
                    gap: '.8rem'
                }}>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'rgba(56, 56, 84, 1)',
                    gap: '.5rem',
                    padding: '1rem',
                    width: '50%',
                    borderRadius: '.5rem',
                }}>
                    <Breadcrumbs>
                        <h4>Ventas</h4>
                        <h4 color="text.primary">Nueva venta</h4>
                    </Breadcrumbs>

                    <Modals field={nombre}>
                        <div>
                            <h4>Ingresar nombre del cliente:</h4>
                            <TextField variant='standard' label='Cliente' value={nombre !== "Nombre" ? nombre : null} onChange={(e) => setNombre(e.target.value)}/>
                        </div>
                    </Modals>

                    <Modals field={email}>
                        <div>
                            <h4>Ingresar nombre del cliente:</h4>
                            <TextField variant='standard' label='Email' value={email !== "Email" ? email : null} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                    </Modals>

                    <div style={{display: 'flex', gap: '.5rem', alignItems: 'center'}}>
                        <DateRangeIcon/>
                        {fecha}
                    </div>
                </div>

                <div style={{
                    backgroundColor: 'rgba(56, 56, 84, 1)',
                    width: '50%',
                    padding: '1rem',
                    borderRadius: '.5rem',
                }}>
                    <h4 style={{textAlign: 'center'}}>Filtros <LayersClearIcon onClick={deleteFilter}/></h4>

                    <Divider/>

                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <div>
                            <div style={{display:'flex', padding: '.5rem', gap: '.5rem'}}>
                                <h4>Marcas:</h4>
                                {
                                    tipos && tipos['marcas']?.map((item: any) => {
                                        return (
                                            <Chip label={item} onClick={() => setMarca(item)} color={marca === item ? 'primary' : undefined} />
                                        )
                                    })
                                }
                            </div>
                            <div style={{display:'flex', padding: '.5rem', gap: '.5rem'}}>
                                <h4>Animales:</h4>
                                {
                                    tipos && tipos['animales']?.map((item: any) => {
                                        return (
                                            <Chip label={item} onClick={() => setAnimal(item)} color={animal === item ? 'primary' : undefined} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div>
                            <div style={{display:'flex', padding: '.5rem', gap: '.5rem'}}>
                                {
                                    tipos && tipos['empaques']?.map((item: any) => {
                                        return (
                                            <Chip label={item} onClick={() => setEmpaque(item)} color={empaque === item ? 'primary' : undefined} />
                                        )
                                    })
                                }
                                <h4>:Empaques</h4>
                            </div>
                            <div style={{display:'flex', padding: '.5rem', gap: '.5rem'}}>
                                {
                                    tipos && tipos['pesos']?.map((item: any) => {
                                        return (
                                            <Chip label={item} onClick={() => setPeso(item)} color={peso === item ? 'primary' : undefined} />
                                        )
                                    })
                                }
                                <h4>:Pesos</h4>
                            </div>
                        </div>
                    </div>

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
                        width: '50%',
                        borderRadius: '.5rem',
                        height: '90%'
                    }}>


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

                                </div>

                                <div>

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
                                //onClick={handleSubmit}
                                >Crear</Button>
                            </div>

                        </div>

                    </div>


                    {/*price*/}
                    <div style={{
                        backgroundColor: 'rgba(56, 56, 84, 1)',
                        width: '50%',
                        borderRadius: '.5rem',
                        height: '90%'
                    }}>

                        <div style={{
                            backgroundColor: 'rgba(48, 48, 48, 1)',
                            textAlign: 'center',
                            padding: '.5rem',
                            borderTopLeftRadius: '.5rem',
                            borderTopRightRadius: '.5rem'
                        }}>
                            <h3>Productos</h3>
                        </div>

                        <div style={{
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            marginTop: '1rem',
                        }}>


                        <TextField         
                        InputProps={{
                             startAdornment: (
                                <InputAdornment position='end'>
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}  
                        onChange={(e) => setter(e.target.value)}
                        size='small'
                        />

                            <div style={{
                                marginTop: '.5rem',
                                overflow: 'auto',
                                width: '100%',
                                height: '280px',
                                display: 'flex',
                                justifyContent: 'center',
                                flexWrap: 'wrap',
                            }}>
                                {filtrados()}
                            </div>

                        </div>

                    </div>


                </div>




            </div>
        </Maquet>
    )
}

export default ventas