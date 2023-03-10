import {FiterInput} from './Filter.styled';


export const Filter = ({ filter, handleFilterCont }) => {

    return (
        <FiterInput
            placeholder='Filter'
            value={filter}
            onChange={handleFilterCont}
            type="filter"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required />
    );
};
