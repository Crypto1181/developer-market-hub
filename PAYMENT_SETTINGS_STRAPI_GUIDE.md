# 💳 Payment Settings Collection - Strapi Setup Guide

## 🎯 **What We're Creating:**

A **Payment Settings** collection in Strapi where you can manage all your payment gateway information:
- ✅ Stripe API keys and payment link
- ✅ PayPal email
- ✅ Bitcoin (BTC) wallet address
- ✅ Ethereum (ETH) wallet address
- ✅ USDT wallet address
- ✅ Paystack keys and link
- ✅ Enable/disable each payment method

---

## 📋 **Step-by-Step Setup:**

### **Step 1: Open Strapi Admin**
```
http://localhost:1337/admin
```

### **Step 2: Go to Content-Type Builder**
1. Click **"Content-Type Builder"** in the left sidebar
2. Click **"Create new collection type"**

### **Step 3: Create "Payment Settings" Collection**

**Basic Settings:**
- **Display name:** `Payment Settings`
- **API ID (Singular):** `payment-setting`
- **API ID (Plural):** `payment-settings`

Click **"Continue"**

---

## 🔧 **Step 4: Add Fields**

Now add these fields one by one:

### **A. Stripe Settings**

1. **Click "Add another field"**
2. **Select:** Text (short text)
3. **Name:** `stripe_publishable_key`
4. Click **"Add another field"**
5. Click **"Finish"**

Repeat for:
- `stripe_secret_key` (Text - short)
- `stripe_payment_link` (Text - short)
- `stripe_enabled` (Boolean - default: true)

### **B. PayPal Settings**

Add these fields:
- `paypal_email` (Text - short)
- `paypal_client_id` (Text - short)
- `paypal_enabled` (Boolean - default: true)

### **C. Cryptocurrency Settings**

Add these fields:
- `btc_wallet_address` (Text - short)
- `eth_wallet_address` (Text - short)
- `usdt_wallet_address` (Text - short)
- `crypto_enabled` (Boolean - default: true)

### **D. Paystack Settings (Optional)**

Add these fields:
- `paystack_public_key` (Text - short)
- `paystack_secret_key` (Text - short)
- `paystack_enabled` (Boolean - default: false)

### **E. General Settings**

Add these fields:
- `payment_instructions` (Rich Text - for additional info)
- `support_email` (Email)

---

## 📸 **Field List Summary:**

After adding all fields, you should have:

| Field Name | Type | Purpose |
|------------|------|---------|
| `stripe_publishable_key` | Text | Stripe public API key |
| `stripe_secret_key` | Text | Stripe secret API key |
| `stripe_payment_link` | Text | Stripe payment link |
| `stripe_enabled` | Boolean | Enable/disable Stripe |
| `paypal_email` | Text | Your PayPal email |
| `paypal_client_id` | Text | PayPal Client ID |
| `paypal_enabled` | Boolean | Enable/disable PayPal |
| `btc_wallet_address` | Text | Bitcoin wallet address |
| `eth_wallet_address` | Text | Ethereum wallet address |
| `usdt_wallet_address` | Text | USDT wallet address |
| `crypto_enabled` | Boolean | Enable/disable Crypto |
| `paystack_public_key` | Text | Paystack public key |
| `paystack_secret_key` | Text | Paystack secret key |
| `paystack_enabled` | Boolean | Enable/disable Paystack |
| `payment_instructions` | Rich Text | Additional payment info |
| `support_email` | Email | Support contact email |

---

## ✅ **Step 5: Save the Collection**

1. Click **"Save"** button (top right)
2. Wait for Strapi to restart (this takes ~30 seconds)

---

## 📝 **Step 6: Add Your Payment Settings**

### **After Strapi Restarts:**

1. **Go to:** Content Manager → Payment Settings
2. **Click:** "Create new entry"
3. **Fill in your payment details:**

#### **Stripe:**
- `stripe_publishable_key`: `pk_test_...` (get from Stripe dashboard)
- `stripe_secret_key`: `sk_test_...` (get from Stripe dashboard)
- `stripe_payment_link`: `https://buy.stripe.com/...` (optional)
- `stripe_enabled`: ✅ Check this box

#### **PayPal:**
- `paypal_email`: `your-paypal@example.com`
- `paypal_client_id`: Your PayPal Client ID
- `paypal_enabled`: ✅ Check this box

#### **Cryptocurrency:**
- `btc_wallet_address`: `1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa`
- `eth_wallet_address`: `0x742d35Cc6634C0532925a3b844Bc454e4438f44e`
- `usdt_wallet_address`: `0x...` (can be same as ETH for ERC-20)
- `crypto_enabled`: ✅ Check this box

#### **Paystack (Optional):**
- `paystack_public_key`: Your Paystack public key
- `paystack_secret_key`: Your Paystack secret key
- `paystack_enabled`: ☐ Leave unchecked if not using

#### **General:**
- `payment_instructions`: "All payments are processed securely. Contact support if you have any issues."
- `support_email`: `support@developermarkethub.com`

4. **Click "Save"**
5. **Click "Publish"**

---

## 🔐 **Step 7: Set Permissions**

### **Important: Make Payment Settings Public**

1. **Go to:** Settings → Users & Permissions Plugin → Roles → Public
2. **Scroll to:** Payment-setting
3. **Check these permissions:**
   - ✅ `find`
   - ✅ `findOne`
   - ☐ **DON'T check:** `create`, `update`, `delete` (keep these private!)
4. **Click "Save"**

**Why?** 
- The website needs to read payment settings
- But only YOU can edit them in admin panel (secure!)

---

## 🧪 **Step 8: Test the API**

Open terminal and run:
```bash
curl http://localhost:1337/api/payment-settings
```

You should see your payment settings in JSON format!

---

## 💡 **How to Use:**

### **In Your Admin Panel:**
1. Go to **Content Manager → Payment Settings**
2. Edit your payment details anytime
3. Click **"Save"** and **"Publish"**
4. Website automatically uses new settings!

### **On the Website:**
- The payment page will fetch your settings from Strapi
- Display the correct wallet addresses
- Show/hide payment methods based on enabled flags

---

## 🎯 **Benefits:**

✅ **No Code Changes:** Update payment details in admin panel  
✅ **Secure:** Only you can edit in admin panel  
✅ **Flexible:** Enable/disable payment methods instantly  
✅ **Centralized:** All payment info in one place  
✅ **Version Control:** Strapi keeps history of changes  

---

## 🔒 **Security Best Practices:**

### **⚠️ IMPORTANT:**

1. **API Keys:**
   - Store `stripe_secret_key` in Strapi
   - But fetch it **server-side only** (not in React)
   - Only send public keys to frontend

2. **Environment Variables:**
   - For production, use environment variables
   - Don't commit secret keys to Git

3. **Permissions:**
   - ✅ Public can READ payment settings
   - ❌ Public CANNOT modify payment settings
   - Only authenticated admins can edit

---

## 🚀 **Next Steps:**

After creating this collection, I'll update the Payment page to:
1. Fetch payment settings from Strapi
2. Display your actual wallet addresses
3. Show/hide payment tabs based on enabled flags
4. Use your PayPal email
5. Show your support email

---

## 📚 **Example Data:**

```json
{
  "data": {
    "id": 1,
    "stripe_publishable_key": "pk_test_123...",
    "stripe_enabled": true,
    "paypal_email": "your-paypal@example.com",
    "paypal_enabled": true,
    "btc_wallet_address": "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
    "eth_wallet_address": "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
    "usdt_wallet_address": "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
    "crypto_enabled": true,
    "support_email": "support@developermarkethub.com"
  }
}
```

---

**Follow this guide to set up payment settings in Strapi!** 🎉

After you create the collection, let me know and I'll update the Payment page to use your settings!

