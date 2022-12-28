import {useState } from "react";

import {Btn, FormInputs} from './Form.styled';

export function Form({onSubmit}) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    
    const handleInputContact = (e) => {
        const { value, name } = e.currentTarget
        //console.log(e.currentTarget.name)
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                return;
         }
    };

    const handleAddContact = (e) => {
        e.preventDefault();
        onSubmit({name, number});
        reset();
    };

    const reset = () => {
        setName('');
        setNumber('');
    }
    
        return (
         
         <FormInputs onSubmit={handleAddContact}>
            <label htmlFor="">Name
                    <input
                    placeholder="Name"
                    value={name}
                    onChange={handleInputContact}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required />
            </label> 
                
            <label htmlFor="">Number
                    <input
                    placeholder="Number"
                    value={number}
                    onChange={handleInputContact}
                    type="tel"
                    name="number" />
            </label>
              
            <Btn type="submit">Add</Btn>
              
         </FormInputs>
        );
};

