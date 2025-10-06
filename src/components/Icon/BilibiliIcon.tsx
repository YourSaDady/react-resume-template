// components/Icon/BilibiliIcon.tsx
import {FC, memo} from 'react';

import Icon, {IconProps} from './Icon';

const BilibiliIcon: FC<IconProps> = memo(props => (
  <Icon {...props}>
    {/* simplified bilibili "tv" + "b" silhouette (24×24 viewBox) */}
    <path
      d="M20 6H4a2 2 0 00-2 2v8a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2zM8 10h1v4H8v-4zm8 0h1v4h-1v-4zM6 10h1v4H6v-4zm12 0h1v4h-1v-4zM5 8.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zm13 0a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1z"
      fill="currentColor"
    />
  </Icon>
));

export default BilibiliIcon;