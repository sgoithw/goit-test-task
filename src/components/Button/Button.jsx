import style from './Button.module.css';
import clsx from 'clsx';

const Button = ({
  children,
  id,
  className,
  outline = false,
  type = 'button',
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx({
        [style['button']]: true,
        [style['main-button']]: !outline,
        [style['outline-button']]: outline,
        [className]: className,
      })}
      type={type}
      id={id}
    >
      {children}
    </button>
  );
};

export default Button;
