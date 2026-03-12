import mongoose, {Schema} from "mongoose";

const subscriptionSchema = new Schema({
    subscriber: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    channel: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, {timestamps: true})


export const Subscription = mongoose.model("Subscription",
    subscriptionSchema)

// jitni baar v tum ek channel ko subscribe karoge utni baar ek document banega
// the document consist of subscribers and channel itself
// To count the number of subscriber => count the document having channel as that one
// To count the number of channel the person is subscribing => We count the number of subs in the document