# 🔓 ENABLE STRAPI PERMISSIONS - CRITICAL STEP!

## ⚠️ **Why Products Don't Show After Login**

After login, products won't show unless you **enable public API access in Strapi**.

---

## ✅ **Step-by-Step: Enable Public Access**

### **1. Make Sure Strapi is Running**
```bash
cd ~/developer-market-backend
npm run develop
```
**Wait for:** "Server started on: http://localhost:1337"

---

### **2. Open Strapi Admin Panel**
- Go to: **http://localhost:1337/admin**
- Log in with your admin credentials

---

### **3. Enable Public Permissions**

#### **Step 3.1: Go to Settings**
- Click the **⚙️ Settings** icon (bottom of left sidebar)

#### **Step 3.2: Click on Roles**
- Under "USERS & PERMISSIONS PLUGIN"
- Click **"Roles"**

#### **Step 3.3: Select Public Role**
- Click **"Public"** (not Authenticated)

#### **Step 3.4: Find Product Permissions**
- Scroll down to find **"Product"** section
- You'll see checkboxes for different permissions

#### **Step 3.5: Enable These Permissions**
**Check these TWO boxes:**
- ✅ **find** (allows getting all products)
- ✅ **findOne** (allows getting single product)

**DO NOT check:**
- ❌ create
- ❌ update
- ❌ delete

#### **Step 3.6: Save**
- Click **"Save"** button (top right corner)
- Wait for confirmation message

---

## 🎯 **Visual Guide**

```
Settings ⚙️
  ↓
Roles
  ↓
Public (Click it)
  ↓
Scroll down to "Product"
  ↓
☑ find
☑ findOne
☐ create
☐ update  
☐ delete
  ↓
Click SAVE
```

---

## ✅ **Verify It Works**

### **Test in Browser:**
1. Open a new tab
2. Go to: **http://localhost:1337/api/products**
3. You should see **JSON data** with your products
4. If you see an error or "Forbidden", permissions aren't enabled

---

## 🚀 **After Enabling Permissions**

### **1. Refresh Your React App**
- Go to http://localhost:3000
- Login with your account
- Products should now appear!

### **2. What You Should See:**
- ✅ Product cards with images
- ✅ Prices in USD
- ✅ Star ratings
- ✅ Buy Now buttons
- ✅ Clickable cards

---

## 🔧 **Troubleshooting**

### **Still No Products After Enabling Permissions?**

#### **Check 1: Is Product Published?**
1. Go to Strapi Admin
2. Content Manager → Product
3. Make sure product has **"Published"** badge
4. If not, open it and click **Publish**

#### **Check 2: Browser Console**
1. Press **F12** in browser
2. Go to **Console** tab
3. Look for error messages
4. Common errors:
   - "Failed to fetch" → Strapi not running
   - "403 Forbidden" → Permissions not enabled
   - "404 Not Found" → Check API URL

#### **Check 3: Network Tab**
1. Press **F12** in browser
2. Go to **Network** tab
3. Reload page
4. Look for request to `localhost:1337/api/products`
5. Click it to see response

#### **Check 4: Strapi Logs**
1. Look at the terminal where Strapi is running
2. Check for any error messages
3. You should see successful GET requests

---

## 📋 **Common Issues & Solutions**

| Issue | Solution |
|-------|----------|
| "Failed to load products" | Enable public permissions (find & findOne) |
| "403 Forbidden" | Public permissions not saved correctly |
| Empty product list | No products published in Strapi |
| "Network Error" | Strapi not running on port 1337 |
| Products show after refresh | Auth context issue (already fixed) |

---

## ✨ **Complete Checklist**

Before products will show, ensure:
- [ ] Strapi is running (`npm run develop`)
- [ ] Public role has `find` permission enabled
- [ ] Public role has `findOne` permission enabled
- [ ] Permissions are **saved**
- [ ] At least 1 product exists in Strapi
- [ ] Product is **published** (not draft)
- [ ] React app is running (`npm start`)
- [ ] User is logged in
- [ ] Browser is refreshed

---

## 🎯 **Expected Result**

After completing all steps:

**Homepage:**
```
┌──────────────────────────────────┐
│  [Product Image]                 │
│  $1000.00                        │
│  TradingView APi                 │
│  ⭐⭐⭐⭐⭐ (5)              │
│  Real-time data...               │
│  [Tools api]                     │
│  [Buy Now]  [🛒]                │
└──────────────────────────────────┘
```

**Navbar:**
```
Developer Hub    Welcome, username  [👤]  [🛒]
```

---

## 🆘 **Still Not Working?**

1. **Restart both servers:**
   ```bash
   # Terminal 1: Stop Strapi (Ctrl+C), then:
   cd ~/developer-market-backend
   npm run develop
   
   # Terminal 2: Stop React (Ctrl+C), then:
   cd ~/developer-market-hub
   npm start
   ```

2. **Clear browser cache:**
   - Press `Ctrl + Shift + R` (hard refresh)
   - Or clear all cookies/cache in browser settings

3. **Check all ports:**
   ```bash
   # Strapi should be on 1337
   curl http://localhost:1337/api/products
   
   # React should be on 3000
   # Visit http://localhost:3000
   ```

---

**After enabling permissions, products will load immediately when you log in!** 🎉

