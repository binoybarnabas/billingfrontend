import { useContext } from "react";
import { BilldataContext } from "../context/Billdata";

const Outputtable = () => {

    const {newBillData} = useContext(BilldataContext)
    const {totalAmount} = useContext(BilldataContext)
    const {removebillData} = useContext(BilldataContext)
    // Loop through each object in the data
    
    const data = {"products":{...newBillData},totalAmount};
    const sendData= async(e)=>{
        e.preventDefault();
        try{
            const response = await fetch("/",
            {
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(data)
            });
            console.log("***data***")
            console.log(data)
            console.log("***json***")
            console.log(JSON.stringify(data))
            const result = await response.json();
            console.log(result)
        }
        catch(e)
        {
            console.log(e)
        }  
    }
    
    return ( 
            <div className="outputscreen">
                <table>
                    <tbody>
                <tr>
                    <th>Product Name</th>
                    <th>Price(MRP)</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Remove items</th>
                </tr>
                     {newBillData.map(
                      (billdata)=>(
                      <tr key={billdata.id}>
                      <td><div className="showlistitem">{billdata.productname}</div></td>
                      <td><div className="showlistitem">{billdata.price}</div></td>
                      <td><div className="showlistitem">{billdata.quantity}</div></td>
                      <td><div className="showlistitem">{billdata.price*billdata.quantity}</div></td>
                      <td><button onClick={()=>{removebillData(billdata.id)}} id="removebutton">Remove</button></td>
                      </tr>
                      )
                     )   
                    }
                    
                </tbody>
            </table>
            <div id="grandtotal">
                <h3>Grand total : { totalAmount }</h3>
            </div>
           
            <div id="print">
                <button onClick={sendData}>Print</button>
            </div>
            
        </div>
     )
}
 
export default Outputtable;