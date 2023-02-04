import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import CommentBox from './CommentBox';
import {FaRegComment} from 'react-icons/fa'
import dialog from './dialog.module.css'

export default function DialogBox() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button className={dialog.button}  onClick={handleClickOpen}>
      <FaRegComment className={dialog.icon}  />
      </button>
      <Dialog
        open={open}
        onClose={handleClose}     
      >
                <CommentBox />
                       
      </Dialog>
    </div>
  );
}