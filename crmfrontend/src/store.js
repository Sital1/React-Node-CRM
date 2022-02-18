import { configureStore } from "@reduxjs/toolkit";
import ticketReducer from "./pages/ticket-listing/ticketSlice";
import loginReducer from "./components/login/LoginSlice"

const store = configureStore({
  reducer: {
    tickets: ticketReducer,
    login: loginReducer,
  },
});


export default store;