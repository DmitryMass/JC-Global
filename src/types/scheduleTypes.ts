export interface IOptions {
  value: string;
  label: string;
}
export interface IMarkTheShiftData {
  month: string;
  date: string;
  id: string;
  dayWorked?: boolean;
  dayWorkedCount?: number;
  schedule?: string;
}

export interface IArchiveScheduleData {
  date: string;
  month: string;
  id: string;
  role?: string;
}
