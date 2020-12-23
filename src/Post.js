import React from 'react'
import './Post.css'
import Avatar from '@material-ui/core/Avatar'

function Post({ imageUrl, caption }) {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar
                    className="post__avatar"
                    alt="abhishekgowda1312"
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/1200px-Manchester_United_FC_crest.svg.png" />
                <h3 className="post__avatarUsername">Abhishekgowda1312</h3>
            </div>


            {/* header -> avatar + username */}

            {/* image */}
            <img className="post__image" src={imageUrl} alt="" />

            {/* username + caption */}
            <h4 className="post__text"><strong>Abhishekgowda1312</strong>{caption}</h4>
        </div>
    )
}

export default Post
