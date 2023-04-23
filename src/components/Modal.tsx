import {
    Modal,
    Box
} from '@mui/material'
import {
    useState
} from 'react'
import EditIcon from '@mui/icons-material/Edit';


const Modals = ({seter,field,children} : any) => {

    const [open,setOpen] = useState(false)

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div>
            <div style={{display: 'flex',gap:'.5rem'}}>
                <h4>{field}</h4><EditIcon onClick={() => setOpen(true)}/>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={{
                      position: 'absolute' as 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      bgcolor: 'background.paper',
                      color:'black',
                      border: '2px solid #000',
                      boxShadow: 24,
                      p: 4,
                      borderRadius: '.8rem'
                }}>
                    {children}
                </Box>
            </Modal>
        </div>
    )
}

export default Modals