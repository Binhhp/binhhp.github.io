import { sleep } from "./images";

export const setDesFull = async (isShow: any) => {
    const full:any = document.querySelector('span[class="des des--full"]');
    if(isShow === false) full.style.opacity = '0';
    if(isShow === true) full.style.opacity = '1';
    if(isShow === 'size') {
        (document.getElementById("loader") as HTMLElement).style.background = "#FFFFFF";
        const childElement = full.querySelector('span[class="des-inner"]');
        childElement.style.color = "black";
        await sleep(400);
        if(childElement) childElement.classList.add('animation-loader')
        setTimeout(() => {
            full.style.opacity = '0'
        }, 1500)
    }
}
export const showDesElement = async (className: string) => {
    const element:NodeListOf<Element> = document.querySelectorAll(className);
    if(element?.length > 0) {
        for(let i = 0; i < 20; i++) {
            if(i === 4) setDesFull(false); 
            if(i < 5) {
                if(className.includes('top')) (element[4 - i] as any).style.opacity = "1";
                else (element[i] as any).style.opacity = "1";
            }
            if(i < 10 && i > 4) {
                if(className.includes('top')) (element[9 - i] as any).style.opacity = "0";
                else (element[i - 5] as any).style.opacity = "0";
            }
            if(i < 15 && i > 9) {
                if(className.includes('top')) (element[i - 10] as any).style.opacity = "1";
                else (element[14 - i] as any).style.opacity = "1";
            }
            if(i > 14) {
                if(className.includes('top')) (element[i - 15] as any).style.opacity = "0";
                else (element[4 - (i - 15)] as any).style.opacity = "0";
            }
            await sleep(80);
            if(i === 14) setDesFull(true);
        }
    }
}