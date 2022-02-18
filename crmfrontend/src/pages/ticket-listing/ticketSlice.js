import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tickets: [],
  isLoading: false,
  error: "",
  searchTicketList: []
};

const ticketListSlice = createSlice({
  name: "ticketList",
  initialState,
  reducers: {
    fetchTicketLoading: (state) => {
      // updated the state without mutating the data
      state.isLoading = true;
    },
    fetchTicketSuccess: (state, action) => {
      // action always has a payload
      state.tickets = action.payload;
      state.searchTicketList = action.payload;
      state.isLoading = false;
    },
    fetchTicketFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    searchTickets: (state, {payload})=>{
       state.searchTicketList = state.tickets.filter(row => {
           if(!payload) return row

           return row.subject.toLowerCase().includes(payload.toLowerCase());
       })     
    }
  },
});

const { reducer, actions } = ticketListSlice;
export const { fetchTicketFail, fetchTicketLoading, fetchTicketSuccess, searchTickets } =
  actions;

export default reducer;
