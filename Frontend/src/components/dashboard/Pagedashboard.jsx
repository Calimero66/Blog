import { Card, CardContent } from "@/components/ui/card"
import { PenLine } from 'lucide-react'

const DashboardPage =()=> {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-serif mb-8">Dashboard</h1>
            <div className="grid gap-6 items-start mx-auto">
                <Card className="w-1/5">
                    <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                            <PenLine className="w-6 h-6 text-zinc-500" />
                            <div>
                                <div className="text-4xl font-semibold">214</div>
                                <div className="text-sm text-zinc-500">Total Posts</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                
            </div>
        </div>
    )
}
export default DashboardPage;
