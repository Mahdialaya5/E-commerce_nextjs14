import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';


const uri = process.env.MONGODB_URI;
const clientPromise = new MongoClient(uri).connect();

export async function POST(req) {
    try {
  
      const client = await clientPromise;
      const db = client.db('nextdb');
  
      const { name,price } = await req.json();
        
      const result = await db.collection('products').insertOne({ name,price });
      return NextResponse.json({ msg: 'product added ' },{status:201});
      
    } catch (error) {
       return NextResponse.json({ error: error.message });
    }
  }