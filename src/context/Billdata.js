import React,{ createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export const BilldataContext = createContext();

const BillDataContextProvider = (props) => {
    const [newBillData, setBillData] = useState([])
    const [totalAmount, setTotalAmount] = useState(0)

    useEffect(()=>{
        let total = 0;
        for (let i = 0; i < newBillData.length; i++) {
        const { price, quantity } = newBillData[i];
        total += Number(price) * Number(quantity);
        }
        console.log(newBillData)
        setTotalAmount(total)
    },[newBillData]);

    const addNewProduct = (productname,price,quantity) => {
        setBillData([...newBillData,{productname,price,quantity,id:uuidv4()}])
    }

    const removebillData =(id)=>{
        setBillData(newBillData.filter(newdata => newdata.id!==id))
    }
    
    return( 
        <BilldataContext.Provider value={{newBillData,addNewProduct,removebillData,totalAmount}}>
            {props.children}
        </BilldataContext.Provider>
     );
}

export default BillDataContextProvider;