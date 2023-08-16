import React,{useState} from "react";


const Rc2 = ()=>{

    let [modal,setModal] = useState(false);
    return (
        <div>
            <button className="modal" onClick={()=>setModal(true)}>Show Modal</button>
            {
                modal && <div onClick={()=>setModal(false)} className="model-overlay">
                    <button onClick={()=>setModal(false)} className="model-cose">Close</button>
                    <p className="model-p">This is the content of this modal</p>
                </div>
            }
        </div>
    )
}

export default Rc2;
