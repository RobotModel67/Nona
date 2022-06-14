import { IOperationInstance } from "./operationInstance.interface";
import { IProcess } from "./process.interface";
import { IProcessInstance } from "./processInstance.interface";
import { ISchedule } from "./schedule.interface";

export interface IScheduleInstance {
    schedule:ISchedule;
    process:IProcessInstance;
}




    