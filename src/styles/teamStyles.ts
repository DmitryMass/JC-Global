export const teamStyles = {
  teamTitle: 'font-semibold text-l leading-l mb-[20px]',
  teamBoxWrapper: 'bg-white rounded-[6px] p-[20px] mb-[20px] shadow-sm',
  teamBoxTitle: 'mb-[20px] text-classic leading-classic font-semibold',
  //
  teamSlider: 'relative flex items-center gap-[5px]',
  teamSliderPrevBtn:
    'prev w-[35px] h-[35px] max-[576px]:w-[25px] max-[576px]:h-[25px] block',
  teamSliderNextBtn:
    'next w-[35px] h-[35px] max-[576px]:w-[25px] max-[576px]:h-[25px] block',
  //
  teamSliderItem: 'w-full min-h-[180px] flex flex-col relative ',
  teamSliderItemDetailsBtn: 'absolute top-0 right-0 w-[30px] h-[30px]',
  teamSliderItemBox:
    'mx-auto mt-[10px] h-[70px] flex justify-center items-center mb-[20px]',
  teamSliderItemImg:
    'drop-shadow-[0_0px_20px_rgba(255,98,98,1)] rounded-full w-[70px] max-h-[70px] h-full object-cover object-center',
  teamSliderItemBoxInfo: 'text-center min-h-[80px] flex-1',
  teamSliderItemBoxTitle:
    'text-white text-sm leading-sm font-medium mb-[10px] pointer-events-none',
  teamSliderItemBoxFullName:
    'text-white text-sm leading-sm font-medium pointer-events-none',
  // team members
  memberWrapper:
    'bg-white relative rounded-[6px] p-[20px] flex items-center max-[768px]:flex-col max-[768px]:w-full gap-[20px] shadow-md max-[768px]:text-center justify-center mb-[20px] max-[768px]:gap-[10px] max-[768px]:pb-[50px] ',
  memberPhoto:
    'max-w-[180px] w-full h-[200px] object-cover ml-[-60px]  rounded-[24px] shadow-md  max-[992px]:ml-[-30px] max-[768px]:mt-[-20px] max-[768px]:ml-0 max-[768px]:h-[200px]',
  memberJobTitle: 'text-darkBlue font-bold text-xl leading-xl mb-[5px]',
  memberAdditional:
    'text-classic leading-classic font-medium mb-[5px] text-darkBlue',
  fireBtn:
    'absolute top-[-10px] left-[-10px] bg-red-800 px-[5px] py-[2px] text-sm font-bold rounded-[4px] text-white hover:bg-red-600',
  // general and TeamMember Scheudle.
  gridWrapper:
    'grid grid-cols-7 max-[992px]:grid-cols-4 max-[768px]:grid-cols-3 max-[576px]:grid-cols-2 max-[400px]:grid-cols-1 gap-[5px]',
  workDayFlexWrapperGeneral:
    'flex flex-col items-center gap-[5px] min-h-[150px] px-[5px] py-[10px] rounded-[6px] bg-blue-300',
  workDayFlexWrapperMember:
    'flex  flex-col items-center gap-[5px] min-h-[80px] px-[5px] py-[5px] rounded-[6px] bg-blue-300',
  workDayFlexInfoWrapper:
    'flex  flex-col items-center gap-[5px] flex-1 px-[5px] py-[10px] rounded-[6px] bg-blue-300',
  workDayMemberBtn:
    'text-sm font-semibold text-white leading-sm p-[5px] rounded-[6px] w-full',
  workDayInput:
    'bg-white text-blue-600 text-sm font-semibold rounded-[6px] w-full px-[5px] py-[3px] outline-none',
  workDayAdminEditBtn:
    'bg-blue-600 py-[3px] px-[5px] rounded-[6px] text-white block w-full text-sm font-semibold',
  spanLoaderFixed:
    'fixed flex justify-center items-center w-full h-full inset-0 bg-darkBlue bg-opacity-40',
};
