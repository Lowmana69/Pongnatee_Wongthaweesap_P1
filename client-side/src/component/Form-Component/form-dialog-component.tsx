import React from 'react';
import { Button, Dialog, DialogActions,
    DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import { DateComponent } from './date-component';
import { AmountComponent, DescriptionComponent } from './text-field-component';
import UploadButtons from '../Button-Component/upload-button-component';
import { TypeComponent } from './select-component';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <AmountComponent />
          <DateComponent />
          <DescriptionComponent />
          <TypeComponent />
          <UploadButtons />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
