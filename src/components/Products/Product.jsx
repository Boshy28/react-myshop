import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItemToCart } from '../../features/user/userSlice';

import styles from '../../styles/Product.module.css';

import { ROUTES } from '../../utils/routes';

const countList = ['A1', 'B2', 'M3'];

const Product = (item) => {
  const { title, images, price, description } = item;
  const dispatch = useDispatch();

  const [currentImage, setCurrentImage] = useState();
  const [currentSize, setCurrentSize] = useState();
  const [interested, setInterested] = useState(0);

  useEffect(() => {
    if (!images.length) return;

    setCurrentImage(images[0]);

    setInterested(Math.floor(Math.random() * 20 + 1));
  }, [images]);

  const addToCart = () => {
    dispatch(addItemToCart(item));
  };

  return (
    <section className={styles.product}>
      <div className={styles.images}>
        <div className={styles.current} style={{ backgroundImage: `url(${currentImage})` }} />
        <div className={styles['images-list']}>
          {images.map((image, index) => (
            <div
              key={index}
              className={styles.image}
              style={{ backgroundImage: `url(${image})` }}
              onClick={() => setCurrentImage(image)}
            />
          ))}
        </div>
      </div>

      <div className={styles.info}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.price}>{price} $</div>
        <div className={styles.color}>
          <span>Color:</span> Green
        </div>
        <div className={styles.sizes}>
          <span>Model:</span>

          <div className={styles.list}>
            {countList.map((size) => (
              <div
                onClick={() => setCurrentSize(size)}
                className={`${styles.size} ${currentSize === size ? styles.active : ''}`}
                key={size}>
                {size}
              </div>
            ))}
          </div>
        </div>

        <p className={styles.description}>{description}</p>

        <div className={styles.actions}>
          <button className={styles.add} disabled={!currentSize} onClick={addToCart}>
            Add to cart
          </button>
          <button className={styles.favourite}>Add to favourites</button>
        </div>

        <div className={styles.bottom}>
          <div className={styles.purchase}>{interested} people are interested in this product</div>

          <Link to={ROUTES.HOME}>Return to store</Link>
        </div>
      </div>
    </section>
  );
};

export default Product;
