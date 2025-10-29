# 💳 Product-Specific Payment Settings - Complete Setup Guide

## 🎯 **Overview**

Now each product can have its **own payment links and crypto addresses**! This means:
- ✅ Each product has its own Stripe payment link
- ✅ Each product has its own Paystack payment link  
- ✅ Each product has its own crypto wallet addresses (BTC, ETH, USDT)
- ✅ Perfect for products with different prices!

---

## 📋 **Step-by-Step: Add Payment Fields to Products**

### **Step 1: Login to Strapi Admin**

1. Go to: `http://localhost:1337/admin`
2. Login with your admin credentials

---

### **Step 2: Open Content-Type Builder**

1. Click **"Content-Type Builder"** in the left sidebar
2. Find and click on **"Product"** under "Collection Types"

---

### **Step 3: Add Payment Link Fields**

#### **A. Add Stripe Payment Link**

1. Click the **"+ Add another field"** button
2. Select **"Text"** field type
3. Configure the field:
   ```
   Name: Stripe_Payment_Link
   Type: Short text
   ```
4. Click **"Advanced Settings"** tab
5. **Optional:** Check "Private field" if you want to keep it hidden from public API
6. Click **"Finish"**

#### **B. Add Paystack Payment Link**

1. Click **"+ Add another field"** button again
2. Select **"Text"** field type
3. Configure the field:
   ```
   Name: Paystack_Payment_Link
   Type: Short text
   ```
4. Click **"Finish"**

---

### **Step 4: Add Crypto Wallet Address Fields**

#### **A. Add Bitcoin (BTC) Wallet Address**

1. Click **"+ Add another field"** button
2. Select **"Text"** field type
3. Configure the field:
   ```
   Name: BTC_Wallet_Address
   Type: Short text
   ```
4. Click **"Finish"**

#### **B. Add Ethereum (ETH) Wallet Address**

1. Click **"+ Add another field"** button
2. Select **"Text"** field type
3. Configure the field:
   ```
   Name: ETH_Wallet_Address
   Type: Short text
   ```
4. Click **"Finish"**

#### **C. Add USDT Wallet Address**

1. Click **"+ Add another field"** button
2. Select **"Text"** field type
3. Configure the field:
   ```
   Name: USDT_Wallet_Address
   Type: Short text
   ```
4. Click **"Finish"**

---

### **Step 5: Save Changes**

1. Click the **"Save"** button at the top right
2. Wait for Strapi to restart (this may take 10-30 seconds)
3. You'll see a success message when it's done

---

## ✅ **Summary of Fields to Add:**

| Field Name | Type | Description |
|-----------|------|-------------|
| `Stripe_Payment_Link` | Text (Short) | Stripe payment link for this product |
| `Paystack_Payment_Link` | Text (Short) | Paystack payment link for this product |
| `BTC_Wallet_Address` | Text (Short) | Bitcoin wallet address for this product |
| `ETH_Wallet_Address` | Text (Short) | Ethereum wallet address for this product |
| `USDT_Wallet_Address` | Text (Short) | USDT (Tether) wallet address for this product |

---

## 📝 **Step 6: Add Payment Info to Your Products**

Now that the fields exist, you can add payment information to each product:

### **1. Go to Content Manager**
- Click **"Content Manager"** in the left sidebar
- Click **"Product"** under "Collection Types"

### **2. Edit a Product**
- Click on any product to edit it
- Scroll down to see the new payment fields

### **3. Fill in Payment Information**

#### **Stripe Payment Link Example:**
```
https://buy.stripe.com/test_xxxxxxxxxxxxx
```
**How to get your Stripe link:**
1. Go to Stripe Dashboard (https://dashboard.stripe.com)
2. Click "Products" → Click your product
3. Click "Create payment link"
4. Set the price for this specific product
5. Copy the generated link
6. Paste it into the `Stripe_Payment_Link` field

---

#### **Paystack Payment Link Example:**
```
https://paystack.com/pay/your-payment-page
```
**How to get your Paystack link:**
1. Go to Paystack Dashboard (https://dashboard.paystack.com)
2. Click "Payment Pages" → "Create Payment Page"
3. Set the product name and price
4. Copy the generated link
5. Paste it into the `Paystack_Payment_Link` field

---

#### **Crypto Wallet Addresses:**

**Bitcoin (BTC) Example:**
```
bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh
```

**Ethereum (ETH) Example:**
```
0x742d35Cc6634C0532925a3b844Bc454e4438f44e
```

**USDT (Tether) Example:**
```
0x742d35Cc6634C0532925a3b844Bc454e4438f44e
```

⚠️ **Important:** Use your **own wallet addresses**! Don't use the examples above.

---

### **4. Save the Product**
- Click **"Save"** button at the top right
- Repeat for all your products

---

## 🎨 **Visual Guide: Product Edit Screen**

After adding the fields, your product edit screen will look like this:

```
┌─────────────────────────────────────────────┐
│ Edit Product                                │
├─────────────────────────────────────────────┤
│ Title:        [API-FOOTBALL]                │
│ Subtitle:     [Football API Service]        │
│ Price:        [99.99]                       │
│ Rating:       [4.5]                         │
│ ...                                         │
│                                             │
│ ─── PAYMENT SETTINGS ───                   │
│                                             │
│ Stripe Payment Link:                        │
│ [https://buy.stripe.com/test_xxxxx]        │
│                                             │
│ Paystack Payment Link:                      │
│ [https://paystack.com/pay/xxxxxx]          │
│                                             │
│ BTC Wallet Address:                         │
│ [bc1qxy2kgdygjrsqtzq2n0yrf2493p83k...]    │
│                                             │
│ ETH Wallet Address:                         │
│ [0x742d35Cc6634C0532925a3b844Bc454e...]    │
│                                             │
│ USDT Wallet Address:                        │
│ [0x742d35Cc6634C0532925a3b844Bc454e...]    │
│                                             │
│              [Save]                         │
└─────────────────────────────────────────────┘
```

---

## 🔄 **How It Works Now:**

### **Before (Old System):**
```
All Products → Use Same Payment Links → ❌ Wrong!
```

### **Now (New System):**
```
Product A ($50)  → Stripe Link A, Crypto Wallet A ✅
Product B ($100) → Stripe Link B, Crypto Wallet B ✅
Product C ($200) → Stripe Link C, Crypto Wallet C ✅
```

---

## 💡 **Example: Setting Up Multiple Products**

### **Product 1: API-FOOTBALL ($99.99)**
```
Stripe_Payment_Link:     https://buy.stripe.com/test_football99
Paystack_Payment_Link:   https://paystack.com/pay/football-api
BTC_Wallet_Address:      bc1q...football...
ETH_Wallet_Address:      0x...football...
USDT_Wallet_Address:     0x...football...
```

### **Product 2: Weather API ($49.99)**
```
Stripe_Payment_Link:     https://buy.stripe.com/test_weather49
Paystack_Payment_Link:   https://paystack.com/pay/weather-api
BTC_Wallet_Address:      bc1q...weather...
ETH_Wallet_Address:      0x...weather...
USDT_Wallet_Address:     0x...weather...
```

### **Product 3: Premium Bundle ($199.99)**
```
Stripe_Payment_Link:     https://buy.stripe.com/test_bundle199
Paystack_Payment_Link:   https://paystack.com/pay/premium-bundle
BTC_Wallet_Address:      bc1q...bundle...
ETH_Wallet_Address:      0x...bundle...
USDT_Wallet_Address:     0x...bundle...
```

---

## 🚀 **Testing the New System:**

### **1. Add Payment Info to a Product**
- Edit any product in Strapi
- Add payment links and wallet addresses
- Click "Save"

### **2. Test on Frontend**
- Go to: `http://localhost:3000`
- Login to your account
- Click on the product you just edited
- Click "Buy Now"
- You should see the payment page with 3 tabs:
  - **Stripe** - Will redirect to your product-specific Stripe link
  - **Paystack** - Will redirect to your product-specific Paystack link
  - **Crypto** - Will show your product-specific wallet addresses

### **3. Verify Each Payment Method**
- **Stripe Tab:** Click "Continue to Stripe" → Should redirect to the correct Stripe link
- **Paystack Tab:** Click "Continue to Paystack" → Should redirect to the correct Paystack link
- **Crypto Tab:** Select network (BTC/ETH/USDT) → Should show the correct wallet address

---

## ⚠️ **Important Notes:**

### **1. Each Product Needs Its Own Payment Links**
- Don't reuse the same payment link for different products
- Each Stripe/Paystack link should have the correct price for that specific product

### **2. You Can Use the Same Wallet Addresses**
- If you want, you can use the same crypto wallet addresses for all products
- Or use different wallets for better tracking

### **3. Optional Fields**
- All payment fields are optional
- If a field is empty, users will see an error message when trying to use that payment method
- Make sure to fill in at least one payment method per product!

### **4. Security**
- **Never share private keys** - only share wallet addresses
- Keep your Stripe and Paystack API keys secure
- The payment links are public URLs, so they're safe to store in Strapi

---

## 🎯 **Best Practices:**

### **1. Organize Your Payment Links**
Create a spreadsheet to track payment links:
```
Product Name     | Price   | Stripe Link | Paystack Link | BTC Address
-----------------|---------|-------------|---------------|------------
API-FOOTBALL     | $99.99  | stripe.com/a| paystack/a    | bc1q...
Weather API      | $49.99  | stripe.com/b| paystack/b    | bc1q...
Premium Bundle   | $199.99 | stripe.com/c| paystack/c    | bc1q...
```

### **2. Test Before Publishing**
- Add test payment links first
- Try purchasing with each payment method
- Verify the correct amount is charged

### **3. Update When Prices Change**
- If you change a product's price in Strapi
- Remember to update the Stripe and Paystack links too!

---

## 🔧 **Troubleshooting:**

### **Problem: "Payment link not configured" error**
**Solution:** You haven't added payment links to that product yet. Go to Strapi and add them.

### **Problem: Wrong amount charged**
**Solution:** The payment link has a different price than your product. Create a new payment link with the correct price.

### **Problem: Fields not showing in Strapi**
**Solution:** 
1. Make sure you clicked "Save" in Content-Type Builder
2. Wait for Strapi to restart
3. Refresh your browser
4. Check again

### **Problem: Frontend not showing payment methods**
**Solution:**
1. Make sure you saved the product with payment information
2. Refresh the frontend
3. Check browser console for errors

---

## ✅ **Checklist:**

Use this checklist for each product:

- [ ] Added `Stripe_Payment_Link` field to Product content type
- [ ] Added `Paystack_Payment_Link` field to Product content type
- [ ] Added `BTC_Wallet_Address` field to Product content type
- [ ] Added `ETH_Wallet_Address` field to Product content type
- [ ] Added `USDT_Wallet_Address` field to Product content type
- [ ] Saved changes in Content-Type Builder
- [ ] Waited for Strapi to restart
- [ ] Opened a product to edit
- [ ] Created Stripe payment link for this product
- [ ] Created Paystack payment link for this product
- [ ] Got crypto wallet addresses
- [ ] Added all payment info to the product
- [ ] Saved the product
- [ ] Tested purchase flow on frontend
- [ ] Verified correct amount is charged

---

## 🎉 **Summary:**

### **What Changed:**
- ❌ Before: All products used the same payment settings
- ✅ Now: Each product has its own payment links and addresses

### **Benefits:**
- ✅ Different prices for different products
- ✅ Better tracking (separate links per product)
- ✅ More flexible payment options
- ✅ Easier to manage product-specific offers

### **Next Steps:**
1. Add the 5 payment fields to your Product content type
2. Create payment links for each product (Stripe & Paystack)
3. Add wallet addresses for crypto payments
4. Save and test!

---

**Your payment system is now product-specific and ready to handle different prices! 🚀💳**

Need help? Check the troubleshooting section or test one product at a time!

