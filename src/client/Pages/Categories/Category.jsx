import { useEffect, useState } from "react"
import { NavLink, useNavigate, useParams } from "react-router-dom"
import data from "~/data/categories.json"

const Category = () => {
    const [category, setCategory] = useState(null)
    const param = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        const foundCategory = data.find((item) => item.url === param.slug)
        if (foundCategory) {
            setCategory(foundCategory)
        } else {
            navigate("/notfound")
        }
    }, [param])

    if (!category) return <p className="text-center mt-6">Loading...</p>

    return (
        <div className="min-h-screen flex flex-col items-center px-6 py-10 bg-gray-50 dark:bg-gray-900 text-black dark:text-white">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 uppercase text-center">
                {category.name}
            </h1>

            <div className="w-full max-w-4xl">
                {category.content?.some((item) => item.children?.length > 0) ? (
                    <div className="flex flex-col gap-6">
                        {category.content.map((item, index) => (
                            <div key={index} className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-4">
                                <h4 className="text-lg font-semibold text-center mb-3">{index + 1} - {item.title}</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {item.children.map((child, childIndex) => (
                                        <NavLink key={childIndex}
                                            to={child.url.startsWith("/") ? child.url : `/${child.url}`}
                                            className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg shadow hover:shadow-lg transition">
                                            <span

                                                className="text-black dark:text-white font-medium hover:text-blue-600 dark:hover:text-blue-400 transition"
                                            >
                                                {childIndex + 1} - {child.title}
                                            </span>
                                        </NavLink>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {category.content?.map((item, index) => (
                            <NavLink
                                key={index}
                                to={item.url.startsWith("/") ? item.url : `/${item.url}`}
                                className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition block"
                            >
                                <span className="text-black dark:text-white font-medium hover:text-blue-600 dark:hover:text-blue-400 transition">
                                    {index + 1} - {item.title}
                                </span>
                            </NavLink>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Category
