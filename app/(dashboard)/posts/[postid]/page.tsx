
export default async function PostPage({
    params,
}: {
    params: Promise<{ postId: string }>
}) {
    const postId = (await params).postId
    return (
        <>
        <main className="justify-center items-start mt-20 flex text-zinc-900 w-screen h-screen">
        <h1>Post #{postId} Content</h1>
        </main>
        </>
    )
}