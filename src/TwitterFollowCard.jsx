import { useState } from "react";

export function TwitterFollowCard({userName, children, initialIsFollowing}){
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    

    const text = isFollowing ? 'Following' : 'Follow'
    const buttonClassName = isFollowing 
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

    const handleClick = () =>{
        setIsFollowing(!isFollowing)
    }


    const imageSrc = `https://unavatar.io/twitter/${userName}`
    return (
        <article className='tw-followCard'>
          <header className='tw-followCard-header'>
            <img src={imageSrc} alt="Profile picture" className='tw-followCard-avatar'/>
            <div className='tw-followCard-info'>
              <strong className='tw-followCard-infoUserName'>{children}</strong>
              <span>@{userName}</span>
            </div>
          </header>
    
          <aside>
            <button className={buttonClassName} onClick={handleClick}>
                <span className="tw-followCard-text">{text}</span>
                <span className="tw-followCard-stopFollow">Unfollow</span>
            </button>
          </aside>
        </article>
      );

}