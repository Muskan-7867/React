import { createContext, useState } from "react";
export const savanContext = createContext()
export const Context = ({children}) => {

    const[search, setSearch] = useState("");

  return (
<>
<savanContext.Provider  value={{ search, setSearch }} >
{children}
</savanContext.Provider>
</>
  )
}

//context di help to data child to child / parent to child / child to parent har direction vich data bhej skde
//props nal bs parent to child hunda