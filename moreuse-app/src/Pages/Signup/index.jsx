import { FormContainer,FormControl } from '../../globalStyles';
import {Page}  from '../../Components/Page';
import {Button} from '../../Components/Button/index,';
import {useForm} from 'react-hook-form'

const Signup = () => {

  const {register,handleSubmit,watch,formState:{errors}} = useForm();

  const onSubmitLogin = (data) => {
    console.log('data',data);
  }

  return (
    <Page title="Registrar">
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmitLogin)} noValidate>
        <FormControl>
          <label>Nombre</label>
          <input {...register("Name",
          {
            required:true,
            maxLength: 30
          }
          )}/>
          {errors.Name?.type === 'required' && <span>Campo Requerido</span>}
          {errors.Name?.type === 'maxLength' && <span>Minimo 30 caracteres</span>}

        </FormControl>
        <FormControl>
          <label>Correo</label>
          <input  {...register("emailAddress",
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
        <FormControl>
          <label>Dirección</label>
          <input  {...register("address",
          {
            required:true,
            maxLength: 50
          }
          )}/>
          {errors.address?.type === 'required' && <span>Campo Requerido</span>}
          {errors.address?.type === 'maxLength' && <span>Mínimo 50 caracteres</span>}
        </FormControl>
        <FormControl>
          <label>Celular</label>
          <input  {...register("phone",
          {
            required:true,
            pattern: /^(0|[1-9]\d*)(\.\d+)?$/
          }
          )}/>
          {errors.phone?.type === 'required' && <span>Campo Requerido</span>}
          {errors.phone?.type === 'pattern' && <span>Debes escribir un celular valido</span>}
        </FormControl>
        <Button type="submit" text="Registrar" />
      </form>
    </FormContainer>
  </Page>
  )
}


export default Signup;
