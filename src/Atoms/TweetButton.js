import tweetbutton from '../Atoms/tweetbutton.module.css'

const TweetButton = (props) => {

    return (
        <div className={tweetbutton.mainComponent}>
            <button className={tweetbutton.tweetButton} >{props.Name} </button>
        </div>
    )
}

export default TweetButton