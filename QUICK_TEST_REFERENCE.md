# Quick Testing Reference - Assignment 8.23

## 🚀 Your App is Running on: `http://localhost:3001`

---

## 📋 Quick Test Checklist

### 1️⃣ Admin Signup

- URL: `http://localhost:3001/signup`
- Fill: Name, Email, Password, Role: **Admin**
- Watch for 3 toasts: Creating → Logging in → Welcome
- Should land on `/admin_dashboard`

### 2️⃣ Admin Login

- URL: `http://localhost:3001/signin`
- Credentials: Your admin email/password
- Watch for 2 toasts: Signing in → Success
- Should land on `/admin_dashboard`

### 3️⃣ Unauthorized Access Test

- While logged in as admin, go to: `http://localhost:3001/student_dashboard`
- Should redirect to `/admin_dashboard`
- Terminal shows: `[MIDDLEWARE] User with role admin tried to access student dashboard`

### 4️⃣ Logout Test

- Click **Logout** in sidebar
- Toast: "Logging out..."
- Redirects to `/signin`
- Can't access admin dashboard without login

### 5️⃣ Unauthenticated Test

- Open incognito window
- Go directly to: `http://localhost:3001/admin_dashboard`
- Should redirect to `/signin`
- Terminal shows: `[MIDDLEWARE] No token found`

### 6️⃣ Invalid Credentials

- Go to `/signin`
- Enter wrong password
- Red toast: "Invalid credentials"

---

## 📸 Screenshots Needed

✅ Signup form with admin role selected  
✅ Toast notifications (all states)  
✅ Admin dashboard view  
✅ Terminal showing middleware logs  
✅ Unauthorized access redirect  
✅ Logout flow

---

## 🔍 Terminal Logs to Capture

### Middleware Protection:

```
[MIDDLEWARE] User with role admin tried to access student dashboard. Redirecting.
[MIDDLEWARE] No token found. Redirecting to /signin from /admin_dashboard
```

### Session Data:

```
Session User: { email: 'admin@test.com', name: 'Admin User', role: 'admin' }
```

### MongoDB:

```
MongoDB connection established
User registered: { _id: '...', email: '...', role: 'admin' }
```

---

## 💡 Testing Tips

1. **Use Incognito** for clean sessions
2. **Keep Terminal visible** to see middleware logs
3. **Watch top-right corner** for toasts
4. **Test in this order**: Signup → Logout → Login → Unauthorized → Unauthenticated

---

## 📝 What to Explain in Submission

1. **How login/signup works**: Form → API → NextAuth → MongoDB → JWT token
2. **How admin redirect works**: Role in JWT → callbacks → router.push
3. **How middleware protects routes**: Token verification → role check → redirect
4. **How logout works**: signOut() → clear session → redirect to signin
5. **How toasts work**: react-hot-toast in layout → toast calls in components
6. **What terminal logs show**: Middleware actions, session data, unauthorized attempts

---

## 🎯 Expected Behavior Summary

| Action               | Expected Result | Toast                           | Redirect         |
| -------------------- | --------------- | ------------------------------- | ---------------- |
| Admin signup         | Auto-login      | Creating → Logging in → Welcome | /admin_dashboard |
| Admin login          | Success         | Signing in → Success            | /admin_dashboard |
| Access student route | Denied          | None                            | /admin_dashboard |
| Logout               | Clear session   | Logging out                     | /signin          |
| No auth → admin      | Blocked         | None                            | /signin          |
| Wrong password       | Error           | Invalid credentials             | Stay on /signin  |

---

For full details, see `ADMIN_TESTING_GUIDE.md`

**Good luck with your testing! 🎉**
