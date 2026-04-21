import Link from "next/link";

const CommentsPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments');
    const comments = await res.json();
    // console.log(comments)
    return (
        <div className="grid grid-cols-3 gap-3 mt-4">
            {
                comments.map(comment => <div key={comment.id} className="card bg-base-100 card-xs shadow-sm">
                    <div className="card-body">
                        <h2 className="card-title">{comment.email}</h2>
                        <p>{comment.name}</p>
                        <div className="justify-end card-actions">
                            <Link href={`/users/comments/${comment.id}`}>
                                <button className="btn btn-primary">Show Details</button>
                            </Link>
                        </div>
                    </div>
                </div>)
            }

        </div>
    );
};

export default CommentsPage;