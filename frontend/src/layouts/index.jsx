import React from 'react';

import { Header } from 'components/Header';
import { Service } from 'components/Service';
import { Attachment } from 'components/Attachment';
import { Cost } from 'components/Cost';
import { OffersContainer } from 'containers/OffersContainer';
// import {Promotions} from 'components/Promotions';
// import {Rates} from 'components/Rates';
// import {Additional} from 'components/Additional';

export const Index = function (props) {

  return (
    <>
      <Header />
      <Service />
      <Attachment />
      <Cost />
      <OffersContainer />
    </>
  );
}