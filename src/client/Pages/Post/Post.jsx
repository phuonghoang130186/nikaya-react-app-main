import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import DOMPurify from 'dompurify'
import { useReading } from "~/contexts/SettingReading"
const Post = () => {
    // Constants
    const categoryShowTitle = ['tang-chi-bo-kinh', 'tom-tat-dinh-nui-tuyet']
    // Hook
    const navigate = useNavigate()
    const { fontSize } = useReading()
    const { category, post } = useParams()
    // Content of post
    const [content, setContent] = useState(null)
    const [title, setTitle] = useState(null)
    // Check Is to do some thing 
    const [isShowTitle, setIsShowTitle] = useState(false)
    // Is Loading
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        loadData()
    }, [category, post])
    const loadData = async () => {
        try {
            // Get data of post
            const data = await import(`~/data/${category}.json`)
            const arrContent = data.default
            const foundItem = arrContent.find(item => item.url === `${category}/${post}`)
            if (!foundItem) navigate("/notfound")

            // Clean HTML
            const clean = DOMPurify.sanitize(foundItem.content)
            setContent(clean)
            setTitle(foundItem.title)
            const haveTitle = categoryShowTitle.some(item => item === category)
            if (haveTitle) setIsShowTitle(true)
        } catch (err) {
            navigate("/notfound")
        } finally {
            setLoading(false)
        }
    }
    if (loading) return <p>Đang tải dữ liệu...</p>
    if (content) return (
        <div className="max-w-full flex flex-col items-center justify-center">
            {isShowTitle && title &&
                <div className="pt-10">
                    <h2 className="text-center" >{title}</h2>
                </div>
            }
            <div style={{ fontSize: `${fontSize}px`, lineHeight: '1.8rem' }} className="max-w-full min-h-screen flex flex-col p-6 text-justify" dangerouslySetInnerHTML={{ __html: content }} />
        </div >
    )
}

export default Post
