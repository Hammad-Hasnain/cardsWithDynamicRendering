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
        catch {
            console.log(error)
        }

    }


    useEffect(() => {
        getData(id)
    }, [])




    return (
        <Grid container sx={{ display: 'flex', justifyContent: 'center', p: 2, backgroundColor: '#ff751a' }}>
            <Grid item xs={12} md={7} >
                <Box style={{ backgroundColor: '#ffffb3', boxShadow: '0px 0px 20px  1px   #1a1a1a', borderRadius: '8px', padding: '5px' }}>
                    <button onClick={navigationHandler} className='backToCards'><ArrowBackIcon /></button>
                    <Typography variant='h1' style={{ color: '#ff4500', fontFamily: 'serif', textAlign: 'center', fontWeight: 'bold' }}>Product Details</Typography>
                    <hr />
                    {isLoading ? <Stack sx={{ p: 2 }}>
                        <Box>
                            <Typography variant='h4'><b>Category:</b> {data.category}</Typography>
                            <Typography variant='h4'><b>Title:</b> {data.title}</Typography>
                            <Typography variant='h4'><b>Description:</b> {data.description}</Typography>
                            <Typography variant='h4'><b>Rate:</b> {data.rating.rate}</Typography>
                            <Typography variant='h4'><b>Count:</b> {data.rating.count}</Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
                                <img src={data.image} width='100%' />
                            </Box>
                        </Box>
                        <Box>
                            <CardBtn price={data.price} />
                        </Box>
                    </Stack> : <Typography>Loading....</Typography>}
                </Box>
            </Grid>
        </Grid>)
}

export default ProductDetails