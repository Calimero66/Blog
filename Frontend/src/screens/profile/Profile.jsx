import { Globe, Instagram, Twitter } from 'lucide-react'
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
// import { Card, CardContent, CardHeader } from "@/components/ui/card"

const Profile = () => {

    const articles = [
        {
            category: "INTERIOR",
            title: "Laborum Ullamco Sunt id ut Sunt",
            date: "May 7, 2019 (6 mins read)",
            excerpt: "Proident aliqua velit qui commodo officia qui consectetur dolor ullamco aliquip elit incididunt. Ea minim ex consectetur excepteur. Ex laborum nostrud mollit sint consectetur. Lorem amet aliqua do enim. Commodo nulla dolor enim excepteur. In aliquip mollit nulla consequat velit magna.",
            image: "https://images.unsplash.com/photo-1620680779930-e74c15c8f7a0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            category: "NATURE",
            title: "Tempor deserunt Sunt Qui",
            date: "November 3, 2012",
            excerpt: "Ea qui dolor aute cupidatat ad pariatur proident. Mollit nulla tempor aute reprehenderit ut dolore mollit nisi consequat excepteur ex officia pariatur irure.",
            image: "https://images.unsplash.com/photo-1620680779930-e74c15c8f7a0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            category: "PLANTS",
            title: "Occaecat Anim eu Qui",
            date: "September 28, 2018",
            excerpt: "Qui ipsum consectetur ad incididunt et aliquip exercitation laboris nisi reprehenderit. Et excepteur commodo esse enim ea aliqua officia reprehenderit.",
            image: "https://images.unsplash.com/photo-1620680779930-e74c15c8f7a0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            category: "FOOD",
            title: "Fugiat Incididunt Voluptate Consequat",
            date: "June 13, 2012",
            excerpt: "Magna amet aliqua qui commodo quis amet consequat elit dolore consectetur.",
            image: "https://images.unsplash.com/photo-1620680779930-e74c15c8f7a0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ];
    return (
        <>
            <section className="flex flex-col items-center justify-start min-h-screen pt-6">
                <div className="text-center max-w-2xl">
                    <Avatar className="w-32 h-32 mx-auto">
                        <AvatarImage src="/placeholder.svg" alt="Arthur Black" />
                        <AvatarFallback>AB</AvatarFallback>
                    </Avatar>
                    <h1 className="mt-4 text-3xl font-bold">Arthur Black</h1>
                    <p className="text-gray-500">@arthurblack</p>
                    <p className="mt-4 text-gray-600">
                        Ipsum adipisicing culpa est nisi consequat ex amet magna culpa veniam tempor irure ea. Reprehenderit labore do tempor eiusmod in consectetur ex sunt id mollit commodo ipsum deserunt quis.
                    </p>
                    <div className="flex justify-center gap-4 mt-4">
                        <Button variant="ghost" size="icon">
                            <Globe className="h-5 w-5" />
                            <span className="sr-only">Website</span>
                        </Button>
                        <Button variant="ghost" size="icon">
                            <Instagram className="h-5 w-5" />
                            <span className="sr-only">Instagram</span>
                        </Button>
                        <Button variant="ghost" size="icon">
                            <Twitter className="h-5 w-5" />
                            <span className="sr-only">Twitter</span>
                        </Button>
                    </div>
                </div>


                <div className="container py-8">
                    <div className="grid gap-8">
                        {/* Featured Article */}
                        <Card className="grid md:grid-cols-2 gap-6 p-0 overflow-hidden">
                            <div className="relative aspect-[4/3] md:aspect-auto">
                                <img
                                    src={articles[0].image}
                                    alt={articles[0].title}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </div>
                            <CardContent className="p-6">
                                <Badge variant="secondary" className="mb-2">
                                    {articles[0].category}
                                </Badge>
                                <h2 className="text-2xl font-bold mb-2">{articles[0].title}</h2>
                                <p className="text-sm text-gray-500 mb-4">{articles[0].date}</p>
                                <p className="text-gray-600">{articles[0].excerpt}</p>
                            </CardContent>
                        </Card>

                        {/* Regular Articles */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {articles.slice(1).map((article, index) => (
                                <Card key={index} className="overflow-hidden">
                                    <div className="relative aspect-[3/2]">
                                        <img
                                            src={article.image}
                                            alt={article.title}
                                            className="absolute inset-0 w-full h-full object-cover"
                                        />
                                    </div>
                                    <CardContent className="p-6">
                                        <Badge variant="secondary" className="mb-2">
                                            {article.category}
                                        </Badge>
                                        <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                                        <p className="text-sm text-gray-500 mb-4">{article.date}</p>
                                        <p className="text-gray-600 line-clamp-3">{article.excerpt}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Profile
