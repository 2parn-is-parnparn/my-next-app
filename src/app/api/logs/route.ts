import { NextResponse } from "next/server";
import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error("❌ MONGO_URI ไม่ถูกตั้งค่า");
}

// เชื่อมต่อ MongoDB ครั้งเดียว และตรวจสอบสถานะการเชื่อมต่อ
if (!mongoose.connections[0].readyState) {
  mongoose.connect(MONGO_URI).catch(err => {
    console.error("ไม่สามารถเชื่อมต่อ MongoDB:", err);
  });
}

// สร้าง Schema และ Model สำหรับคอลเล็กชัน visitors_collection
const visitorSchema = new mongoose.Schema({
  ip: String,
  userAgent: String,
  timestamp: { type: Date, default: Date.now },
});

const Visitor = mongoose.models.Visitor || mongoose.model("Visitor", visitorSchema, "visitors_collection");

// **POST: บันทึกข้อมูล**
export async function POST(req: Request) {
  try {
    const { ip, userAgent } = await req.json();
    await Visitor.create({ ip, userAgent });
    return NextResponse.json({ message: "บันทึกสำเร็จ" });
  } catch (error) {
    console.error("เกิดข้อผิดพลาดในการบันทึกข้อมูล:", error);
    return NextResponse.json({ message: "เกิดข้อผิดพลาด" }, { status: 500 });
  }
}
