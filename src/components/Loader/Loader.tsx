import { useEffect } from 'react'
import { sleep } from './images';
import './loader.css'
import { showDesElement, setDesFull } from './useShowDes';

export default function Loader() {

    useEffect(() => {
        setTimeout(async () => {
            Promise.all([
                showDesElement('span[class="des des--top"]'), 
                showDesElement('span[class="des des--bottom"]')
            ]).then(async () => {
                await sleep(300);
                setDesFull('size');
                setTimeout(() => {
                    (document.getElementById('main') as HTMLElement).style.display = 'block';
                    (document.getElementById('loader') as HTMLElement).style.display = 'none';
                }, 1200)
            })
        }, 0)
    });

    return (
        <div id="loader" className="">
            <div className="loader-wrap">
                <div className="des-wrap">
                    <span className="des des--top">
                        <span className="des-inner des-inner--stroke">the minimum is my religion</span>
                    </span>
                    <span className="des des--top">
                        <span className="des-inner">the minimum is my religion</span>
                    </span>
                    <span className="des des--top">
                        <span className="des-inner des-inner--stroke">the minimum is my religion</span>
                    </span>
                    <span className="des des--top">
                        <span className="des-inner des-inner--stroke">the minimum is my religion</span>
                    </span>
                    <span className="des des--top">
                        <span className="des-inner des-inner--top">the minimum is my religion</span>
                    </span>
                    <span className="des des--full">
                        <span className="des-inner">the minimum is my religion</span>
                    </span>
                    <span className="des des--bottom" >
                        <span className="des-inner des-inner--bottom">the minimum is my religion</span>
                    </span>
                    <span className="des des--bottom" >
                        <span className="des-inner des-inner--stroke">the minimum is my religion</span>
                    </span>
                    <span className="des des--bottom" >
                        <span className="des-inner des-inner--stroke">the minimum is my religion</span>
                    </span>
                    <span className="des des--bottom" >
                        <span className="des-inner">the minimum is my religion</span>
                    </span>
                    <span className="des des--bottom" >
                        <span className="des-inner des-inner--stroke">the minimum is my religion</span>
                    </span>
                </div>
            </div>
        </div>
    )
}
