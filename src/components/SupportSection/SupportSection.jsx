import Section from 'components/Section/Section';
import BookCallForm from 'components/BookCallForm/BookCallForm';

import style from './SupportSection.module.css';
import Button from 'components/Button/Button';

const SupportSection = () => {
  return (
    <Section
      id="support-section"
      containerClassName={style['support-section-container']}
      className="support-section"
    >
      <div className={style['book-form-container']}>
        <h2 className={style['book-form-title']}>
          Need help with booking a camper?
        </h2>
        <p className={style['book-form-sub-title']}>
          Our team is here to help you with any questions you may have
        </p>
        <BookCallForm />
      </div>
      <div className={style['support-info']}>
        <h2 className={style['section-title']}>24/7 Customer Support</h2>
        <p className={style['support-section-text']}>
          Our team is here to help you with any questions you may have
        </p>
        <ul className={style['support-contacts']}>
          <li className={style['support-contacts-item']}>
            <svg width="24" height="24">
              <use href="/goit-test-task/icons.svg#phone"></use>
            </svg>
            <a href="tel:+380123456789">+38 012 345 67 89</a>
          </li>
          <li className={style['support-contacts-item']}>
            <svg width="24" height="24">
              <use href="/goit-test-task/icons.svg#email"></use>
            </svg>
            <a href="mailto:van@mail.to">
              <span>
                van<span>@</span>mail<span>.</span>to
              </span>
            </a>
          </li>
          <li className={style['support-contacts-item']}>
            <svg width="24" height="24">
              <use href="/goit-test-task/icons.svg#chat"></use>
            </svg>
            <Button className="live-chat-button"> Live chat</Button>
          </li>
        </ul>
      </div>
    </Section>
  );
};

export default SupportSection;
