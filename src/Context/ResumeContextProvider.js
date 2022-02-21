import React, { createContext, useState } from 'react'

export const ResumeContext = createContext({
    data: {},
    
    handleData: () => {}
})

const ResumeContextProvider = ({children}) => {
    const [data, setData] = useState(null)
    
    const handleData = (data) => {
        setData(data)
    }
    

  return (
    <ResumeContext.Provider value={{data: data, handleData: handleData}}>
        {children}
    </ResumeContext.Provider>
  )
}

export default ResumeContextProvider