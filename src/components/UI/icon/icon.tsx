
import styled from '@emotion/styled';
import * as IconsMUI from '@mui/icons-material'

export type IconNames = keyof typeof IconsMUI

export interface IconProps {
  name: IconNames
  color?: string;
}

const Icon = ({ color = '#555F7C', name }: IconProps) => {
  const Component = IconsMUI[name]

  if (Component) {
    const StyledIcon = styled(Component)`
      color: ${color};
      margin: 10px;
    `;
    return <StyledIcon />
  }

  return null
}

export default Icon
