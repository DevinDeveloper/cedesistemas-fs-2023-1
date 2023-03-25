import React,{Fragment, useState} from 'react';
import {Button} from './Button'

export const App = () => {
    // Estructura de Datos
    //const pets = ['bruno','lucas','simba'];

    // Hooks (useState)
    const [pets,setPets] = useState(['bruno','lucas','simba'])
    const [inputPet, setInputPet] = useState("");

    // Eventos
    const onChangeInput = (event) => {
        setInputPet(event.target.value);
    }

    // Funciones 
    const onAddPet = () => {
        setPets([...pets, inputPet]);
        setInputPet("");
    }
    
    return (
        <Fragment>
            <h1>Hola React :)</h1>
            <Button name='Enviar' />
            <br></br>
            <Button name='Descargar'/>
            <br></br>
            <input value={inputPet} onChange={onChangeInput} type='text' placeholder='Ingresar Mascota'></input>
            <Button name='Agregar' onPress={onAddPet}/>
            <ul>
                {
                    pets.map(item => <li>{item}</li>)
                }
            </ul>
        </Fragment>
    )
}

export default App