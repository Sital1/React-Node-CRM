import {
  fetchTicketFail,
  fetchTicketLoading,
  fetchTicketSuccess,
  searchTickets,
} from "./ticketSlice";
import axios from "axios";
import { getAllTickets } from "../../api/ticketApi";

// high order function. function inside function
export const fetchAllTickets = () => async (dispatch) => {
  // dispatah isLoading first
  dispatch(fetchTicketLoading());

  // fetch the data from api
  try {
    const result = await getAllTickets();
    console.log(result);

    // dispatch the success
    dispatch(fetchTicketSuccess(result.data.result));
  } catch (error) {
    // dispatch ticket fail since it's failing
    dispatch(fetchTicketFail(error.message));
  }
};

export const filterSearchticket = (str) => (dispatch) => {
  dispatch(searchTickets(str));
};
