import { IPlans } from '@/types/employee';
import { useMemo } from 'react';

export const useGetPlans = (data: IPlans[]) => {
  const frontPlanData = useMemo(
    () =>
      data.map((item: IPlans) => (item.front?.plan ? item.front.plan : '0')),
    [data]
  );
  const frontActiveData = useMemo(
    () =>
      data.map((item: IPlans) =>
        item.front?.active ? item.front?.active : '0'
      ),
    [data]
  );
  const backActiveData = useMemo(
    () =>
      data.map((item: IPlans) => (item.back?.active ? item.back.active : '0')),
    [data]
  );
  const backPlanData = useMemo(
    () => data.map((item: IPlans) => (item.back?.plan ? item.back.plan : '0')),
    [data]
  );

  return { frontPlanData, frontActiveData, backPlanData, backActiveData };
};
