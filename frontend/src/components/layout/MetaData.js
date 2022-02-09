import React from 'react';
import {Helmet} from 'react-helmet';

const MetaData = ({title}) => {
  return <Helmet>
      <title>{`${title} - PrepLog`}</title>
  </Helmet>;
};

export default MetaData;
