import FilterListBigRadioItem from 'components/FilterListBigRadioItem/FilterListBigRadioItem';
import style from './FilterListRadioButtonsList.module.css';
import { useState } from 'react';

const FilterListRadioButtonsList = ({
  value = '',
  name,
  variants,
  onChange = () => {},
}) => {
  const [checkedValue, setCheckedValue] = useState(value);
  const handleChange = e => {
    setCheckedValue(e.target.value);
    onChange(e.target.value);
  };
  return (
    <ul className={style['filter-list']}>
      {variants.map(({ icon, value, title }, i) => (
        <FilterListBigRadioItem
          key={i}
          onChange={handleChange}
          checked={checkedValue === value}
          icon={icon}
          name={name}
          title={title}
          value={value}
        />
      ))}
    </ul>
  );
};

export default FilterListRadioButtonsList;
