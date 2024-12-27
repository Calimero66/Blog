import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
// import { PenLine, ImageIcon, Tag, X } from 'lucide-react'
import { Tag, X } from 'lucide-react'

const WritePage = () => {
    const [image, setImage] = useState(null)

    const onSubmit = (data) => {
        // Here you would typically send the post data to your backend
        console.log('Submitting post:', { ...data, image })
    }

    const handleImageUpload = (e) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setImage(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }



    const removeTag = (tagToRemove) => {
        setValue('tags', tags.filter(tag => tag !== tagToRemove))
    }

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-serif mb-6">Write a Post</h1>
            <form className="space-y-6">
                <div>
                    <Label htmlFor="title">Title</Label>
                    <Input
                        id="title"
                        className="text-2xl font-semibold"
                    />
                </div>

                <div>
                    <Label htmlFor="image">Cover Image</Label>
                    <div className="mt-2">
                        <Input
                            id="image"
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                        />
                    </div>
                    {image && (
                        <div className="mt-4">
                            <Image src={image} alt="Cover" width={300} height={200} className="rounded-md" />
                        </div>
                    )}
                </div>

                <div>
                    <Label htmlFor="content">Content</Label>
                    <Textarea
                        id="content"
                        rows={12}
                    />
                </div>

                <div>
                    <Label htmlFor="tags">Tags</Label>
                    <div className="flex items-center mt-2">

                        <Input
                            id="tags"
                            placeholder="Add a tag"
                            onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault()
                                    addTag(e.target.value)
                                    e.target.value = ''
                                }
                            }}
                        />
                        <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            className="ml-2"
                            onClick={() => {
                                const input = document.getElementById('tags')
                                addTag(input.value)
                                input.value = ''
                            }}
                        >
                            <Tag className="h-4 w-4" />
                        </Button>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {/* {tags.map((tag, index) => (
                            <div key={index} className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md flex items-center">
                                {tag}
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="icon"
                                    className="h-4 w-4 ml-1"
                                    onClick={() => removeTag(tag)}
                                >
                                    <X className="h-3 w-3" />
                                </Button>
                            </div>
                        ))} */}
                    </div>
                </div>

                <div className="flex justify-end">
                    <Button type="submit">Publish Post</Button>
                </div>
            </form>
        </div>
    )
}

export default WritePage