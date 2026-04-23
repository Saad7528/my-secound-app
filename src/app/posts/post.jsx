import React, { use } from 'react';

const Post = ({postPromise}) => {
    const post = use(postPromise);
    console.log(post);
    return (
        <div>
            <h1 className='text-4xl font-bold'>Total Posts: {post.length}</h1>
            {
                post.map(p => <div key={p.id}>
                    <h1> {p.title}</h1>
                </div>)
            }
        </div>
    );
};

export default Post;