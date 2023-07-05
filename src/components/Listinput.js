import { useContext, useState } from "react";
import "../index.css";
import { BilldataContext } from "../context/Billdata";

const ListInput = () => {
const [productname, setProductName] = useState('');
const [price, setPrice] = useState('');
const [quantity, setquantity] = useState('');

const {addNewProduct} = useContext(BilldataContext);

  const submitData = (e) => {
    e.preventDefault();
    //const dataInput = { productname, price, quantity };
    addNewProduct(productname,Number(price),Number(quantity))
    //console.log(productname,price,quantity)
    setPrice('')
    setProductName('')
    setquantity('')
  };

  return (
    <form onSubmit={submitData}>
    <div className="listinput">
        <div className="datainput">
          <table>
            <tbody>
              <tr>
                <th>Product Name</th>
                <th>Price(MRP)</th>
                <th>Quantity</th>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    id="productname"
                    value={productname}
                    onChange={(e) => {
                      setProductName(e.target.value);
                    }}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    id="price"
                    value={price}
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    id="qty"
                    value={quantity}
                    onChange={(e) => {
                      setquantity(e.target.value);
                    }}
                  />
                </td>
                {/* {console.log(productname)}
                {console.log(price)}
                {console.log(quantity)} */}
              </tr>
            </tbody>
          </table>
          
        </div>
        <div className="submitter">
          <button>ADD</button>
        </div>
    </div>
    </form>
  );
};

export default ListInput;
