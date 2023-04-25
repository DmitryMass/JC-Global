import React from 'react';
import Loader from '../Loader/Loader';
import { teamStyles } from '@/styles/teamStyles';

const FixedLoader = () => {
  return (
    <span className={teamStyles.spanLoaderFixed}>
      <Loader />
    </span>
  );
};

export default FixedLoader;
