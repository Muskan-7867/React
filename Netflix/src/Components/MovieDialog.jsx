import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { setopen } from '../../utills/movieslice';
import VideoBackground from './VideoBackground';

export default function MovieDialog() {
    const dispatch = useDispatch()
 
  const {open, id} = useSelector(store => store.movies);
const handleClose = () => {
dispatch(setopen(false))
}
  

  return (
    <React.Fragment>
    
      <Dialog
        open={open}
       
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
       
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <VideoBackground movieid={id} bool={true} />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
        
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
