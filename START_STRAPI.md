# 🚀 Quick Start: Run Strapi Backend

## ⚠️ IMPORTANT: You Need to Start Strapi First!

The error "Failed to load products" means Strapi is **not running**.

---

## 📋 Step-by-Step to Fix:

### 1. **Open a NEW Terminal** (Keep React running in the current one)

### 2. **Start Strapi:**
```bash
cd /home/programmer/developer-market-backend
npm run develop
```

**Wait 30-60 seconds** for Strapi to start. You'll see:
```
Server started on: http://localhost:1337
Admin panel: http://localhost:1337/admin
```

### 3. **Log into Strapi Admin:**
- Browser will open automatically to: http://localhost:1337/admin
- Log in with the admin account you created

### 4. **Enable Public API Access** (CRITICAL!)
This allows your React app to fetch products:

1. Click **Settings** (⚙️ in left sidebar, bottom)
2. Click **Roles** under "Users & Permissions Plugin"
3. Click **Public** role
4. Scroll down to **Product**
5. **Check these boxes:**
   - ✅ `find` (get all products)
   - ✅ `findOne` (get single product)
6. Click **Save** (top right)

### 5. **Add Test Products:**
1. Click **Content Manager** (left sidebar)
2. Click **Product**
3. Click **"Create new entry"** (blue button)
4. Fill in ALL fields:
   - Title: "My First Product"
   - Subtitle: "A cool developer tool"
   - Price: 29.99
   - Rating: 4.5
   - Description: "This is an amazing product for developers..."
   - Category: "E-commerce"
   - Product_image: **Upload an image** (click to upload)
   - Comment: "Great product!"
   - Rating_profile_image: Upload a profile picture

5. Click **"Save"** (top right)
6. Click **"Publish"** (top right)
7. **Add 2-3 more products** for testing

### 6. **Refresh Your React App:**
Go back to http://localhost:3000 and refresh - products should appear!

---

## ✅ Both Servers Must Run:

### Terminal 1 - Strapi Backend:
```bash
cd /home/programmer/developer-market-backend
npm run develop
```
Runs at: **http://localhost:1337**

### Terminal 2 - React Frontend:
```bash
cd /home/programmer/developer-market-hub
npm start
```
Runs at: **http://localhost:3000**

---

## 🎉 Success Checklist:

- [ ] Strapi is running (Terminal 1)
- [ ] React is running (Terminal 2)
- [ ] Public role has `find` and `findOne` enabled
- [ ] Added at least 1 product and published it
- [ ] Products appear on http://localhost:3000

---

## 🔧 If Products Still Don't Show:

1. **Check Strapi is running**: Visit http://localhost:1337/admin
2. **Check API**: Open http://localhost:1337/api/products in browser
   - Should see JSON data with your products
   - If you see error or empty, products aren't published or permissions aren't set
3. **Check React console**: Press F12 in browser, look for errors

---

## 💡 Remember:
**Every time you want to use the marketplace, you need BOTH terminals running!**

