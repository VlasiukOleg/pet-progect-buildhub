import * as React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { StyledDialogTitle } from './StorageSelectedModal.styled';

import { blue, teal } from '@mui/material/colors';

const deliveryType = [
  { type: 'delivery', text: 'Доставка автотранспортом' },
  { type: 'pickup', text: 'Самовивіз зі складу' },
];

export const StorageSelectedModal = props => {
  const { onClose, selectedValue, open } = props;

  const handleListItemClick = deliveryType => {
    onClose(deliveryType);
  };

  return (
    <Dialog open={open}>
      <DialogTitle sx={{ fontSize: 16 }}>{selectedValue}</DialogTitle>
      <StyledDialogTitle sx={{ fontWeight: 700 }}>
        {' '}
        Виберіть тип доставки:
      </StyledDialogTitle>
      <List sx={{ pt: 0 }}>
        {deliveryType.map(({ type, text }) => (
          <>
            <ListItem disableGutters key={type}>
              <ListItemButton onClick={() => handleListItemClick(type)}>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: teal[50], color: teal[600] }}>
                    {type === 'delivery' ? (
                      <LocalShippingIcon />
                    ) : (
                      <PersonIcon />
                    )}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={text} sx={{ color: teal[600] }} />
              </ListItemButton>
            </ListItem>
          </>
        ))}
      </List>
    </Dialog>
  );
};

StorageSelectedModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};
