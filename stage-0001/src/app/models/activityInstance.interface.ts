import { IActivity } from "./activity.interface";
import { ITasksInstance } from "./tasksInstance.interface";


export interface IActivityInstance {
    id: number;
    uuid: string;
    operationInstanceId: number;
    activityId: number;
    state: number;
    startDate: string;
    closeDate: string;
    evidences: string;
    activity: IActivity;
    tasks:ITasksInstance[];
}