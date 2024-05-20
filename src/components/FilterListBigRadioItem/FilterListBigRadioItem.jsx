import clsx from 'clsx';
import style from './FilterListBigRadioItem.module.css';

const FilterListBigRadioItem = ({
  title,
  icon,
  name,
  value,
  checked,
  onChange,
}) => {
  return (
    <li className={style['filter-list-item']}>
      <label
        className={clsx(
          style['filter-checkbox-big'],
          checked && style['active']
        )}
      >
        <input
          type="radio"
          onChange={onChange}
          checked={checked}
          name={name}
          value={value}
        />
        <svg className={style['filter-checkbox-icon']} width="32" height="32">
          <use href={icon}></use>
        </svg>
        <span className={style['filter-checkbox-title']}>{title}</span>
      </label>
    </li>
  );
};

export default FilterListBigRadioItem;
