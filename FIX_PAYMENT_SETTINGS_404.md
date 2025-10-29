# 🔧 Fix Payment Settings - Not Showing

## ❌ **Problem:**
Payment settings not showing on payment page (404 error from API)

---

## ✅ **Solutions:**

### **Step 1: Check if Entry Exists**

1. **Open:** http://localhost:1337/admin
2. **Go to:** Content Manager → Payment Settings
3. **Do you see an entry?**
   - ✅ **YES:** Go to Step 2
   - ❌ **NO:** Click "Create new entry", fill the data, Save & Publish

---

### **Step 2: Make Sure It's Published**

1. **Open the entry** in Content Manager
2. **Look at the top right corner**
3. **Is it showing "Draft" or "Published"?**
   - If **Draft** → Click **"Publish"** button
   - If **Published** → Good! Go to Step 3

---

### **Step 3: Set Public Permissions** ⚠️ **IMPORTANT!**

1. **Go to:** Settings (left sidebar, bottom)
2. **Click:** Users & Permissions Plugin
3. **Click:** Roles
4. **Click:** Public
5. **Scroll down** to find "Payment-setting"
6. **Check these boxes:**
   - ✅ `find`
   - ✅ `findOne`
7. **DON'T check:** create, update, delete
8. **Click "Save"** (top right)

---

### **Step 4: Test the API**

Open a new terminal and run:
```bash
curl http://localhost:1337/api/payment-settings
```

**Expected result:**
```json
{
  "data": [
    {
      "id": 1,
      "documentId": "xxx",
      "Stripe_paymet_link": "https://...",
      "paystack_Url_link": "https://...",
      ...
    }
  ]
}
```

**If you see `"data": null` or 404:**
- Go back to Step 2 (make sure it's published)
- Go back to Step 3 (check permissions are saved)
- Restart Strapi: `cd ~/developer-market-backend && npm run develop`

---

### **Step 5: Refresh Your Website**

1. **Go to:** http://localhost:3000
2. **Press:** Ctrl + Shift + R (hard refresh)
3. **Click "Buy Now"** on any product
4. **Check the browser console** (F12 → Console tab)
   - Look for payment settings data
   - Should see your Stripe link, Paystack link, etc.

---

## 🧪 **Quick Test Checklist:**

- [ ] Entry created in Content Manager → Payment Settings
- [ ] Entry is **Published** (not Draft)
- [ ] Public role has `find` and `findOne` permissions
- [ ] API test shows data (not 404 or null)
- [ ] Browser cache cleared (Ctrl + Shift + R)
- [ ] Payment page shows your links

---

## 🔍 **Visual Check:**

### **In Strapi Admin:**

**Content Manager → Payment Settings should show:**
```
📄 Payment Settings Entry #1
Status: Published ✅
Created: Today
```

**Click on it, you should see all your fields filled:**
- Stripe_paymet_link: https://buy.stripe.com/...
- paystack_Url_link: https://pay.paystack.com/...
- btc_wallet_address: 1A1z...
- eth_wallet_address: 0x74...
- usdt_wallet_address_Trc20: TYour...
- All enabled checkboxes: ✅

---

## 🆘 **Still Not Working?**

### **Option 1: Restart Strapi**
```bash
# Stop Strapi
pkill -f "strapi develop"

# Start Strapi
cd /home/programmer/developer-market-backend
npm run develop
```

### **Option 2: Check API Directly**

While on the payment page, open browser console (F12):
```javascript
fetch('http://localhost:1337/api/payment-settings')
  .then(r => r.json())
  .then(console.log)
```

This will show exactly what the API returns.

---

## 💡 **Common Issues:**

### **Issue 1: "data": null**
- **Cause:** No entry created or not published
- **Fix:** Create entry in Content Manager, click Publish

### **Issue 2: 403 Forbidden**
- **Cause:** Public permissions not set
- **Fix:** Settings → Roles → Public → Check find & findOne

### **Issue 3: 404 Not Found**
- **Cause:** Collection doesn't exist or wrong API endpoint
- **Fix:** Make sure collection is named "Payment Settings" (plural)

### **Issue 4: Data not showing on website**
- **Cause:** Browser cache
- **Fix:** Hard refresh (Ctrl + Shift + R)

---

## ✅ **After Fixing:**

Your payment page should show:
- **Stripe tab:** "Continue to Stripe" button (redirects to your link)
- **Paystack tab:** "Continue to Paystack" button (redirects to your link)
- **Crypto tab:** Your actual wallet addresses (changes based on network)

---

**Follow these steps and your payment settings will show!** 🚀

