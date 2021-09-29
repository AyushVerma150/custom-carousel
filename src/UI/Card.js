import { Card } from 'react-bootstrap';

import styles from './UI.module.css';

const CardComponent = ({ imageUrl }) => {
  return (
    <Card className={styles.cardStyle}>
      <Card.Img variant="top" src={imageUrl} className={styles.imgStyle} />
      <Card.Body className={styles.cardBody}>
        <Card.Title>TITLE</Card.Title>
        <Card.Text className={styles.cardFont}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
