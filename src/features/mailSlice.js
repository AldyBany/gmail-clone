import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    selectedMail: null,
    sendMessageIsOpen: false,
  },
  reducers: {
    selectMail: (state, action)=>{
      state.selectedMail = action.payload;
    },
    openSendMessage: (state) => {
     
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
    
  },
});

export const { openSendMessage, closeSendMessage, selectMail } = mailSlice.actions;


// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

export const selectOpenMail = (state) => state.mail.selectedMail;

export const selectSendMessageIsOpen= (state) => state.mail.sendMessageIsOpen;

export default mailSlice.reducer;
