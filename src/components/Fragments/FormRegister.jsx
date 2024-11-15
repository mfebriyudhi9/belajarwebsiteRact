import InputForm from "../Elements/Input"
import Button from "../Elements/Button"

const FormRegister = () => {
    return (
        <form action="">
          <InputForm label="Fullname" type="text" placeholder="insert your name here.." nama="fullname" />
          <InputForm label="Email" type="email" placeholder="ecxample@mail.com" nama="email" />
          <InputForm label="Password" type="password" placeholder="******" nama="password" />
          <InputForm label="Confirm Password" type="password" placeholder="******" nama="confirmpassword" />
          <Button classname="bg-blue-600 w-full">Register</Button>
        </form>
    )
}

export default FormRegister