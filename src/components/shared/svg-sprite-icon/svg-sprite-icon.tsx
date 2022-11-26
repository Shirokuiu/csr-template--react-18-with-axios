import React from 'react';

import { SvgSpriteIconProps, SvgSpriteIconSize } from 'src/components/shared/svg-sprite-icon/types';
import './svg-sprite-icon.scss';

function SvgSpriteIcon({
  id,
  width = SvgSpriteIconSize.M,
  height = SvgSpriteIconSize.M,
  className = '',
}: SvgSpriteIconProps) {
  return (
    <svg width={width} height={height} className={`svg-sprite-icon ${className}`.trim()}>
      <use xlinkHref={`#${id}`} />
    </svg>
  );
}

export default SvgSpriteIcon;
