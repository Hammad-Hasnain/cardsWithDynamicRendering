import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { RoutingList } from "../utils/RoutingList"


const AppRouter = () => <Router>
    <Routes>
        {
            RoutingList.map((e, i) => <Route key={i} path={e.path} element={e.element} />)
        }
    </Routes>
</Router>

export default AppRouter