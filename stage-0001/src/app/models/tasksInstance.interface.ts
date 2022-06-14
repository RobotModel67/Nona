import { ITasks } from "./task.interface";

export interface ITasksInstance {
       id: number;
       uuid: string;
       activityInstanceId: number;
       taskId: number;
       state: number;
       startDate: string;
       closeDate: string;
       evidences: string;
       task: ITasks
    };