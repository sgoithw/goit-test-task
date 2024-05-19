import Button from 'components/Button/Button';
import style from './BookCamperForm.module.css';

const BookCamperForm = () => {
  return (
    <form className={style['modal-book-form']}>
      <fieldset>
        <input
          className={style['form-input']}
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          required
        />
        <input
          className={style['form-input']}
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
        />
        <input
          className={style['form-input']}
          type="date"
          id="booking_date"
          name="booking_date"
          placeholder="Booking date"
          required
        />
        <textarea
          className={style['form-input']}
          id="comment"
          name="comment"
          placeholder="Comment"
          rows="4"
        ></textarea>
      </fieldset>
      <Button className={style['order-form-submit']}>Send</Button>
    </form>
  );
};

export default BookCamperForm;
