import React, {Fragment} from 'react';
import {Helmet} from "react-helmet";

import {Header} from 'components/Header';
import {Service} from 'components/Service';
import {Attachment} from 'components/Attachment';
import {Cost} from 'components/Cost';
import {OffersContainer} from 'containers/OffersContainer';
import {Promotions} from 'components/Promotions';
import {Rates} from 'components/Rates';
import {Additional} from 'components/Additional';

const Index = function(props) {

  return (
    <Fragment>
      <Helmet>
        <title>Dom</title>
      </Helmet>
      <Header />
      <Service />
      <Attachment />
      <Cost />
      <OffersContainer />
      <Promotions />
      <Rates />
      <Additional />
    </Fragment>
  );
};

export default Index;