import Container from 'components/Container/Container';
import styles from './Section.module.css';

const Section = ({
  title,
  children,
  id,
  className,
  outOfContainer = false,
  containerClassName = '',
}) => (
  <section id={id} className={className}>
    {outOfContainer && (
      <>
        {title && <h2 className={styles['section-title']}>{title}</h2>}
        {children}
      </>
    )}
    {!outOfContainer && (
      <Container className={containerClassName}>
        {title && <h2 className={styles['section-title']}>{title}</h2>}
        {children}
      </Container>
    )}
  </section>
);

export default Section;
