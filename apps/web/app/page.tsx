import { useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const [roomId,setRoomId]=useState("");
  const router=useRouter();

  return (
    <div className={styles.page}>
      <input type="text" onChange={(e)=>{
        setRoomId(e.target.value);
      }} value={roomId} placeholder="Room id" />
    
    <button onClick={()=>{
      router.push(`/room/${roomId}`)
    }}>Join Room</button>
    </div>

  );
}
