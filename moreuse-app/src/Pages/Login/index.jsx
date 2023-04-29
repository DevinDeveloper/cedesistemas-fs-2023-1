import {Page}  from '../../Components/Page';
import {Button} from '../../Components/Button/index,';
import { FormContainer,FormControl } from '../../globalStyles';
import { SignupContent } from './style';
import { Link } from 'react-router-dom';
import {useForm} from 'react-hook-form'


const Login = () => {

  const {register,handleSubmit,watch,formState:{errors}} = useForm();

  const onSubmitLogin = (data) => {
    console.log('data',data);
  }

  return (
    <Page title="Ingresar">
      <FormContainer>
        <form onSubmit={handleSubmit(onSubmitLogin)} noValidate>
          <FormControl>
            <label>Correo electrónico</label>
            <input {...register("emailAddress",
              {
                required:true,
                pattern:/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/
              }
            )}/>
            {errors.emailAddress?.type === 'required' && <span>Campo Requerido</span>}
            {errors.emailAddress?.type === 'pattern' && <span>Debes escribir un correo valido</span>}
          </FormControl>
          <FormControl>
            <label>Contraseña</label>
            <input  {...register("password",
            {
              required:true,
              minLength:8
            }
            )}/>
            {errors.password?.type === 'required' && <span>Campo Requerido</span>}
            {errors.password?.type === 'minLength' && <span>Mínimo 8 caracteres</span>}
          </FormControl>
          <Button type="submit" text="Ingresar" />
        </form>
      </FormContainer>

      <SignupContent>
        <p>
          ¿Aún no tienes una cuenta?
        </p>
        <Link to="/signup">Regístrarme</Link>
      </SignupContent>
    </Page>
  )
}


export default Login;
