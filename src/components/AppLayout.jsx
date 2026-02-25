import { Outlet , useNavigate} from "react-router-dom";
import { Footer } from "./layout/Footer"
import { Header } from "./layout/Header"

const AppLayout = () => {
const navigation = useNavigate();
console.log(navigation);

if (navigation.state === "loading") return <Loading />;

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};
export default AppLayout;