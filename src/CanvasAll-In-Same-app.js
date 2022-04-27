import React, { useEffect, useRef, useState } from 'react'
import "./App.css"

function AllStuff() {

    //main states
    const canvasRef = useRef(null);
    const contextRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = window.innerHeight;
        canvas.width = window.innerWidth
        canvas.style.width = `${window.innerWidth}px`
        canvas.style.width = `${window.innerHeight}px`

        const context = canvas.getContext("2d");
        context.scale(2,2);
        context.lineCap = "round" //linestyle
        context.strokeStyle = "black" //style of the stroke
        context.lineWidth = 5;
        contextRef.current = context;
    }, [])
    
    //check the native event import
    const startDrawing = ({nativeEvent}) => {
        const {offsetX, offsetY} = nativeEvent;
        contextRef.current.beginPath()
        contextRef.current.moveTo(offsetX, offsetY)
        setIsDrawing(true)
        console.log("I am drawing");
    }

    //checks does the draw end by boolean
    const finishDrawing = () => {
        contextRef.current.closePath()
        setIsDrawing(false)
        console.log("I finished drawing!");
    }

    //makes the line, nested stuff
    const draw = ({nativeEvent}) => {
        if(!isDrawing){
            return
        }
        const {offsetX, offsetY} = nativeEvent;
        contextRef.current.lineTo(offsetX,offsetY)
        contextRef.current.stroke()
    }

    return (

        <canvas
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={draw}
        ref={canvasRef}
        />

      );
    }
    
export default AllStuff;