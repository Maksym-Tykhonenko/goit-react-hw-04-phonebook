import {List, ListItem, Name, Number, DelBtn} from './ContactList.styled';
//
// 
export const ContactList = ({ contact, deliteContact }) => {

    return (
        <List>
            {contact.map(({ name, number, id }) => {
                return (
                    <ListItem key={id}>
                        <Name>{name}</Name>
                        <Number>{number}</Number>
                        <DelBtn   
                            type="button" 
                            onClick={() => deliteContact(id)}
                        >DEL</DelBtn>
                    </ListItem>
                );
            })}
        </List>
    );
};
