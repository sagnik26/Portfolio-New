export const useProjectCardStyles = () => {
    return {
        main: 'border-2 rounded-[10px] w-[100%] flex flex-col justify-between items-center px-5 py-8 md:px-2 md:py-5 lg:px-2 lg:py-5',
        title: 'text-[24px] font-bold font-roboto mb-3 text-center',
        techStackGroup: 'flex flex-row flex-wrap gap-2 justify-evenly w-[80%] mb-3',
        techStackItem: 'text-[14px] text-blue-800 rounded-full bg-blue-100 py-1 px-2',
        description: 'text-[18px] text-gray-300 text-center mb-5',
        buttonGroup: 'flex flex-row justify-between w-[100%]',
        buttonPrimary: 'bg-[#6558d3] text-sm text-white font-semibold w-[48%] py-2 rounded-[10px]',
        buttonSecondary: 'bg-blue-100 text-sm text-black font-semibold w-[48%] py-2 rounded-[10px]'  
    }
}