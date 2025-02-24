import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Edit2, Trash2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import axios from "axios";

const PostDetail = () => {
    const navigate = useNavigate();
    const { postId } = useParams();
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [check, setCheck] = useState([]);
    const [parsedTags, setParsedTags] = useState([]);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/blogs/getPost/${postId}`);
                setPost(response.data);

                if (response.data.tags) {
                    try {
                        
                        const parsed = JSON.parse(response.data.tags);
                        const tags = Array.isArray(parsed) ? parsed : JSON.parse(parsed);
                        setParsedTags(tags);
                    } catch {
                        
                        const tags = Array.isArray(response.data.tags) 
                            ? response.data.tags 
                            : [response.data.tags];
                        setParsedTags(tags);
                    }
                }
            } catch (error) {
                console.error("Error fetching post:", error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchPost();
    }, [postId]);

    useEffect(() => {
        const getUser = async () => {
            if (!post || !post.author) return; 
            try {
                const response = await axios.get(`http://localhost:8000/api/blogs/getUseById/${post.author}`, { withCredentials: true });
                setData(response.data);
            } catch (err) {
                console.error("Error fetching user:", err);
            }
        };

        getUser();
    }, [post]);

    useEffect(() => {
        const checkUser = async () => {
            
            try {
                const response = await axios.get(`http://localhost:8000/api/blogs/getUser`, { withCredentials: true });
                setCheck(response.data);
            } catch (err) {
                console.error("Error fetching user:", err);
            }
        };

        checkUser();
    }, []);
    
    console.log('this is the  id' , data._id);
    console.log('this is the auth ' , post?.author);

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:8000/api/blogs/deletePost/${postId}`, { withCredentials: true });
            navigate("/profile");
        } catch (err) {
            console.error(err);
        }
    };

    const handleEdit = () => {
        navigate(`/edit/${postId}`);
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="flex justify-center items-center min-h-screen text-gray-500">
                <p>Post not found.</p>
            </div>
        );
    }

    return (
        <article className="container max-w-3xl mx-auto py-10 px-6 md:px-0">
            {/* Back Button */}
            <button
                onClick={() => navigate(-1)}
                className="inline-flex items-center text-sm mb-6 text-gray-600 hover:text-primary"
            >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to posts
            </button>

            {/* Post Header */}
            <div className="space-y-4 mb-6">
                <div className="flex flex-wrap gap-2">
                    {parsedTags.length > 0 ? (
                        parsedTags.map((tag, index) => (
                            <Badge 
                                key={index} 
                                variant="secondary" 
                                className="text-sm px-3 py-1"
                            >
                                {tag}
                            </Badge>
                        ))
                    ) : (
                        <Badge 
                            variant="secondary" 
                            className="text-sm px-3 py-1"
                        >
                            Uncategorized
                        </Badge>
                    )}
                </div>
                <h1 className="text-4xl font-extrabold leading-tight text-gray-900">{post.title}</h1>

                <div className="flex items-center justify-between text-gray-600 text-sm">
                    <div className="flex items-center space-x-3">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>AB</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-semibold text-gray-800">{data.username || "Unknown Author"}</p>
                            <p className="text-gray-500">@{data.username || "anonymous"}</p>
                        </div>
                    </div>
                    <p>{new Date(post.date).toLocaleDateString()} · {post.readTime || "5 min read"}</p>
                </div>
            </div>

            {/* Post Image */}
            {post.image && (
                <div className="relative w-full h-72 md:h-96 rounded-lg overflow-hidden mb-6">
                    <img src={`http://localhost:8000${post.image}`} alt={post.title} className="w-full h-full object-cover" />
                </div>
            )}

            {/* Post Content */}
            <div className="prose prose-lg prose-gray max-w-none mb-6" dangerouslySetInnerHTML={{ __html: post.content }} />

            {/* Action Buttons */}
            {check?._id === post?.author && (
            <div className="flex justify-end space-x-4">
                <Button variant="outline" onClick={handleEdit} className="flex items-center">
                    <Edit2 className="mr-2 h-4 w-4" /> Edit Post
                </Button>
                <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
                    <AlertDialogTrigger asChild>
                        <Button variant="destructive" className="flex items-center">
                            <Trash2 className="mr-2 h-4 w-4" /> Delete Post
                        </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                                This action cannot be undone. This will permanently delete your post and remove the data from our servers.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={handleDelete} className="bg-red-600 text-white hover:bg-red-700">
                                Delete
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
        )}
        </article>
    );
};

export default PostDetail;