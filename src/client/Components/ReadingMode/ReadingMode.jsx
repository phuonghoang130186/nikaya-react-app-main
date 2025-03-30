import { useState, useEffect, useRef } from "react"
import { useReading } from "~/contexts/SettingReading"

const ReadingMode = () => {
    const { fontSize, handleChangeFontSize } = useReading()
    const [isOpen, setIsOpen] = useState(false)
    const panelRef = useRef(null)
    const btnRef = useRef(null)
    const toggleFontSizePanel = () => {
        setIsOpen(!isOpen)
    }

    // Xử lý click bên ngoài để đóng bảng
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (panelRef.current && !panelRef.current.contains(event.target) && !btnRef?.current?.contains(event.target)) {
                setIsOpen(false)
            }
        }

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside)
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [isOpen])

    return (
        <div className="relative">
            <button ref={btnRef} onClick={toggleFontSizePanel}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                >
                    <path d="M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6ZM12 18a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM5.25 18.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12ZM9 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
                </svg>
            </button>

            {isOpen && (
                <div
                    ref={panelRef}
                    className="w-[250px] md:w-[300px] absolute -top-24 -left-12 md:-top-4 md:left-8 p-4 max-w-md mx-auto bg-white shadow-lg rounded-lg mt-2"
                >
                    <h5>Cài đặt trang đọc</h5>
                    <span className="mt-2 text-gray-700 font-medium">Cỡ chữ: {fontSize}px</span>
                    <input
                        type="range"
                        min="14"
                        max="20"
                        step={2}
                        value={fontSize}
                        onChange={handleChangeFontSize}
                        className="w-full"
                    />

                </div>
            )}
        </div>
    )
}

export default ReadingMode
