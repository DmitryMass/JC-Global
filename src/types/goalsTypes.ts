export interface IGoalsTypes {
  _id?: string;
  month: string;
  goals: IGoals[];
  archived: boolean;
  createdAt: string;
}
export interface IGoals {
  id?: string;
  goal: string;
  complete: boolean;
}

export interface IEditGoalData {
  id: string;
  goalId: string;
  status?: boolean;
  newGoal?: string;
  role?: string;
}
