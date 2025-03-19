import {db} from "../firebase";
import {collection,addDoc} from "firebase/firestore";
import React from 'react'

function Addtodo() {
    const [title,setTile] = React.useState("");
    const handleSubmit = async (e) =>{
        e.preventDefault();
        if(title !== ""){
            await addDoc(collection(db,"todos"),{
                title,
                completed: false,
            });
            setTile("");
        }
    }
  return (
    <form onSubmit={handleSubmit}>
        <div className="input_container">
            <input
            type = "text"
            placeholder="Enter todo.."
            value={title}
            onChange={(e) => setTile(e.target.value)}
            />
        </div>
        <div className="btn_container">
            <button>Add</button>
        </div>
    </form>

  )
}
export default Addtodo;