export interface ITasks {
    id: number;
    uuid: string;
    activityId: number;
    name: string;
    description: string;
    active: boolean;
    order: number;
    commandType: number;
    command: string;
    parameters: string
 }