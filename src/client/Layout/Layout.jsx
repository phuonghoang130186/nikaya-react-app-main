import { Outlet } from "react-router-dom"
import MainMenu from "../Components/MainMenu/MainMenu"

const Layout = () => {
    return (
        <div className='min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-950 dark:text-gray-100 mb-[40px] md:mb-0'>
            <MainMenu />
            <div className="md:flex md:justify-center md:ml-16 p-2">
                <div className="md:w-[800px] overflow-x-hidden">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Layout
