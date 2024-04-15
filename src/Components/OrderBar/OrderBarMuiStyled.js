import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';

export const CartButton = styled(Button)({
  textTransform: 'none',
  color: 'rgba(0, 0, 0, 0.54)',
});

export const StyledBadge = styled(Badge)({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid rgb(128, 203, 196)`,
    padding: '0 4px',
  },
});
