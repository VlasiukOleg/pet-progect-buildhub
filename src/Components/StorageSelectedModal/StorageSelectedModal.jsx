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

import { blue } from '@mui/material/colors';

const deliveryType = [
  { type: 'delivery', text: 'Доставка автотранспортом' },
  { type: 'pickup', text: 'Самовивіз зі складу' },
];

export const StorageSelectedModal = props => {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose('');
  };

  const handleListItemClick = value => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>{selectedValue}</DialogTitle>
      <DialogTitle> Виберіть тип доставки</DialogTitle>
      <List sx={{ pt: 0 }}>
        {deliveryType.map(({ type, text }) => (
          <>
            <ListItem disableGutters key={type}>
              <ListItemButton onClick={() => handleListItemClick(type)}>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={text} />
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
