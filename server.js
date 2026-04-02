import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

const CLAUDE_KEY = process.env.CLAUDE_KEY;
const QOYOD_KEY = process.env.QOYOD_KEY;

const QOYOD_BASE = "https://api.qoyod.com/2.0";

// 🧾 اختبار استخراج
app.post("/extract", async (req, res) => {
  try {
    res.json({
      invoice_number: "INV-001",
      supplier_name: "Test Supplier",
      date: "2026-01-01",
      total: 100,
      items: [
        {
          name: "منتج تجريبي",
          qty: 1,
          price: 100
        }
      ]
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// 🚀 اختبار إرسال
app.post("/send", async (req, res) => {
  res.json({ success: true, message: "تم الإرسال بنجاح" });
});

app.get("/", (req, res) => {
  res.send("🚀 Server is running");
});

app.listen(3000, () => console.log("🚀 Server running on port 3000"));
