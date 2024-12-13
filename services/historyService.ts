import { MongoClient, ObjectId } from 'mongodb';
import { connectToDatabase } from '../utils/mongodb';

export async function deleteHistory(
  user: string,
  historyId: string,
): Promise<{ message: string }> {
  const { db } = await connectToDatabase();
  const collection = db.collection('history');
  try {
    const result = await collection.deleteOne({
      _id: new ObjectId(historyId),
      user,
    });
    if (result.deletedCount === 0) {
      throw new Error('History not found or user not authorized');
    }
    return { message: 'History deleted successfully' };
  } catch (error) {
    console.error('Error deleting history:', error);
    throw error;
  }
}
