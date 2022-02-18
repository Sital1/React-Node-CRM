import { configureStore } from "@reduxjs/toolkit";
import ticketReducer from "./pages/ticket-listing/ticketSlice";
import loginReducer from "./components/login/LoginSlice"
import userReducer from './pages/dashboard/userSlice'

const store = configureStore({
  reducer: {
    tickets: ticketReducer,
    login: loginReducer,
    user: userReducer
  },
});


export default store;