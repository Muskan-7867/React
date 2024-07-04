import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import { savanContext } from 'path-to-your-savan-context-file'; // Import your context

export const Search = () => {
  const { search } = useContext(savanContext);

  useEffect(() => {
    console.log("from main section", search);

    const searchOperation = async () => {
      try {
        const res = await axios.get(`https://saavn.dev/api/search/songs?query=${search}`);
        console.log(res.data.data);
        const data = res.data.data;
        // Further operations with the data can be done here
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    searchOperation();
    // Further actions can be performed based on the search result
  }, [search]);

  return (
    <>
      {/* Render your component content here */}
    </>
  );
};
export default Search