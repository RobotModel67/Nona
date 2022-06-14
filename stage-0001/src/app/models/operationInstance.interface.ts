
import {IOperation} from "./operation.interface";
import {IActivityInstance} from "./activityInstance.interface";

export interface IOperationInstance {
    id: number;
    uuid: string;
    processInstanceId: number;
    operationId: number;
    state: number;
    startDate: string;
    closeDate: string;
    evidences: string;
    operation: IOperation;
    activities:IActivityInstance[];
};