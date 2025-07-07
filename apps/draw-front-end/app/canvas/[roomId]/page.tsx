import { useEffect,useRef } from "react";

export default function Canvas(){
    const canvasRef=useRef<HTMLCanvasElement>(null);

    useEffect(()=>{

        if(canvasRef.current){
            const canvas=canvasRef.current;
            const ctx=canvas.getContext("2d");
            
          if(!ctx){
            return;
          }
             ctx.strokeRect(0,0,canvas.width,canvas.height);

            // Add more drawing logic here logic added
        }
    },[canvasRef]);
    return<div>
        <canvas ref={canvasRef} width={500} height={500}></canvas>
    </div>
}