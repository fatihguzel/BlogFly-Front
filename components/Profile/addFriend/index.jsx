import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getPendingRequests,
  sendFriendAction,
} from "../../../features/Relations/asyncActions";

const AddFriend = () => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const [requestedUser, setRequestedUsername] = useState({
    requestedUsername: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const changeHandler = (e) => {
    setRequestedUsername({
      ...requestedUser,
      [e.target.name]: e.target.value,
    });
  };

  const sendFriendHandler = async (e) => {
    console.log(requestedUser);
    await setOpen(false);
    await dispatch(sendFriendAction(requestedUser.requestedUsername));
    await dispatch(getPendingRequests());
  };

  return (
    <div>
      <Button
        variant="dark"
        onClick={handleClickOpen}
        className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"
      >
        <p className="text-sm capitalize">Arkadaş Ekle</p>
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Arkadaş Ekle</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Arkadaş Ekleme İstediğiniz Kullanıcının Adını Giriniz
          </DialogContentText>
          <TextField
            onChange={changeHandler}
            name="requestedUsername"
            value={requestedUser.requestedUsername}
            autoFocus
            margin="dense"
            id="requestedUsername"
            label="Username"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={sendFriendHandler}>Send</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddFriend;
