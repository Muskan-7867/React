import { createSlice } from "@reduxjs/toolkit"

const movieslice = createSlice({
    name:'movies',
    initialState:{
         noePlayingMovies:null
    },
reducers:{
    addNowPlayingMovies : (state,action) => {
        state.noePlayingMovies  =  action.payload
    },
},

});
export  const {addNowPlayingMovies} = movieslice.actions
export default movieslice.reducer;
