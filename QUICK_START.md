# ⚡ QUICK START GUIDE

## 🚀 **Start Your Website (Every Time)**

### **Terminal 1:**
```bash
cd ~/developer-market-backend
npm run develop
```
✅ Wait for: "Server started on: http://localhost:1337"

### **Terminal 2:**
```bash
cd ~/developer-market-hub
npm start
```
✅ Opens: http://localhost:3000

---

## 🔓 **CRITICAL: Enable Strapi Permissions (First Time Only)**

**Do this ONCE before products will show:**

1. Go to: **http://localhost:1337/admin**
2. **Settings** ⚙️ (bottom left)
3. **Roles** → **Public**
4. Scroll to **Product**
5. ✅ Check **find**
6. ✅ Check **findOne**  
7. Click **Save**

**Verify:** Visit http://localhost:1337/api/products (should see JSON data)

---

## ✅ **Test Everything**

1. Visit http://localhost:3000
2. **Should redirect to Sign Up page**
3. Create account (email + password)
4. **Navbar IMMEDIATELY shows:** "Welcome, [email]"
5. **Products IMMEDIATELY show** (if permissions enabled)
6. Click product card → See details
7. Click "Buy Now" → Add to cart

---

## 📚 **Complete Guides**

- **Both Issues Fixed:** `BOTH_ISSUES_FIXED.md`
- **Enable Permissions:** `ENABLE_STRAPI_PERMISSIONS.md`
- **All Features:** `ALL_FIXES_COMPLETE.md`
- **Rating & Price:** `STRAPI_RATING_PRICE_GUIDE.md`

---

## 🆘 **Quick Troubleshooting**

| Problem | Solution |
|---------|----------|
| Navbar doesn't update | ✅ Already fixed! Clear cache (Ctrl+Shift+R) |
| Products don't show | ✅ Enable public permissions in Strapi |
| "Failed to load products" | ✅ Start Strapi, enable permissions |
| Can't see login/signup | ✅ Perfect! That means you're logged in |

---

## 🎯 **What's Different Now**

1. ✅ **Must sign up first** before seeing products
2. ✅ **Navbar updates instantly** after login/signup
3. ✅ **Whole card clickable** (not just title)
4. ✅ **"Buy Now" button** on every product
5. ✅ Shows **"Welcome, [email]"** when logged in

---

**Ready to go! Start both servers and visit http://localhost:3000** 🎉

