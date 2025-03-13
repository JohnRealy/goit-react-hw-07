import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);
  // const filters = useSelector((state) => state.filters.filters.name);
  // const filteredData = contacts.filter((item) =>
  //   item.name.toLowerCase().includes(filters.toLowerCase())
  // );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <ul className={css.list}>
      {contacts.length > 0 ? (
        contacts.map((user) => (
          <li key={user.id} className={css.listItem}>
            <Contact user={user} />
          </li>
        ))
      ) : (
        <p>No contacts available</p>
      )}
    </ul>
  );
}
