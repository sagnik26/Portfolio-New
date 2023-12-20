import useWindowSize from "@/global/useWindowSIze";

const useStyles = () => {
    const isMobile = useWindowSize("mobile");

    return {
        main: `flex flex-row justify-evenly items-center ${isMobile ? 'w-[290px]' : 'w-[300px]'} bg-gray-100 shadow-lg h-[45px] rounded-[40px] m-2 sticky top-0`,
        menuItemStyle: 'text-sm font-semibold hover:bg-green-100 hover:rounded-full p-2',
        activeItem: 'bg-green-400 hover:bg-green-400 rounded-full text-white'
    }
}

export default useStyles;
