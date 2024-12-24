import React from 'react'
import { Card, CardContent } from "@/components/ui/card"

const HomeScreen = () => {
    return (
        <>
            <div className="min-h-screen bg-white">

                {/* Featured Article */}
                {/* todo: make this card small  */}
                <section className="container mx-auto px-4 py-8">
                    <Card className="grid md:grid-cols-2 overflow-hidden">
                        <div className="p-6 flex flex-col justify-center">
                            <div className="text-sm text-gray-500 mb-2">FEATURED ARTICLE</div>
                            <h1 className="text-2xl font-bold mb-4">
                                World's Most Dangerous Technology Ever Made.
                            </h1>
                            <p className="text-gray-600 text-sm mb-2">Robert Hughes • April 7, 2023 (3 min read)</p>
                            <p className="text-gray-600">
                                Praesent aliquot velit quis commodo efficitur ut consectetur atque aliquam erat volutpat. Ex mollis ex consectetur incididunt. Ut laborum enim ut sed.
                            </p>
                        </div>
                        <div className="relative h-[300px] md:h-auto">
                            <img
                                src="https://media.gettyimages.com/id/1431328060/photo/dj-table-at-night-in-pub.jpg?s=612x612&w=gi&k=20&c=7ClFCb78f5Bc-FdvJFuHnCjCr0cZKVEGEenL_eUPXfU="
                                alt="Technology equipment"
                                fill
                                className="object-cover w-full"
                            />
                        </div>
                    </Card>
                </section>

                {/* Editor's Picks */}
                <section className="container mx-auto px-4 py-8">
                    <h2 className="text-xl font-bold mb-6 pb-2 border-b">Editor's Picks</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Article 1 */}
                        <Card>
                            <CardContent className="p-4">
                                <div className="relative h-58 mb-4">
                                    <img
                                        src="https://media.gettyimages.com/id/1431328060/photo/dj-table-at-night-in-pub.jpg?s=612x612&w=gi&k=20&c=7ClFCb78f5Bc-FdvJFuHnCjCr0cZKVEGEenL_eUPXfU=" alt="Wrapped gift"
                                        fill
                                        className="object-cover h-58 w-full"
                                    />
                                </div>
                                <div className="text-sm text-gray-500 mb-2">FEATURED</div>
                                <h3 className="text-xl font-bold mb-2">
                                    Culpa sit Laboris Exercitation ea Fugiat
                                </h3>
                                <p className="text-sm text-gray-600">
                                    Leslie Pope • April 24, 2023 (5 min read)
                                </p>
                            </CardContent>
                        </Card>

                        {/* Article 2 */}
                        <Card>
                            <CardContent className="p-4">
                                <div className="relative h-58 mb-4">
                                    <img
                                        src="https://media.gettyimages.com/id/1431328060/photo/dj-table-at-night-in-pub.jpg?s=612x612&w=gi&k=20&c=7ClFCb78f5Bc-FdvJFuHnCjCr0cZKVEGEenL_eUPXfU=" alt="Wrapped gift"
                                        fill
                                        className="object-cover h-58 w-full"
                                    />
                                </div>
                                <div className="text-sm text-gray-500 mb-2">FEATURED</div>
                                <h3 className="text-xl font-bold mb-2">
                                    Culpa sit Laboris Exercitation ea Fugiat
                                </h3>
                                <p className="text-sm text-gray-600">
                                    Leslie Pope • April 24, 2023 (5 min read)
                                </p>
                            </CardContent>
                        </Card>

                        {/* Article 3 */}

                        <Card>
                            <CardContent className="p-4">
                                <div className="relative h-58 mb-4">
                                    <img
                                        src="https://media.gettyimages.com/id/1431328060/photo/dj-table-at-night-in-pub.jpg?s=612x612&w=gi&k=20&c=7ClFCb78f5Bc-FdvJFuHnCjCr0cZKVEGEenL_eUPXfU=" alt="Wrapped gift"
                                        fill
                                        className="object-cover h-58 w-full"
                                    />
                                </div>
                                <div className="text-sm text-gray-500 mb-2">FEATURED</div>
                                <h3 className="text-xl font-bold mb-2">
                                    Culpa sit Laboris Exercitation ea Fugiat
                                </h3>
                                <p className="text-sm text-gray-600">
                                    Leslie Pope • April 24, 2023 (5 min read)
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </div>

        </>
    )
}

export default HomeScreen
