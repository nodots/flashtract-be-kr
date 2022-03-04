export interface Task {
    id: number;
    title: string;
    status: TaskStatus;
}
export declare enum TaskStatus {
    BACKLOG = 0,
    TODO = 1,
    ONGOING = 2,
    DONE = 3
}
