# 📊 How to Set Rating & Price in Strapi Admin Panel

## ⭐ **Setting Star Rating (5-Star System)**

### **In Strapi Admin Panel:**

1. **Go to Content Manager**
   - Click "Content Manager" in left sidebar
   - Click "Product"
   - Click on any product to edit (or "Create new entry")

2. **Find the "Rating" Field**
   - You'll see a field called **"Rating"**
   - This is a **Number** field (decimal)

3. **Enter Rating Value:**
   - For ⭐⭐⭐⭐⭐ (5 stars) → Enter: `5`
   - For ⭐⭐⭐⭐½ (4.5 stars) → Enter: `4.5`
   - For ⭐⭐⭐⭐ (4 stars) → Enter: `4`
   - For ⭐⭐⭐½ (3.5 stars) → Enter: `3.5`
   - For ⭐⭐⭐ (3 stars) → Enter: `3`
   - For ⭐⭐½ (2.5 stars) → Enter: `2.5`
   - For ⭐⭐ (2 stars) → Enter: `2`
   - For ⭐½ (1.5 stars) → Enter: `1.5`
   - For ⭐ (1 star) → Enter: `1`

4. **Click Save** (top right)
5. **Click Publish** (top right)

---

## 💵 **Setting Price in USD**

### **In Strapi Admin Panel:**

1. **Go to Content Manager**
   - Click "Content Manager" in left sidebar
   - Click "Product"
   - Click on any product to edit

2. **Find the "Price" Field**
   - You'll see a field called **"Price"**
   - This is a **Number** field (decimal)

3. **Enter Price Value (in USD):**
   - For $9.99 → Enter: `9.99`
   - For $29.99 → Enter: `29.99`
   - For $49.00 → Enter: `49` or `49.00`
   - For $99.99 → Enter: `99.99`
   - For $1000.00 → Enter: `1000` or `1000.00`

   **Important:** 
   - ✅ Use **numbers only** (no dollar sign)
   - ✅ Can use decimals (e.g., 29.99)
   - ❌ Don't use commas (e.g., 1,000)
   - ❌ Don't use currency symbols ($, €, etc.)

4. **Click Save** (top right)
5. **Click Publish** (top right)

---

## 📝 **Example Product Entry**

Here's how to fill out a complete product:

```
Title: "React Dashboard Template"
Subtitle: "Professional admin dashboard with charts and analytics"
Price: 49.99
Rating: 4.5
Category: "Templates"
Description: "A fully responsive React dashboard template..."
Comment: "Great template, saved me weeks of work!"
Product_image: [Upload your image file]
```

**Result on website:**
- Shows as: **$49.99**
- Shows as: ⭐⭐⭐⭐½ **(4.5)**
- Category badge: **Templates**

---

## 🎯 **Quick Reference Table**

| What You Want | Field Name | What To Enter | Example |
|--------------|-----------|---------------|---------|
| 5 stars | Rating | 5 or 5.0 | `5` |
| 4.5 stars | Rating | 4.5 | `4.5` |
| 4 stars | Rating | 4 or 4.0 | `4` |
| $9.99 | Price | 9.99 | `9.99` |
| $29 | Price | 29 or 29.00 | `29` |
| $99.99 | Price | 99.99 | `99.99` |
| $1,000 | Price | 1000 | `1000` |

---

## ✅ **After Making Changes:**

1. **Always click Save** (top right)
2. **Always click Publish** (top right) - otherwise changes won't show on website
3. **Refresh your website** (http://localhost:3000)
4. **Check the product card** - should show:
   - Price in blue: `$49.99`
   - Stars: ⭐⭐⭐⭐½
   - Rating number: `(4.5)`

---

## 🔧 **Troubleshooting:**

### **Rating not showing stars?**
- Make sure you entered a **number** (not text)
- Valid range: 0 to 5
- Can use decimals: 0.5, 1.5, 2.5, 3.5, 4.5

### **Price not showing correctly?**
- Make sure you entered a **number** (not text)
- Don't use $ symbol
- Don't use commas
- Decimals are OK: 29.99, 49.99

### **Changes not showing on website?**
1. Did you click **Publish**? (not just Save)
2. Did you refresh the browser?
3. Check browser console (F12) for errors
4. Make sure Strapi is running: http://localhost:1337/admin

---

## 📌 **Your Current Product:**

```
Title: TradingView APi
Price: 1000
Rating: 5

Displays as:
💰 $1000.00
⭐⭐⭐⭐⭐ (5)
```

To change:
1. Go to Strapi admin: http://localhost:1337/admin
2. Content Manager → Product → Click "TradingView APi"
3. Edit Price or Rating
4. Save → Publish
5. Refresh website

**All set!** 🎉

