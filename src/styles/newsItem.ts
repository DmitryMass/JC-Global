export const newsItemStyles = {
  wrapper: 'bg-white w-full rounded-[8px] p-[20px] shadow-sm mb-[20px]',
  titleImgContainer:
    'flex relative gap-[15px] items-center mb-[20px] max-[576px]:mb-[15px] max-[576px]:justify-between',
  title:
    'text-classic leading-classic font-semibold grow break-words max-[576px]:hidden',
  titleMobile:
    'hidden max-[576px]:block text-m leading-m font-semibold grow break-words mb-[10px]',
  data: 'font-medium text-m leading-m self-start',
  text: 'mb-[20px] text-m leading-m font-medium break-all',
  img: 'w-full object-center max-h-[400px] object-contain drop-shadow-[0_1px_1px_rgba(0,0,0,1)]',
  adminBtns:
    'flex items-center gap-[10px] absolute top-[32px] right-0 max-[576px]:top-[25px]',
};
