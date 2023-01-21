import tweetbutton from '../Atoms/tweetbutton.module.css'
import TweetSection from '../Components/TweetSection/TweetSection'

const TweetButton = (props) => {

    return (
        <div className={tweetbutton.mainComponent}>
            <button onClick={props.onClick} className={tweetbutton.tweetButton} >{props.Name} </button>
        </div>
    )
}

export default TweetButton