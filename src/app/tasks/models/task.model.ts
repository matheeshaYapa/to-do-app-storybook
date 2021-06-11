export interface TaskModel {
  id: number;
  title: string;
  state: 'TO_DO' | 'COMPLETED';
  endDate: Date | null;
  insertedDate: Date;
}
