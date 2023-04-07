export const goalsStyle = {
  // goals
  wrapper: 'flex justify-between items-center mb-[20px] gap-[5px]',
  title: 'text-l leading-l font-semibold',
  proccessWrapper:
    'flex gap-[30px] max-[576px]:flex-col max-[576px]:items-end max-[576px]:gap-0',
  spanStatus: 'text-sm font-semibold leading-sm',
  // goalsItem
  goalsItemWrapper: 'bg-white rounded-[4px] mb-[10px] shadow-sm p-[20px]',
  month: 'text-classic leading-classic font-semibold',
  // monthGoalsItem
  goalWrapper:
    'min-h-[80px] rounded-[4px] mb-[10px] flex justify-between p-[10px] grow gap-[20px] relative',
  goalText: 'text-white text-sm leading-sm font-medium',
  adminPanelWrapper:
    'flex  items-center gap-[10px]  absolute bg-deepBlue bottom-[0px] right-[0px] p-[5px] rounded-[4px]',
  adminPanelVisible:
    'visible opacity-100 translate-y-[0%] transition-all duration-200',
  adminPanelInvisible:
    'invisible opacity-0 translate-y-[-100%] transition-all duration-200',
};
