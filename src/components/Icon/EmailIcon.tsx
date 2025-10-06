// components/Icon/EmailIcon.tsx
import { FC, memo } from 'react';
import Icon, { IconProps } from './Icon';

const EmailIcon: FC<IconProps> = memo(props => (
  <Icon {...props}>
    {/* simple open-envelope icon (24×24 viewBox) */}
    <path
      d="M2 6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm2 0l8 5 8-5V6H4z"
      fill="currentColor"
    />
  </Icon>
));

export default EmailIcon;