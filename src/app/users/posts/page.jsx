import React from 'react';

const PostsPage = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    return (
        <div>
            {
                posts.map(post => <div key={post.id} className='p-3 m-3 border border-red-300 rounded-2xl'>
                <h2 className='text-3xl'>{post.title}</h2>
                <p>{post.body}</p>
                </div>)
            }
            
        </div>
    );
};

export default PostsPage;