import Maquet from '../components/Maquet'
import {
    TextField,
    Button,
    MenuItem,
    Select,
    Alert,
    Snackbar
} from '@mui/material'
import {
    useState,
    useEffect
} from 'react'

import {
    useDispatch,
    useSelector
} from 'react-redux'

import {
    newProducto
} from '../apis/actions'
import {
    useRouter
} from 'next/router'

const nuevoProducto = () => {


    const dispatch = useDispatch()
    const router = useRouter()
    
    const message = useSelector((state: any) => state.newproducto)
    
    const [alertt, setAlertt] = useState(false)
    const [selector, setSelector] = useState("kgs")
    const [producto, setProducto] = useState("")
    const [mascota, setMascota] = useState("Perros")
    const [empaque, setEmpaque] = useState("Bolsa")
    const [etapa, setEtapa] = useState("Adultos")
    const [peso, setPeso] = useState("")
    const [marca, setMarca] = useState("")
    const [unidad,setUnidad] = useState("")
    const [precio,setPrecio] = useState("")

    const handleSubmit = () => {

        if ( mascota && empaque && etapa && peso && marca && unidad && precio ){

            let obj

            if (selector === "kgs") {
                obj = {
                    "producto": {
                        "nombre": producto,
                        "precio_kg": parseInt(precio),
                        "total_kg":  parseInt(peso),
                        "empaque": empaque
                    },
                    "marca": marca,
                    "animal": mascota,
                    "etapa" : etapa,
                    "empaque": empaque,
                    "peso": parseInt(peso),
                    "unidad": unidad
                }
            } else {
                obj = {
                    "producto": {
                        "nombre": producto,
                        "precio_unitario": parseInt(precio),
                        "total_unitario":  parseInt(peso),
                        "empaque": empaque
                    },
                    "marca": marca,
                    "animal": mascota,
                    "etapa" : etapa,
                    "empaque": empaque,
                    "peso": parseInt(peso),
                    "unidad": unidad
                }
            }

            newProducto(obj).then((res) => {
                dispatch<any>(res).finally(() => {
                    setAlertt(true)

                    setTimeout(() => {
                        setAlertt(false)
                    }, 5000);
                })
                
            })



        } else {
            alert('Ingresa todos los campos')
        }

    }

    useEffect(() => {
        setTimeout(() => {alertt === true ? router.push('productos') : null}, 3000);
    },[alertt])


    return (
        <Maquet title='Nuevo producto'>
            <div style={{
                width: '100%',
                height: '89vh',
                backgroundColor: 'rgba(46, 46, 72, 1)',
                padding: '1rem',
                borderRadius: '.5rem'
            }}>

                <Snackbar open={alertt} autoHideDuration={6000}>
                    <Alert onClose={() => setAlertt(false)} severity={message?.message === "Producto creado con éxito" ? "success" : "error"} sx={{ width: '100%' }}>
                        {message?.message}
                    </Alert>
                </Snackbar>

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
                        <TextField id="standard-basic" label="Producto" variant="standard" value={producto} onChange={(e) => setProducto(e.target.value)}/>
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
                            <h3 onClick={() => setSelector('unitario')}
                            style={{color: selector === 'unitario' ? 'green' : 'white', cursor: 'pointer'}}
                            >Producto Unitario</h3>
                            <span>|</span>
                            <h3 onClick={() => setSelector('kgs')}
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
                                    <TextField id="outlined-basic" label="Marca" variant="outlined" value={marca} onChange={(e) => setMarca(e.target.value)} />
                                    <h4>etapa</h4>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={etapa}
                                        label="Age"
                                        onChange={(e) => setEtapa(e.target.value)}
                                        sx={{
                                            width: '100%'
                                        }}
                                    >
                                        <MenuItem value="Adultos">Adultos</MenuItem>
                                        <MenuItem value="Cachorros">Cachorros</MenuItem>
                                    </Select>
                                    <h4>peso en "peso"</h4>
                                    <TextField id="outlined-basic" label="Peso" variant="outlined" type="number" value={peso} onChange={(e) => setPeso(e.target.value as any)} />
                                </div>

                                <div>
                                    <h4>animal</h4>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={mascota}
                                        label="Age"
                                        onChange={(e) => setMascota(e.target.value)}
                                        sx={{
                                            width: '100%'
                                        }}
                                    >
                                        <MenuItem value="Perros">Perros</MenuItem>
                                        <MenuItem value="Gatos">Gatos</MenuItem>
                                    </Select>
                                    <h4>empaque</h4>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={empaque}
                                        label="Age"
                                        onChange={(e) => setEmpaque(e.target.value)}
                                        sx={{
                                            width: '100%'
                                        }}
                                    >
                                        <MenuItem value="Sobre">Sobre</MenuItem>
                                        <MenuItem value="Bolsa">Bolsa</MenuItem>
                                    </Select>
                                    <h4>unidad</h4>
                                    <TextField id="outlined-basic" label="Kg o Gr" variant="outlined" value={unidad} onChange={(e) => setUnidad(e.target.value)} />
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
                                onClick={handleSubmit}
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
                            <TextField id="outlined-basic" label="Precio" variant="outlined" type="number" value={precio} onChange={(e) => setPrecio(e.target.value as any)} />
                        </div>

                    </div>


                </div>




            </div>
        </Maquet>
    )
}

export default nuevoProducto