import Link from "next/link";

const CommentDetail = async ({ params }) => {
    const { commentId } = await params;

    const res = await fetch(`https://jsonplaceholder.typicode.com/comments/${commentId}`);
    const comment = await res.json();
    console.log(comment);

    return (
        <div>
            <h2>{comment.email}</h2>
            <p>{comment.name}</p>
            <p>
                <small>{comment.body}</small>
            </p>
            <Link href={'/users/comments'} className="btn">Go Back</Link>

        </div>
    );
};

export default CommentDetail;