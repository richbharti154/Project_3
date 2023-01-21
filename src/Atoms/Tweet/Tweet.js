import tweet from '../Tweet/tweet.module.css'

const Tweet = (props) => {

    return (
        <div className={tweet.mainComponent}>
              { props.props ? <button className={tweet.Button} onClick={props.onClick} >Follow  </button> : 
               <button className={tweet.Button} onClick={props.onClick} >Following  </button> }
        </div>

    )
}
export default Tweet