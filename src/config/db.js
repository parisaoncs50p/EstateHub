
import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        console.log('🔄 Connecting to MongoDB...');
        console.log('📡 URI:', process.env.MONGO_URI);
        
        await mongoose.connect(process.env.MONGO_URI);
        
        console.log('✅ MongoDB Connected Successfully!');
    } catch (error) {
        console.error('❌ MongoDB Connection Error:', error.message);
        // سرور رو متوقف نکن، اجازه بده با خطا ادامه بده
        // process.exit(1);
    }
};

export default connectDB;