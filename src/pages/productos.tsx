import Maquet from '../components/Maquet'
import {
    useEffect,
    useState
} from 'react'
import {
    useSelector,
    useDispatch
} from 'react-redux'
import {
    getProductos,
    getTypes
} from '../apis/actions'

import Productos from '@/components/Productos'
import {
    FormControl,
    MenuItem,
    Select,
    InputLabel,
} from '@mui/material'



const productos = () => {

    const dispatch = useDispatch()

    const [marca,setMarca] = useState("")
    const [animal,setAnimal] = useState("")
    const [etapa,setEtapa] = useState("")
    const [empaque,setEmpaque] = useState("")
    const [peso,setPeso] = useState("")

    const productos = useSelector((state: any) => state.productos)
    const tipos = useSelector((state: any) => state.tipos)



    useEffect(() => {

        getProductos(marca,animal,etapa,empaque,peso).then((res) => {
            dispatch<any>(res)
        })

        getTypes().then((res) => {
            dispatch<any>(res)
        })
        
    },[marca,animal,etapa,empaque,peso])

    return (
        <Maquet title="Productos">

            <div style={{
                width: '100%'
            }}>

                <div style={{
                    margin: '1rem',
                    display: 'flex',
                    gap: '.5rem',
                    alignItems: 'center'
                }}>
                    <h4>Filtros</h4>

                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Marcas</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Age"
                            value={marca}
                            onChange={(e) => {
                                setMarca(e.target.value)
                            }}
                        >
                            {
                                tipos && tipos['marcas']?.map((item: any) => {
                                    return (
                                        <MenuItem value={item}>{item}</MenuItem>
                                    )
                                })
                            }
                            <MenuItem value="">Todos</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Animales</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Age"
                            value={animal}
                            onChange={(e) => {
                                setAnimal(e.target.value)
                            }}
                        >
                            {
                                tipos && tipos['animales']?.map((item: any) => {
                                    return (
                                        <MenuItem value={item}>{item}</MenuItem>
                                    )
                                })
                            }
                            <MenuItem value="">Todos</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Empaques</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Age"
                            value={empaque}
                            onChange={(e) => {
                                setEmpaque(e.target.value)
                            }}
                        >
                            {
                                tipos && tipos['empaques']?.map((item: any) => {
                                    return (
                                        <MenuItem value={item}>{item}</MenuItem>
                                    )
                                })
                            }
                            <MenuItem value="">Todos</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Pesos</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Age"
                            value={peso}
                            onChange={(e) => {
                                setPeso(e.target.value)
                            }}
                        >
                            {
                                tipos && tipos['pesos']?.map((item: any) => {
                                    return (
                                        <MenuItem value={item}>{item}</MenuItem>
                                    )
                                })
                            }
                            <MenuItem value="">Todos</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <Productos productos={productos}/>
            </div>

        </Maquet>
    )
}

export default productos