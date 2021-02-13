import React from 'react';
import { getPageRange } from '../util/pageUtil';
import Button from '@material-ui/core/Button';
const ButtonsList = ({ numberOfPages, pageNumber, moveTo }) => {
    let buttons = [];
    const offset = 5;
    const range = getPageRange(pageNumber, numberOfPages, offset);

    if (pageNumber > 1 && numberOfPages > offset) {
        buttons.push(<Button variant="outlined" size="small" key={'prev'} onClick={() => moveTo(pageNumber - 1)}>Prev</Button>);
    }
    range.forEach((buttonId) => buttons.push(<Button variant="outlined" size="small" key={buttonId} onClick={() => moveTo(buttonId)}>{buttonId}</Button>));
    if (numberOfPages > offset) {
        buttons.push(<Button variant="outlined" size="small" key={'end'} onClick={() => moveTo(numberOfPages)}>End</Button>);
    }

    return <div className='button-con'>
        <div className='inner-button-con'>
            {buttons}
        </div>
    </div>;
}

export default ButtonsList;