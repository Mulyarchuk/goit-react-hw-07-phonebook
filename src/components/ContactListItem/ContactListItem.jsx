
import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/operations';

export const ContactListItem =({id,name,phone}) =>{
    const dispatch = useDispatch();
    return  (
        <li key={id} className={css.contactList__item}>
            <p>{name}: {phone}</p>
        <button type="button" value={id} className={css.contactList__button} onClick = {() => dispatch(deleteContacts(id))}>Delete</button>
        </li>)
}

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  };