import React from 'react'

const SignUp = () => {
  return (
    <>
     <div class="container1 sign-up-mode2">
        <div class="signin-signup">
     <form action="" class="sign-up-form">
                <h2 class="title">Sign up</h2>
                <div class="input-field1">
                    <i class="fas fa-user"></i>
                    <input type="text" placeholder="Username"/>
                </div>
                <div class="input-field1">
                    <i class="fas fa-envelope"></i>
                    <input type="text" placeholder="Email"/>
                </div>
                <div class="input-field1">
                    <i class="fas fa-lock"></i>
                    <input type="password" placeholder="Password"/>
                </div>
                <input type="submit" value="Sign up" class="btn1"/>
                <p class="social-text">Or Sign in with social platform</p>
                <div class="social-media">
                    <a href="/" class="social-icon">
                        <i class="fab fa-facebook"></i>
                    </a>
                    <a href="/" class="social-icon">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="/" class="social-icon">
                        <i class="fab fa-google"></i>
                    </a>
                    <a href="/" class="social-icon">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                </div>
                <p class="account-text">Already have an account? <a href="/" id="sign-in-btn2">Sign in</a></p>
            </form>
            </div>
            </div>
    </>
  )
}

export default SignUp