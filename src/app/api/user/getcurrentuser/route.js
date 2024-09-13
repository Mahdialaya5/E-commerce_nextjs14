import { NextResponse } from "next/server";
import  jwt from 'jsonwebtoken'
import { MongoClient,ObjectId } from "mongodb";

const uri = process.env.MONGODB_URI;
const clientPromise = new MongoClient(uri).connect();

export async function GET(req) {
    try {
      const client = await clientPromise;
      const db = client.db('nextdb');
    //  console.log(req.headers.get('authorization'));
      const token = req.headers.get('authorization').slice(7)
      if (token) {
          const  decoded = jwt.verify(token, process.env.secretKey)
          const user = await db.collection('users').findOne({_id:new ObjectId(decoded._id)},{projection:{password: 0}})
       return NextResponse.json(user,{status:200})
      }
      return NextResponse.json({error: 'user not found'},{ status:404});
      
    } catch (error) {
       return NextResponse.json({ error: error.message })
    }
  }