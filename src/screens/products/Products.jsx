import { Stack, Typography } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import ViewAgendaIcon from '@mui/icons-material/ViewAgenda';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import './products.css'
import Card from '../../components/card/Card';
import CardBtn from '../../components/cardBtn/CardBtn';
import { useNavigate } from 'react-router-dom'



const Products = () => {
    const navigation = useNavigate()
    const navigationHandler = (id) => {
        // console.log('okay')
        navigation(`/products-details/${id}`)
    }




    const [data, setData] = useState([])
    const [isloading, setIsLoading] = useState(false)
    const [cardView, setCardView] = useState(true)

    const getDataFromAPI = () => {
        axios.get("https://fakestoreapi.com/products")
            .then(response => {
                setData(response.data)
                setIsLoading(true)
            })
            .catch(error => console.log(error))

    }
    useEffect(() => {
        getDataFromAPI()
    }, [])

    const cardViewRow = () => {
        setCardView(false)
    }
    const cardViewCol = () => {
        setCardView(true)
    }

    return (
        <div >
            <Stack direction={'row'} justifyContent={'end'} margin={2}>
                <button onClick={cardViewRow} className={cardView ? 'card-view-btn-active' : 'card-view-btns'}>
                    <ViewAgendaIcon />
                </button>
                <button onClick={cardViewCol} className={cardView ? 'card-view-btns' : 'card-view-btn-active'}>
                    <ViewModuleIcon />
                </button>
            </Stack>

            <Stack className={cardView ? 'cardRow' : 'cardCol'} sx={{ p: 2 }}>

                {
                    isloading ? data.map((e, i) => {
                        return <Stack key={i} sx={cardView ?
                            {
                                maxWidth: { xs: '100%', sm: '400px', md: '350px', lg: '350px', xl: '350px' },
                                borderRadius: '8px',
                                boxShadow: '4px 4px 10px #000',
                                p: 1,

                            }
                            : {
                                width: '100%',
                                p: 2, borderRadius: '8px',
                                boxShadow: '4px 4px 10px #000',
                            }}>

                            <Card
                                image={e.image}
                                description={e.description}
                                id={e.id}
                                title={e.title}
                                category={e.category}
                                price={e.price}
                                rate={e.rating.rate}
                                count={e.rating.count}
                                cardView={cardView}
                                navigationHandler={() => navigationHandler(e.id)} />
                            <CardBtn price={e.price} cardView={cardView}
                                navigationHandler={() => navigationHandler(e.id)} />

                        </Stack>
                    }) : <Typography variant="h3" sx={{ border: '2px solid red' }}>Loading..........</Typography>
                }
            </Stack>

        </div >
    )
}

export default Products;