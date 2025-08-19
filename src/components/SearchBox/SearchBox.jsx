import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter); // Redux store’dan geliyor

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.searchBox}>
      <h3 className={css.searchTitle}>Find contacts by name</h3>
      <input
        type="text"
        value={filter}
        onChange={handleChange}
        placeholder="Search contacts"
      />
    </div>
  );
};

export default SearchBox;
