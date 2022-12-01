import React from 'react';
import ReactDOM from 'react-dom';

import SvgSprite from 'src/components/shared/svg-sprite/svg-sprite';

function WrappedSvgSprite() {
  return ReactDOM.createPortal(<SvgSprite />, document.body);
}

export default WrappedSvgSprite;
