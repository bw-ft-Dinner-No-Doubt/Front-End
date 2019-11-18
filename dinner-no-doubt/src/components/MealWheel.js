import React from 'react';
import Slot from 'react-slot-machine';

import list from './my-list';

const MealWheel = props => {
  <div>
    <Slot >
      {
        list.map(value =>
          <div className = 'slot-style'>
            {value}
          </div>
        )
          // Children of `Slot` be sure to be `width` and `height` are 100%.
      }
    </Slot>
  </div>
}
  
export default MealWheel

// npm i --save react-slot-machine
// # or
// yarn add react-slot-machine
    
