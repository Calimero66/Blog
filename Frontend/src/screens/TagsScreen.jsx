import { useRef, useState } from "react"
import { Search } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const topics = [
    // Row 1
    "technology", "lifeandlove", "essentialism", "webdevelopment", "fashion", "lifestyle",
    // Row 2
    "architecture", "sports", "entertainment", "culinaryarts", "travel", "worldhistory", "aeronautics", "games",
    // Row 3
    "minimalism", "finearts", "graphicdesign", "filmmaking", "bitcoin", "computers", "machinelearning"
]

const TagsScreen = () => {
    const [search, setSearch] = useState("")
    const inputRef = useRef(null)

    const filteredTopics = topics.filter((topic) =>
        topic.toLowerCase().includes(search.toLowerCase())
    )

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            console.log('Search submitted:', search)
        }
    }

    return (
        <div className="w-full max-w-4xl mx-auto p-4 space-y-8 pt-60">
            <div className="relative">
                <Input
                    type="text"
                    placeholder="Find the topics you care about..."
                    className="w-full pl-4 pr-10 py-2 text-base rounded-full border-2 border-gray-200 focus:border-gray-400 focus:outline-none"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>

            <div className="flex flex-wrap gap-2">
                {filteredTopics.map((topic) => (
                    <Button
                        key={topic}
                        variant="outline"
                        className="rounded-full hover:bg-gray-100 transition-colors"
                        onClick={() => {
                            setSearch(topic)
                            inputRef.current?.focus()
                        }}
                    >
                        #{topic}
                    </Button>
                ))}
            </div>
        </div>
    )
}

export default TagsScreen
