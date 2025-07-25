export interface Task{
    task:string;
    done:boolean;
    createdAt: string;      // NEW
  completedAt?: string;
}