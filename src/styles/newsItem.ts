export const newsItemStyles = {
  wrapper: 'bg-white w-full rounded-[8px] p-[20px] shadow-sm mb-[20px]',
  titleImgContainer:
    'flex relative gap-[15px] items-center mb-[20px] max-[576px]:flex-col max-[576px]:items-start max-[576px]:mb-[15px] ',
  title:
    'text-blueOpacity text-classic leading-classic font-semibold grow break-words max-[576px]:text-m ',
  titleMobile:
    'hidden text-blueOpacity max-[576px]:block text-m leading-m font-semibold grow break-words mb-[10px]',
  data: 'font-medium text-sm leading-sm self-start text-gray',
  text: 'mb-[20px] text-m leading-m font-medium break-words',
  img: 'w-full object-center max-h-[400px] object-contain drop-shadow-[0_1px_1px_rgba(0,0,0,1)]',
  adminBtns:
    'flex items-center gap-[10px] max-w-[60px] w-full max-[576px]:absolute max-[576px]:top-[10px] max-[576px]:right-[0px]',
  sendEditDataBtn:
    'bg-blue-600 text-white font-medium text-m leading-m max-w-[200px] w-full flex justify-center p-[5px] rounded-[6px] max-[576px]:max-w-full hover:shadow-md',
};
