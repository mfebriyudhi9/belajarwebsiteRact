import AuthLayout from "../components/Layouts/Authlayouts"
import FormLogin from "../components/Fragments/FormLogin"


const LoginPage = () => {
    return (
        <AuthLayout title="Login" type="login">
            <FormLogin/>
            

        </AuthLayout>

    )
}

export default LoginPage