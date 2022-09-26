import React from 'react';
import { multiply } from '../../../utilities/calculate';

const Shoes = () => {
  const first = 55;
  const second = 43;
  const result = multiply(first, second);
    return (
        <div>
            <h2>This is my Shoes Compo</h2>
            <p>result : {result}</p>
        </div>
    );
};

export default Shoes;