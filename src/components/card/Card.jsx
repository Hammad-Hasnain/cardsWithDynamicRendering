import { Stack, Box, Typography } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Card = ({ image, id, title, description, rate, count, cardView, navigationHandler }) => {

    return <div>

        <Stack flexDirection={cardView ? "column" : "row"} >
            <Box >
                <img src={image} width={cardView ? '100%' : '350px'} height={cardView ? '450px' : '380px'} />
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                width: '100%',
                p: 2
            }}>

                {title.length < 25 ?
                    <Typography variant='h5'> {id}.{title}</Typography>
                    : <Typography variant='h5'>{id}.{cardView ? title.slice(0, 15) : title}{cardView && <b onClick={navigationHandler} style={{ cursor: 'pointer' }}>...</b>}  </Typography>}

                <Typography>{cardView ? description.slice(0, 90) : description}
                    {cardView && <b onClick={navigationHandler} style={{ cursor: 'pointer' }} >...</b>} </Typography>
                <Typography ><b>Rating: {rate} </b> </Typography>
                <Typography ><b>Count: {count}</b> </Typography>

            </Box>


        </Stack>

    </div >
}

export default Card