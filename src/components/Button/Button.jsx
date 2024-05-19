import style from './Button.module.css';
import clsx from 'clsx';

const Button = ({ children, className, outline = false }) => {
  return (
    <button
      className={clsx({
        [style['button']]: true,
        [style['main-button']]: !outline,
        [style['outline-button']]: outline,
        [className]: className,
      })}
    >
      {children}
    </button>
  );
};

export default Button;
