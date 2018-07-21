import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

const Loading = () => {
  return (
    <Dimmer active>
      <Loader content='Loading' />
    </Dimmer>
  )
}

export default Loading;
