import { useEffect } from 'react';
import { images, sleep } from './images';
import './loader.css'

export default function Loader() {

    useEffect(() => {
        if(document.getElementById("canvas")){
            const canvas = document.getElementById("canvas");
            const getContext = () => canvas.getContext('2d');

            // It's better to use async image loading.
            const loadImage = url => {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.onload = () => resolve(img);
                    img.onerror = () => reject(new Error(`load ${url} fail`));
                    img.src = url;
                });
            };

            // Here, I created a function to draw image.
            const depict = (options, index) => {

            const ctx = getContext();

                return loadImage(options).then(async img => {
                    const x = await window.innerWidth / 3;
                    await ctx.drawImage(img, x, 75, 600, 600);
                    await sleep(200)
                    if(index === images.length - 1)
                    {
                        document.getElementById("main").style.opacity = 1
                    }
                });
            };

            images.forEach(depict);
        }
    })
    return (
        <div id="sequencer">
            <canvas id="canvas" width={2000} height={1000}></canvas>
        </div>
    )
}