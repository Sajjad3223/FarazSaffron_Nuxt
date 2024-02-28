import {EReactionType} from "~/models/reaction/EReactionType";
import {EReactedTo} from "~/models/reaction/EReactedTo";

export interface CreateReactionCommand{
    entityId:     number;
    postId:       number;
    reactionType: EReactionType;
    userId:       number;
    reactedTo:    EReactedTo;
}

