import React, {Fragment} from 'react';

import {Header} from 'components/Header';
import {Service} from 'components/Service';
import {Attachment} from 'components/Attachment';
import {Cost} from 'components/Cost';
import {Offers} from 'components/Offers';
import {Promotions} from 'components/Promotions';
import {Rates} from 'components/Rates';
import {Additional} from 'components/Additional';

export const Index = function(props) {

  return (
    <Fragment>
      <Header />
      <Service />
      <Attachment />
      <Cost />
      <Offers />
      <Promotions />
      <Rates />
      <Additional />
    </Fragment>
  );
}