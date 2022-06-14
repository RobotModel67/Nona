import { IProcess } from "./process.interface";
import { IOperationInstance } from "./operationInstance.interface";


export interface IProcessInstance {
    id: number;
    scheduleId: number;
    uuid: string;
    processId: number;
    process: IProcess;
    operations:IOperationInstance[]

}