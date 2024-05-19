import clsx from 'clsx';
import style from './VanFilter.module.css';
import Button from 'components/Button/Button';

const VanFilter = () => {
  return (
    <form className={style['filter']}>
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
            className={clsx(style['filter-input'], style['filter-input'])}
            type="text"
            id="location"
            name="location"
            placeholder="Kyiv, Ukraine"
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
            <li className={style['filter-list-item']}>
              <label className={style['filter-checkbox-big']}>
                <input type="checkbox" name="equipment" value="AC" />
                <svg
                  className={style['filter-checkbox-icon']}
                  width="32"
                  height="32"
                >
                  <use href={process.env.PUBLIC_URL + '/icons.svg#wind'}></use>
                </svg>
                <span className={style['filter-checkbox-title']}>AC</span>
              </label>
            </li>
            <li className={style['filter-list-item']}>
              <label className={style['filter-checkbox-big']}>
                <input type="checkbox" name="equipment" value="Automatic" />
                <svg
                  className={style['filter-checkbox-icon']}
                  width="32"
                  height="32"
                >
                  <use
                    href={process.env.PUBLIC_URL + '/icons.svg#multiroute'}
                  ></use>
                </svg>
                <span className={style['filter-checkbox-title']}>
                  Automatic
                </span>
              </label>
            </li>
            <li className={style['filter-list-item']}>
              <label className={style['filter-checkbox-big']}>
                <input type="checkbox" name="equipment" value="Kitchen" />
                <svg
                  className={style['filter-checkbox-icon']}
                  width="32"
                  height="32"
                >
                  <use
                    href={process.env.PUBLIC_URL + '/icons.svg#fork-knife'}
                  ></use>
                </svg>
                <span className={style['filter-checkbox-title']}>Kitchen</span>
              </label>
            </li>
            <li className={style['filter-list-item']}>
              <label className={style['filter-checkbox-big']}>
                <input type="checkbox" name="equipment" value="TV" />
                <svg
                  className={style['filter-checkbox-icon']}
                  width="32"
                  height="32"
                >
                  <use href={process.env.PUBLIC_URL + '/icons.svg#tv'}></use>
                </svg>
                <span className={style['filter-checkbox-title']}>TV</span>
              </label>
            </li>
            <li className={style['filter-list-item']}>
              <label className={style['filter-checkbox-big']}>
                <input type="checkbox" name="equipment" value="Shower/WC" />
                <svg
                  className={style['filter-checkbox-icon']}
                  width="32"
                  height="32"
                >
                  <use
                    href={process.env.PUBLIC_URL + '/icons.svg#shower'}
                  ></use>
                </svg>
                <span className={style['filter-checkbox-title']}>
                  Shower/WC
                </span>
              </label>
            </li>
          </ul>
        </fieldset>
        <fieldset className={style['filter-fieldset']}>
          <legend className={style['filter-fieldset-legend small-legend']}>
            Vehicle type
          </legend>
          <hr />
          <ul className={style['filter-list']}>
            <li className={style['filter-list-item']}>
              <label className={style['filter-checkbox-big']}>
                <input type="radio" name="type" value="Van" />
                <svg
                  className={style['filter-checkbox-icon']}
                  width="32"
                  height="32"
                >
                  <use href={process.env.PUBLIC_URL + '/icons.svg#van-2'}></use>
                </svg>
                <span className={style['filter-checkbox-title']}>Van</span>
              </label>
            </li>
            <li className={style['filter-list-item']}>
              <label className={style['filter-checkbox-big']}>
                <input type="radio" name="type" value="Fully Integrated" />
                <svg
                  className={style['filter-checkbox-icon']}
                  width="32"
                  height="32"
                >
                  <use href={process.env.PUBLIC_URL + '/icons.svg#van-1'}></use>
                </svg>
                <span className={style['filter-checkbox-title']}>
                  Fully Integrated
                </span>
              </label>
            </li>
            <li className={style['filter-list-item']}>
              <label className={style['filter-checkbox-big']}>
                <input type="radio" name="type" value="Alcove" />
                <svg
                  className={style['filter-checkbox-icon']}
                  width="32"
                  height="32"
                >
                  <use href={process.env.PUBLIC_URL + '/icons.svg#van'}></use>
                </svg>
                <span className={style['filter-checkbox-title']}>Alcove</span>
              </label>
            </li>
          </ul>
        </fieldset>
        <Button className={style['form-search-button']}>Search</Button>
      </fieldset>
    </form>
  );
};

export default VanFilter;
