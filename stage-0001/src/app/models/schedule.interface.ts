import { IProcessInstance } from "./processInstance.interface";

export interface ISchedule {
    id?: number;
    uuid?: string;
    processId?: number;
    name: string;
    description?: string;
    startDate?: string;
    finalDate?: string;
    state?: number;
    active?: boolean;
    processInstance: IProcessInstance
 };