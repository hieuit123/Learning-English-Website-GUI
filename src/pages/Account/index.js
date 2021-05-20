import LoginForm from './Login-Form'
import ResetPasswordForm from './Reset-Password-Form'
import SignUpForm from './Sign-Up'

export default function AccountForm() {
        return (
            <div className="account-login-lve">
                <h1 className="glow">LEV - LEARNING ENGLISH VOCABULARY</h1>
                <div id="logreg-forms">
                    <LoginForm/>
                    <ResetPasswordForm/>
                    <SignUpForm/>
                    
                    <br />
                </div>
            </div>
        )
}