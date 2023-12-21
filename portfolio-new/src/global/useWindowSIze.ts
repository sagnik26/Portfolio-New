"use client";

const screenSize: any = {
    tablet: 768,
    mobile: 640,
    ipadPro: 1024,
    laptop: 1025,
    desktop: 1536,
};

export default function useWindowSize(device: string) {
    if(device) {
        return window.innerWidth <= screenSize[device]
    }
    else {
        console.log("No device is specified, please provide any of [tablet || mobile || ipadPro || laptop || desktop]");
    }
}
