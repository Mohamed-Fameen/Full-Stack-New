import { useState } from "react";
//import './Bill.css'
function BillApp(){
    const[consumedUnits, setConsumedUnits] = useState(0);
    const [totalCurrentCharges, setTotalCurrentCharges] = useState(0.0);
    const [currentCharges, setCurrentCharges] = useState(0.0);
    const[fixedCost, setFixedCost] = useState(50.0);
    const [subsidyFixedCost, setSubsidyFixedCost] = useState(0.0)
    const [newSubsidy, setNewSubsidy] = useState(250.0);
    let netAmount = 0
    function handleChange(e){
        const units = e.target.value
        setConsumedUnits(consumedUnits => e.target.value);
        console.log(consumedUnits)
        //setCurrentCharges(e.target.value)
        if (units >= 0 && units <=100) {
            setTotalCurrentCharges(0.0)
            setCurrentCharges(0.0)
        } else if (units >= 101 && units <= 200) {
            setTotalCurrentCharges(units * 3.75 + 100)
            setCurrentCharges(units * 3.75 + 100)
        } else if(units >= 201 && units <= 400){
            setTotalCurrentCharges(units * 4 + 250)
            setCurrentCharges(units * 4 + 250)
        } else if(units >= 401 && units <=600){
            setTotalCurrentCharges(units * 4.25 + 300)
            setCurrentCharges(units * 4.25 + 300)
        } else {
            setTotalCurrentCharges(units * 5 + 400)
            setCurrentCharges(units * 5 + 400)
        }
        
    }
    return (
        <div >
  <h1>Electricty Bill Estimator</h1>
            <table className="table" border="black" >
                <tbody>
        <tr>
                    <td>Consumed Units: </td>
                    <td><input type="text" id="units" value={consumedUnits} onChange= { (e) =>
                    { {handleChange(e)
                          
                    }} }/></td>
        </tr>
        <tr>
            <td>Total Current Charges Rs. </td>
                    <td id="totalcurrentcharges">{totalCurrentCharges}</td>
        </tr>
        <tr>
            <td>Current Charges Rs. </td>
                    <td id="currentcharges">{currentCharges}</td>
        </tr>
        <tr>
            <td> Fixed Cost Rs.(+) </td>
                    <td id="fixedcost">{fixedCost }</td>
        </tr>
        <tr>
            <td> Subsidy Fixed Cost Rs.(-) </td>
                    <td id="subsidyfixedcost">{ subsidyFixedCost}</td>
        </tr>
        <tr>
            <td>New Subsidy Rs.(-) </td>
                    <td id="newsubsidy">{newSubsidy }</td>
        </tr>
        <tr>
            <td>Net Amount Rs. </td>
                    <td id="Amount">{(netAmount= totalCurrentCharges + fixedCost - subsidyFixedCost - newSubsidy) > 0 ? netAmount : 0}</td>
        </tr>
        </tbody>
    </table>
        </div>
    )
}




export default BillApp;