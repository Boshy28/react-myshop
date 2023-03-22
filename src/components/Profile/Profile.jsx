import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../features/user/userSlice';

import styles from '../../styles/Profile.module.css';

const Profile = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(({ user }) => user);
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    avatar: '',
  });

  const [currentType, setCurrentType] = useState('password');

  useEffect(() => {
    if (!currentUser) return;

    setValues(currentUser);
  }, [currentUser]);

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isNotEmpty = Object.values(values).every((val) => val);

    if (!isNotEmpty) return;

    dispatch(updateUser(values));
  };

  const handleCurrentType = () => {
    if (currentType === 'password') {
      setCurrentType('text');
    } else {
      setCurrentType('password');
    }
  };

  return (
    <section className={styles.profile}>
      {!currentUser ? (
        <span>You need to log in</span>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.group}>
            <input
              type="email"
              placeholder="Your email"
              name="email"
              value={values.email}
              autoComplete="off"
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.group}>
            <input
              type="name"
              placeholder="Your name"
              name="name"
              value={values.name}
              autoComplete="off"
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.password}>
            <input
              type={currentType}
              placeholder="Your password"
              name="password"
              value={values.password}
              autoComplete="off"
              onChange={handleChange}
              required
            />
            <div className={styles.hidepass} onClick={handleCurrentType}>
              <svg className={styles.icon}>
                <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#eye`} />
              </svg>
            </div>

            {/* <button onClick={handleCurrentType}>see</button> */}
          </div>

          <div className={styles.group}>
            <input
              type="avatar"
              placeholder="Your avatar"
              name="avatar"
              value={values.avatar}
              autoComplete="off"
              onChange={handleChange}
            />
          </div>

          <button type="submit" className={styles.submit} onClick={() => {}}>
            Update
          </button>
        </form>
      )}
    </section>
  );
};

export default Profile;
