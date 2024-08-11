import React, { useState } from 'react';

function CommentBox({ onAddComment }) {
    const [username, setUsername] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username && comment) {
            onAddComment({ username, comment });
            setUsername('');
            setComment('');
        }
    };

    return (
        <div className="comment-box">
            <h2>Leave a Comment</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Your Name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Your Comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                ></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default CommentBox;
