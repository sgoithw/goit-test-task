import clsx from 'clsx';
import style from './FilterListBigCheckboxItem.module.css';
import { useState } from 'react';

const FilterListBigCheckboxItem = ({
  icon,
  name,
  value,
  title,
  onChange = () => {},
}) => {
  const [active, setActive] = useState(false);
  const handleCheckboxChange = e => {
    setActive(e.target.checked);
    onChange(name, value, e.target.checked);
  };
  return (
    <li className={style['filter-list-item']}>
      <label
        className={clsx(
          style['filter-checkbox-big'],
          active && style['active']
        )}
      >
        <input
          onChange={handleCheckboxChange}
          type="checkbox"
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

export default FilterListBigCheckboxItem;
