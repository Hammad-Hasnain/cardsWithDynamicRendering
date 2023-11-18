import Error from "../screens/Error";
import ProductDetails from "../screens/productDetails/ProductDetails";
import Products from "../screens/products/Products";



export const RoutingList = [{
    path: '/',
    element: <Products />
},
{
    path: '/products-details/:id',
    element: <ProductDetails />
},
{
    path: '*',
    element: <Error />
},
]