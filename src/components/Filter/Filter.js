import { useDispatch, useSelector } from 'react-redux';
import { getSearchStr } from 'redux/selectors';
import { changeSearchStr } from '../../redux/searchSlice';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const search = useSelector(getSearchStr);

  const handleSearchChange = e => dispatch(changeSearchStr(e.target.value));

  return (
    <div className={css.content}>
      <label className={css.title}>Find contacts by name</label>
      <input
        className={css.input}
        type="text"
        value={search}
        onChange={handleSearchChange}
      />
    </div>
  );
};
