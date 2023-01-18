export const isValidemail  =(emailCapture) => {
    const emailRegixExpression = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i ;
    if(emailRegixExpression.test(emailCapture)){
        console.log('Email is Valid')
        return true
    }else{
        console.log('Email is invalid')
        return false
    }
}

export const isValidPassword =(passwordCapture) => {
    const passwordRegixExpression = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,20}$/
        if(passwordRegixExpression.test(passwordCapture)){
            console.log('Password is valid')
            return true
        } else {
            console.log('password is Invalid')
           return false
        }
}