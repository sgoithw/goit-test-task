import clsx from 'clsx';
import style from './VanFilter.module.css';
import Button from 'components/Button/Button';
import FilterListBigCheckboxItem from 'components/FilterListBigCheckboxItem/FilterListBigCheckboxItem';
import FilterListRadioButtonsList from 'components/FilterListRadioButtonsList/FilterListRadioButtonsList';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';

const VanFilter = () => {
  const dispatch = useDispatch();
  const [location, setLocation] = useState('');
  const [details, setDetails] = useState([]);
  const [vanType, setVanType] = useState('panelTruck');
  const [transmission, setTransmission] = useState('');

  const handleChangeLocation = ({ target }) => {
    setLocation(target.value);
  };

  const handleChangeEquipment = (name, value, checked) => {
    const det = [...details];

    switch (name) {
      case 'details':
        if (checked) {
          if (!det.includes(value)) {
            det.push(value);
            setDetails(det);
          }
        } else {
          setDetails(det.filter(e => e !== value));
        }
        break;
      case 'transmission':
        setTransmission(checked ? value : '');
        break;
    }
  };

  const handleVanTypeChange = type => {
    setVanType(type);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log({
      location,
      details,
      transmission,
      vanType,
    });
    dispatch(
      setFilter({
        location,
        details,
        transmission,
        vanType,
      })
    );
  };

  return (
    <form onSubmit={handleSubmit} className={style['filter']}>
      <fieldset
        className={clsx(style['filter-fieldset'], style['location-fieldsett'])}
      >
        <label className={style['filter-label']} for="location">
          Location
        </label>
        <div className={style['filter-input-wraper']}>
          <svg className={style['filter-input-icon']} width="18" height="20">
            <use href={process.env.PUBLIC_URL + '/icons.svg#map-pin'}></use>
          </svg>
          <input
            onChange={handleChangeLocation}
            className={clsx(style['filter-input'], style['filter-input'])}
            type="text"
            id="location"
            name="location"
            placeholder="Kyiv, Ukraine"
            value={location}
          />
        </div>
      </fieldset>
      <fieldset className={style['filter-fieldset']}>
        <legend className={style['filter-legend']}>Filters</legend>
        <fieldset className={style['filter-fieldset']}>
          <legend className={style['filter-fieldset-legend']}>
            Vehicle equipment
          </legend>
          <hr />
          <ul className={style['filter-list']}>
            <FilterListBigCheckboxItem
              onChange={handleChangeEquipment}
              icon={process.env.PUBLIC_URL + '/icons.svg#wind'}
              name="details"
              value="airConditioner"
              title="AC"
            />
            <FilterListBigCheckboxItem
              onChange={handleChangeEquipment}
              icon={process.env.PUBLIC_URL + '/icons.svg#multiroute'}
              name="transmission"
              value="automatic"
              title="Automatic"
            />
            <FilterListBigCheckboxItem
              onChange={handleChangeEquipment}
              icon={process.env.PUBLIC_URL + '/icons.svg#fork-knife'}
              name="details"
              value="kitchen"
              title="Kitchen"
            />
            <FilterListBigCheckboxItem
              onChange={handleChangeEquipment}
              icon={process.env.PUBLIC_URL + '/icons.svg#tv'}
              name="details"
              value="TV"
              title="TV"
            />
            <FilterListBigCheckboxItem
              onChange={handleChangeEquipment}
              icon={process.env.PUBLIC_URL + '/icons.svg#shower'}
              name="details"
              value="shower"
              title="Shower/WC"
            />
          </ul>
        </fieldset>
        <fieldset className={style['filter-fieldset']}>
          <legend className={style['filter-fieldset-legend small-legend']}>
            Vehicle type
          </legend>
          <hr />
          <FilterListRadioButtonsList
            name="type"
            value={vanType}
            onChange={handleVanTypeChange}
            variants={[
              {
                icon: process.env.PUBLIC_URL + '/icons.svg#van-2',
                title: 'Van',
                value: 'panelTruck',
              },
              {
                icon: process.env.PUBLIC_URL + '/icons.svg#van-1',
                title: 'Fully Integrated',
                value: 'fullyIntegrated',
              },
              {
                icon: process.env.PUBLIC_URL + '/icons.svg#van',
                title: 'Alcove',
                value: 'alcove',
              },
            ]}
          />
        </fieldset>
        <Button type="submit" className={style['form-search-button']}>
          Search
        </Button>
      </fieldset>
    </form>
  );
};

export default VanFilter;
