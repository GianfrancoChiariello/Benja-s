import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {
    Menu,
    MenuItem,
    Divider,
    Tooltip,
    Badge,
} from '@mui/material'
import {
    useState
} from 'react'
import {
    useSelector
} from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCat,faDog,faBox } from '@fortawesome/free-solid-svg-icons'

const Cart = () => {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const carrito = useSelector((state: any) => state.carrito)
        
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
      };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <ShoppingBasketIcon onClick={handleClick as any}/>

            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                elevation: 0,
                sx: {
                    width: 300,
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                    },
                },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >

                <div style={{padding: '.5rem'}}>
                    <h4 style={{textAlign: 'center'}}>Seleccionados</h4>
                    <Divider/>
                </div>

                <div>

                    {
                        carrito?.length > 0 ? carrito?.map((item: any, key: any) => {
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
                                        width: '100%',
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
                                            marginTop: '.5rem',
                                            gap: '2rem',
                                            paddingLeft: '1.5rem'
                                        }}>
                                            <Tooltip title={`${item.empaque} de ${item.peso} ${item.unidad}`}>
                                                <Badge badgeContent={`${item.peso}${item.unidad}`} color="primary" max={999} />
                                            </Tooltip>
                                            <Tooltip title={item.animal}>
                                                <FontAwesomeIcon icon={item.animal === "Gatos" ? faCat : faDog} />
                                            </Tooltip>
                                        </div>
                                    </div>
                                </div>
                            )
                        }) : (
                            <h4 style={{textAlign:'center'}}>No hay ningun producto</h4>
                        )
                    }

                </div>

            </Menu>
        </div>

    )
}

export default Cart