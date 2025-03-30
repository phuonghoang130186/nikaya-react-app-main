import { NavLink } from "react-router-dom"
import categories from "~/data/categories.json"

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col items-center p-6">
            <h1 className="text-gray-800 mb-6 uppercase text-center">Đại Tạng Kinh Nikaya</h1>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl w-full">
                {categories.map((category, categoryIndex) => {
                    // Kiểm tra xem có ít nhất một phần tử có `children` hay không
                    return (
                        <NavLink key={`category-${categoryIndex}`} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg hover:text-blue-600 transition cursor-pointer" to={category.url}>
                            <span className="text-center font-literata font-medium">{category.name}</span>
                        </NavLink>
                    )
                })}
            </div>
        </div>
    )
}

export default Home
