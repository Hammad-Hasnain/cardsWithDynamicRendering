import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Stack, Box, Typography, Grid } from '@mui/material'
import CardBtn from '../../components/cardBtn/CardBtn'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './productDetails.css'

const ProductDetails = () => {
    const navigation = useNavigate()
    const navigationHandler = () => {
        navigation(`/`)
    }
    const { id } = useParams()
    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    // console.log(id)
    // console.log(isLoading)
    const getData = async (id) => {

        try {
            // console.log(id)
            const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
            // console.log(res.data)
            // console.log('res.data')
            setData(res.data)
            // console.log(data)
            setIsLoading(true)
            // data != {} && setIsLoading(true)
            // console.log(isLoading)
        }
        catch (error) {
            console.log(error)
        }

    }


    useEffect(() => {
        getData(id)
    }, [])




    return (
        <Grid container sx={{ display: 'flex', justifyContent: 'center', p: 2, backgroundColor: '#ff751a' }}>
            <Grid item xs={12} md={7} >
                <Box style={{ backgroundColor: '#ffffb3', boxShadow: '15px 15px 10px #0006', borderRadius: '8px', padding: '5px' }}>
                    <button onClick={navigationHandler} className='backToCards'><ArrowBackIcon /></button>
                    <Typography variant='h1' sx={{
                        color: '#ff4500', fontFamily: 'serif', textAlign: 'center', fontWeight: 'bold',
                        fontSize: { xs: '45px', md: '65px' },
                    }}>Product Details</Typography>
                    <hr />
                    {isLoading ? <Stack sx={{ p: 2 }}>
                        <Box className='product-detail-box'>
                            <Typography variant='h5'><b style={{ color: '#ff4500d9' }}>Category:</b> <span >{data.category}</span>  </Typography>
                            <Typography variant='h5'><b style={{ color: '#ff4500d9' }}>Title:</b>   <span>{data.title}</span>    </Typography>
                            <Typography variant='h5'><b style={{ color: '#ff4500d9' }}>Description:</b> <span>{data.description}</span></Typography>
                            <Typography variant='h5'><b style={{ color: '#ff4500d9' }}>Rate:</b> <span>{data.rating.rate}</span>     </Typography>
                            <Typography variant='h5'><b style={{ color: '#ff4500d9' }}>Count:</b> <span>{data.rating.count}</span>   </Typography>
                            <Box sx={{ backgroundColor: '#fff', width: '100%' }}>

                                <Box sx={{ width: '300px', m: 'auto', backgroundColor: '#fff' }}>
                                    <img src={data.image} width='100%' />
                                </Box>
                            </Box>
                        </Box>
                        <Box height={'50px'}>
                            <CardBtn price={data.price} />
                        </Box>
                    </Stack> :
                        // <Typography >Loading....</Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <img src="https://i.gifer.com/ZZ5H.gif" width={'35px'} alt="Loading......." />
                        </Box>

                    }
                </Box>
            </Grid>
        </Grid>)
}

export default ProductDetails