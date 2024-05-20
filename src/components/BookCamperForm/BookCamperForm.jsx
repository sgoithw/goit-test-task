import Button from 'components/Button/Button';
import style from './BookCamperForm.module.css';
import { useState } from 'react';

const BookCamperForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [comment, setComment] = useState('');

  //no api for submit fix

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = ({ target }) => {
    const { name, value } = target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'booking_date':
        setBookingDate(value);
        break;
      case 'comment':
        setComment(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setName('');
      setEmail('');
      setBookingDate('');
      setComment('');
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className={style['modal-book-form']}>
        <p className={style['order-form-success']}>
          Your request has been sent. We will contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={style['modal-book-form']}>
      <fieldset>
        <input
          className={style['form-input']}
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          required
          onChange={handleChange}
        />
        <input
          className={style['form-input']}
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
          required
        />
        <input
          className={style['form-input']}
          type="date"
          id="booking_date"
          name="booking_date"
          placeholder="Booking date"
          value={bookingDate}
          onChange={handleChange}
          required
        />
        <textarea
          className={style['form-input']}
          id="comment"
          name="comment"
          placeholder="Comment"
          value={comment}
          onChange={handleChange}
          rows="4"
        ></textarea>
      </fieldset>
      <Button type="submit" className={style['order-form-submit']}>
        Send
      </Button>
    </form>
  );
};

export default BookCamperForm;
