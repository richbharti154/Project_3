import tweet from '../Tweet/tweet.module.css'

const Tweet = (props) => {

    return (
        <div className={tweet.mainComponent}>
               <button className={tweet.Button}>{props.Name}  </button> 
        </div>

    )
}
export default Tweet