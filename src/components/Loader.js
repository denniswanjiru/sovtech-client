import React from 'react';
import Bars from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Center from './styled/Center';

export default function Loader() {
  return (
    <Center>
      <Bars
        type="Bars"
        color="#000"
        height={40}
        width={100} />
    </Center>
  )
}
