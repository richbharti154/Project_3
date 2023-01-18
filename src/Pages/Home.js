import SignIn from '../Components/SignIn'
import TwitterIcon from '@mui/icons-material/Twitter'
import Button from '../Atoms/Button'
import app from './app.module.css'
import {Link} from 'react-router-dom'
// import {Route , Routes} from 'react-router-dom'
// import SignUp from './Components/SignUp.js'


function App() {
  const TextGoogle = 'Sign in with Google'
  const TextApple = 'Sign in with Apple'
  const TextSubmit = 'Submit'

  return (
    
   <div className={app.mainComponent}>
   
    <div className={app.container}>

    <div className={app.Icon} >
      <p className={app.stylIcon}> <TwitterIcon /></p>
    </div>
    <div className={app.heading}>
      <h1>Sign in to Twitter</h1>
    </div>
    <div className={app.button1}>
      <Button ButtonText={TextGoogle} />
    </div>
    <div className={app.button2}>
      <Button ButtonText={TextApple} />
    </div>

    <div className={app.SigIn}>
    <SignIn />
    </div>
    <div className={app.button3}>
      <Button ButtonText={TextSubmit} />
    </div>
    <div className={app.bottom}>
      <p>Don't have an account ? <Link className={app.link} to='/signup'>Sign Up</Link></p>
    </div>
    </div>
   </div>
  );
}

export default App;
