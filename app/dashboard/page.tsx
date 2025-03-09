import { buttonVariants } from "@/components/ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import { prisma } from "../utils/db";
import { BlogPostCard } from "@/components/general/blogPostCard";

async function getData(userId: string) {
    await new Promise((resolve) => setTimeout(resolve,2000));
    const data = await prisma.blogPost.findMany({
        where: {
            authorId: userId
        },
        orderBy: {
            createdAt: 'desc'
        }
    })
    return data;
}

export default async function DashboardPage() {
    const {getUser} = getKindeServerSession();
    const user = await getUser();
    const userArticles = await getData(user.id);

    return (
        <div>
            <div className="flex items-center justify-center mb-4">
                <h2 className="text-xl font-medium">Your Blog Articles</h2>
                <Link className={buttonVariants()} href="/dashboard/create">
                Create Post
                </Link>
            </div>
            {userArticles ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {userArticles.map((item)=>(
                        <BlogPostCard data={item} key={item.id}/>
                    ))}
                </div>
            ) : (
                <div>
                    <h2>no data foundcreate new one here</h2>                 
                    <Link className="text-blue-200" href="/dashboard/create">
                    Create Post
                    </Link>
                </div>
            )}
        </div>
    );
}