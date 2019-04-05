import React from 'react';
import { render } from 'react-dom';

import Page from './components/Page/Page';

export default (mountPoint) => {
    render(
        <Page />,
        mountPoint,
    );
};
