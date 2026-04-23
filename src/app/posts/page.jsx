import React, { Suspense } from 'react';
import Post from './post';

const PostPage = () => {

    const postPromise = fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());

    return (
        <div>
            <Suspense>
                <Post postPromise={postPromise} key={postPromise.id} ></Post>
            </Suspense>
        </div>
    );
};

export default PostPage;