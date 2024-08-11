import React from 'react';

function CommentSlider({ comments }) {
    return (
        <div className="comment-slider">
            <div className="slider-container">
                {comments.map((comment, index) => (
                    <div className="card" key={index}>
                        <p>"{comment.comment}"</p>
                        <h4>- {comment.username}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CommentSlider;
