import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import fs from "fs";
import multer from "multer";
import cors from "cors";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // Redirect trailing slashes
  app.use((req, res, next) => {
    if (req.path.length > 1 && req.path.endsWith("/")) {
      const query = req.url.slice(req.path.length);
      const safepath = req.path.slice(0, -1).replace(/\/+/g, "/");
      res.redirect(301, safepath + query);
    } else {
      next();
    }
  });

  // Ensure uploads directory exists
  const uploadsDir = path.join(process.cwd(), "public", "uploads");
  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
  }

  // Configure multer for file uploads
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, uploadsDir);
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      cb(null, uniqueSuffix + path.extname(file.originalname));
    },
  });

  const upload = multer({ storage });

  // API Routes
  app.post("/api/upload", upload.single("file"), (req, res) => {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }
    const fileUrl = `/uploads/${req.file.filename}`;
    res.json({ url: fileUrl });
  });

  app.post("/api/posts", (req, res) => {
    try {
      const postsPath = path.join(process.cwd(), "src", "data", "posts.json");
      const posts = JSON.parse(fs.readFileSync(postsPath, "utf-8"));
      
      const newPost = req.body;
      
      // Basic validation
      if (!newPost.title || !newPost.slug) {
        return res.status(400).json({ error: "Title and slug are required" });
      }

      // Check if post exists (update) or add new
      const index = posts.findIndex((p: any) => p.id === newPost.id || p.slug === newPost.slug);
      if (index !== -1) {
        posts[index] = { ...posts[index], ...newPost };
      } else {
        posts.push(newPost);
      }

      fs.writeFileSync(postsPath, JSON.stringify(posts, null, 2));
      res.json({ success: true, post: newPost });
    } catch (error) {
      console.error("Error saving post:", error);
      res.status(500).json({ error: "Failed to save post" });
    }
  });

  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production
    app.use(express.static(path.join(process.cwd(), "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(process.cwd(), "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
