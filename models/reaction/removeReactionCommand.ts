import {EReactedTo} from "~/models/reaction/EReactedTo";

export interface RemoveReactionCommand {
    entityId: number;
    postId: number;
    userId: number;
    reactedTo: EReactedTo;
}