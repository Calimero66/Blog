import { LayoutGrid, User, PenLine, BookOpen, Package, Settings, HelpCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="fixed left-0 top-0 h-screen w-60 bg-zinc-800 text-white p-4">
            <div className="mb-8">
                <h1 className="text-2xl font-bold">nuntium.</h1>
            </div>

            <nav className="space-y-2">
                <Link
                    to="/dashboard"
                    className="flex items-center gap-3 px-3 py-2 rounded-lg bg-zinc-700"
                >
                    <LayoutGrid className="w-5 h-5" />
                    <span>Dashboard</span>
                </Link>

                <Link
                    to="/profile"
                    className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-zinc-700"
                >
                    <User className="w-5 h-5" />
                    <span>Profile</span>
                </Link>

                <Link
                    to="/WritePost"
                    className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-zinc-700"
                >
                    <PenLine className="w-5 h-5" />
                    <span>Write a Post</span>
                </Link>

                <Link
                    to="/posts"
                    className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-zinc-700"
                >
                    <BookOpen className="w-5 h-5" />
                    <span>All Posts</span>
                </Link>
            </nav>
        </div>
    )
}

export default Sidebar;