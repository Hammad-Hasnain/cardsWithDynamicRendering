import { Stack } from '@mui/material'
import './cardBtn.css'

const CardBtn = ({ price }) => <div>
    <Stack direction={'row'} justifyContent={'end'} sx={{ marginTop: 2 }}>
        <button className='buy-btn' >{price}$ Buy </button>
    </Stack>
</div>

export default CardBtn;