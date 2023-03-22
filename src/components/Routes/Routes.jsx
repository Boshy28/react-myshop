import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../Home/Home';

import { ROUTES } from '../../utils/routes';
import SingleProduct from '../Products/SingleProduct';
import Profile from '../Profile/Profile';
import SingleCategory from '../Categories/SingleCategory';
import Cart from '../Cart/Cart';
import Favourites from '../Favourites/Favourites';
import Help from '../Help/Help';
import About from '../About/About';

const AppRoutes = () => (
  <Routes>
    <Route index element={<Home />} />
    <Route path={ROUTES.PRODUCT} element={<SingleProduct />} />
    <Route path={ROUTES.PROFILE} element={<Profile />} />
    <Route path={ROUTES.CATEGORY} element={<SingleCategory />} />
    <Route path={ROUTES.CART} element={<Cart />} />
    <Route path={ROUTES.FAVOURITES} element={<Favourites />} />
    <Route path={ROUTES.HELP} element={<Help />} />
    <Route path={ROUTES.ABOUT} element={<About />} />
  </Routes>
);

export default AppRoutes;
