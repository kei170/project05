import Blue01 from './assets/blue_1.png';
import Blue02 from './assets/blue_2.png';
import Blue03 from './assets/blue_3.png';
import Blue04 from './assets/blue_4.png';
import Blue05 from './assets/blue_5.png';
import Blue06 from './assets/blue_6.png';
import Blue07 from './assets/blue_7.png';
import Blue08 from './assets/blue_8.png';
import Blue09 from './assets/blue_9.png';

import Red01 from './assets/red_1.png';
import Red02 from './assets/red_2.png';
import Red03 from './assets/red_3.png';
import Red04 from './assets/red_4.png';
import Red05 from './assets/red_5.png';
import Red06 from './assets/red_6.png';
import Red07 from './assets/red_7.png';
import Red08 from './assets/red_8.png';
import Red09 from './assets/red_9.png';

import './Dics.css';

const diceImg = {
    blue:[Blue01,Blue02,Blue03,Blue04,Blue05,Blue06,Blue07,Blue08,Blue09],
    red:[Red01,Red02,Red03,Red04,Red05,Red06,Red07,Red08,Red09]
}

function Dics({color,num=1}){
    const src=diceImg[color][num-1];
    const alt=`${color}${num}`;
    return (
        <img src={src} alt={alt} />
    )
}

export default Dics;

