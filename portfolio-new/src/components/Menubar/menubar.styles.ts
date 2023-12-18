const useStyles = () => {
    return {
        main: 'flex flex-row justify-evenly items-center w-[380px] shadow-lg h-[40px] rounded-[40px] m-2',
        menuItemStyle: 'text-sm font-semibold hover:bg-green-100 hover:rounded-full p-2',
        activeItem: 'bg-green-400 p-2 rounded-full text-white'
    }
}

export default useStyles;
