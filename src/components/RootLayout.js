import NavigationHeader from "./NavigationHeader";
import { Outlet } from "react-router-dom";

const RootLayout = (props)=>{
    return (
        <>
        <NavigationHeader onOpen={props.onOpen}/>
        <main>
            <Outlet />
        </main>
        </>
    )
}

export default RootLayout;