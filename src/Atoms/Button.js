import button from '../Atoms/button.module.css'

const Button = (props) => {

    return (
        <div className={button.mainComponent}>
            <button className={button.button}> {props.ButtonText} </button>
        </div>
    )
}

export default Button