import { createBrowserRouter } from "react-router-dom";
import Home from "../../Page/Home/Home";
import Game from "../../Page/Game/Game";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,

    },
    {
        path: '/game',
        element: <Game></Game>
    }

])
export default router;
