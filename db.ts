import mongoose, { Mongoose } from "mongoose";


let MONGO_URL = process.env.MONGO_URI!;

interface MongooseConn {
    conn: Mongoose | null,
    promise: Promise<Mongoose> | null;
}

let cached: MongooseConn = (global as any).mongoose;

if ( !cached ) {
    (global as any).mongoose = {
        conn: null,
        promise: null
    };
}

export const connect = async () => {
    if ( cached.conn ) {
        return cached.conn;
    }

    cached.promise = cached.promise || mongoose.connect(MONGO_URL, {
        dbName: "clerk_nextjs_db",
        bufferCommands: false,
        connectTimeoutMS: 30000,
    });

    cached.conn = await cached.promise;
    return cached.conn;
}