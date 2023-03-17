console.log("Message to developer")
document.write("Let we see the output of JAVASCRIPT")
function AlertMsg()
{
    const Hi =()=>{alert("Message from Javascript Alert!")}
    return<div><button onClick={Hi}>Clickme</button></div>
}
ReactDOM.render(<AlertMsg/>,document.getElementById("myid"))