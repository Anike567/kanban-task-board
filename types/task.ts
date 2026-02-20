
export const Status = {
    Todo: "todo",
    InProgress: "in_progress",
    Done: "done"
} as const;


export type StatusType = typeof Status[keyof typeof Status];

export interface Task {
    id: string;
    title: string;
    description: string;
    status: StatusType; // Use the Type here
}