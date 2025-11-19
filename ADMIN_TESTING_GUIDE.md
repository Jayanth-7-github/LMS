# Assignment 8.23: Admin User Flow Walkthrough

## Testing Checklist for Admin User Journey

This document provides a comprehensive testing guide for verifying the admin user experience in the LMS application.

---

## Prerequisites

- MongoDB connection is active
- Application is running on `http://localhost:3000`
- Use **Incognito/Private mode** for clean testing sessions

---

## Test 1: Admin Sign Up Flow

### Steps:

1. Navigate to `http://localhost:3000/signup`
2. Fill in the form:
   - **Full Name**: `Admin User` (or any name)
   - **Email**: `admin@test.com` (or any unique email)
   - **Password**: `admin123` (minimum 6 characters)
   - **Role**: Select **Admin** from dropdown
3. Click **Sign Up** button

### Expected Behavior:

✅ **Toast Sequence**:

- First: "Creating your account..." (loading toast)
- Then: "Registration successful! Logging you in..." (loading toast)
- Finally: "Welcome Admin User! Redirecting to your dashboard..." (success toast with green icon)

✅ **Redirection**:

- User is automatically redirected to `/admin_dashboard`

✅ **Terminal/Console Logs**:

- Server console shows: MongoDB user creation with `_id`, `email`, `role: admin`
- Server console shows: Session user data logged from admin dashboard page

### Screenshot Captures:

- [ ] Sign up form filled with admin role
- [ ] Toast notifications appearing in top-right corner
- [ ] Admin dashboard after successful auto-login
- [ ] Terminal showing user creation logs

---

## Test 2: Admin Login Flow

### Steps:

1. Log out if currently logged in (click Logout in sidebar)
2. Navigate to `http://localhost:3000/signin`
3. Enter credentials:
   - **Email**: `admin@test.com`
   - **Password**: `admin123`
4. Click **Sign In** button

### Expected Behavior:

✅ **Toast Sequence**:

- First: "Signing you in..." (loading toast)
- Then: "Login successful! Redirecting..." (success toast)

✅ **Redirection**:

- User lands on `/admin_dashboard`

✅ **UI Elements**:

- Sidebar shows admin navigation options
- Dashboard header displays "Admin Dashboard"

### Screenshot Captures:

- [ ] Login form with admin credentials
- [ ] Loading toast during sign in
- [ ] Success toast message
- [ ] Admin dashboard view

---

## Test 3: Protected Route Access (Admin → Admin Dashboard)

### Steps:

1. While logged in as admin, navigate to `/admin_dashboard`
2. Observe the page loads successfully

### Expected Behavior:

✅ **Access Granted**:

- Page loads without any redirects
- Admin content is visible
- No middleware logs in terminal (authorized access)

✅ **Server Console Log**:

- Shows session user object: `{ email: 'admin@test.com', name: 'Admin User', role: 'admin' }`

### Screenshot Captures:

- [ ] Admin dashboard displaying correctly
- [ ] Server console showing session data

---

## Test 4: Unauthorized Route Access (Admin → Student Dashboard)

### Steps:

1. While logged in as admin, manually navigate to `/student_dashboard` in the browser address bar
2. Observe the behavior

### Expected Behavior:

✅ **Access Denied**:

- Immediate redirect back to `/admin_dashboard`
- Admin cannot view student dashboard

✅ **Middleware Log** (in terminal):

```
[MIDDLEWARE] User with role admin tried to access student dashboard. Redirecting.
```

✅ **No Error Messages**:

- Redirect happens silently
- No crash or error page

### Screenshot Captures:

- [ ] Browser address bar showing `/student_dashboard` attempt
- [ ] Immediate redirect back to `/admin_dashboard`
- [ ] Terminal showing middleware log with role mismatch

---

## Test 5: Unauthenticated Access Test

### Steps:

1. Open a new incognito window
2. Navigate directly to `http://localhost:3000/admin_dashboard` (without logging in)

### Expected Behavior:

✅ **Redirect to Sign In**:

- User is redirected to `/signin`
- URL may include callback parameter: `/signin?callbackUrl=/admin_dashboard`

✅ **Middleware Log**:

```
[MIDDLEWARE] No token found. Redirecting to /signin from /admin_dashboard
```

✅ **After Login**:

- If you sign in from this redirect, you should land back on `/admin_dashboard`

### Screenshot Captures:

- [ ] Direct navigation attempt to admin dashboard
- [ ] Redirect to signin page
- [ ] Terminal middleware log

---

## Test 6: Logout Flow

### Steps:

1. While logged in as admin on `/admin_dashboard`
2. Click **Logout** button in the sidebar
3. Observe the logout process

### Expected Behavior:

✅ **Toast Message**:

- "Logging out..." (loading toast appears)

✅ **Redirection**:

- User is redirected to `/signin` page

✅ **Session Cleared**:

- Attempting to visit `/admin_dashboard` again redirects to `/signin`
- User must log in again to access protected routes

✅ **Clean State**:

- No residual session data
- Fresh login required

### Screenshot Captures:

- [ ] Logout button in sidebar
- [ ] "Logging out..." toast notification
- [ ] Redirect to signin page
- [ ] Attempting to access admin dashboard shows redirect to signin

---

## Test 7: Invalid Credentials Test

### Steps:

1. Go to `/signin`
2. Enter incorrect credentials:
   - **Email**: `admin@test.com`
   - **Password**: `wrongpassword`
3. Click Sign In

### Expected Behavior:

✅ **Toast Error Message**:

- Red error toast appears: "Invalid credentials. Please check your email and password."

✅ **No Redirect**:

- User remains on signin page
- Form is still accessible for retry

✅ **No Console Errors**:

- Error handled gracefully
- No application crash

### Screenshot Captures:

- [ ] Login form with wrong password
- [ ] Red error toast in top-right corner
- [ ] User remains on signin page

---

## Test 8: Empty Form Validation

### Steps:

1. Go to `/signin`
2. Leave email and/or password fields empty
3. Click Sign In

### Expected Behavior:

✅ **Toast Error**:

- "Email and password are required." (red error toast)

✅ **No API Call**:

- Form validation prevents submission
- No network request made

### For Signup Page:

✅ **Toast Error**:

- "All fields are required." if any field is empty

### Screenshot Captures:

- [ ] Empty form submission attempt
- [ ] Validation error toast

---

## Test 9: Already Logged In Redirect

### Steps:

1. Log in as admin successfully
2. While still logged in, navigate to `/signin` again

### Expected Behavior:

✅ **Automatic Redirect**:

- Middleware detects existing session
- Redirects to `/admin_dashboard` immediately
- Cannot access signin page while authenticated

✅ **No Toast Messages**:

- Silent redirect (no user feedback needed)

### Screenshot Captures:

- [ ] Attempt to visit signin while logged in
- [ ] Automatic redirect to admin dashboard

---

## Key Features Demonstrated

### 1. **Authentication Flow**

- Secure signup with bcrypt password hashing
- Role-based auto-login after registration
- NextAuth credentials provider handling sessions

### 2. **Route Protection**

- **Server-side**: Admin dashboard uses `getServerSession()` for protection
- **Middleware**: Global JWT token verification before page loads
- Unauthorized access automatically redirected

### 3. **Role-Based Access Control**

- Admin can ONLY access `/admin_dashboard`
- Admin CANNOT access `/student_dashboard`
- Middleware enforces role restrictions globally

### 4. **UI Feedback (Toast Notifications)**

- **Login**: Loading → Success with redirection
- **Signup**: Creating account → Logging in → Welcome message
- **Logout**: Logging out message
- **Errors**: Invalid credentials, empty fields, registration failures
- **Styling**: Dark background (#363636), green success icons, red error icons, 4s duration

### 5. **Middleware Behavior**

- Logs unauthorized access attempts with role information
- Redirects unauthenticated users to `/signin` with callback URL
- Prevents authenticated users from accessing `/signin`
- Enforces role-specific dashboard access

### 6. **Session Management**

- JWT tokens stored securely in cookies
- Session persists across page refreshes
- Clean logout clears session completely
- Role information embedded in JWT and session

---

## Terminal Logs to Monitor

### During Signup:

```
MongoDB connection established
User model loaded successfully: true
User registered: { _id: '...', email: 'admin@test.com', role: 'admin', ... }
```

### During Admin Dashboard Access:

```
Session User: { email: 'admin@test.com', name: 'Admin User', role: 'admin' }
```

### During Unauthorized Access:

```
[MIDDLEWARE] User with role admin tried to access student dashboard. Redirecting.
```

### During Unauthenticated Access:

```
[MIDDLEWARE] No token found. Redirecting to /signin from /admin_dashboard
```

---

## Submission Requirements

### Your explanation should cover:

1. **Login/Signup Process**:

   - How form data is submitted to API routes
   - How NextAuth verifies credentials against MongoDB
   - How bcrypt compares hashed passwords
   - How JWT tokens are generated and stored in cookies

2. **Admin Redirection After Authentication**:

   - How role is embedded in JWT token via NextAuth callbacks
   - How login/signup components check role and use `router.push()`
   - How middleware redirects based on role when accessing signin while authenticated

3. **Student Dashboard Access Attempt**:

   - How middleware intercepts the request before page loads
   - How JWT token is decoded to extract user role
   - How middleware compares role against route requirements
   - How redirect to appropriate dashboard occurs with console log

4. **Global Route Protection**:

   - How middleware runs on every request matching the config matcher
   - How `getToken()` extracts and verifies JWT from cookies
   - How unauthenticated users are redirected to `/signin`
   - How callbackUrl preserves intended destination

5. **Logout Process**:

   - How `signOut()` from next-auth/react is triggered
   - How session is cleared from cookies and server
   - How `callbackUrl: '/signin'` redirects user
   - How subsequent protected route access requires new login

6. **Toast Messages**:

   - How react-hot-toast is configured globally in layout.js
   - Where toast calls appear (login, signup, logout components)
   - How toast states transition (loading → success/error)
   - How toast styling and duration are customized

7. **Terminal Logs**:
   - What middleware logs show for unauthorized access
   - What server console shows for session data in admin dashboard
   - What MongoDB connection logs display on startup

---

## Testing Tips

✅ **Use Incognito Mode**: Ensures no cached sessions interfere with testing

✅ **Keep DevTools Open**: Monitor network requests, console logs, and cookies

✅ **Terminal Monitoring**: Watch for middleware logs and server-side logs

✅ **Test Edge Cases**:

- Wrong credentials
- Empty forms
- Direct URL navigation
- Logout and immediate access attempts

✅ **Screenshot Everything**: Capture all toast messages, redirects, and logs for submission

---

## Common Issues & Troubleshooting

### Issue: "No token found" every time

**Solution**: Check if NextAuth is properly configured with NEXTAUTH_SECRET in `.env.local`

### Issue: Toasts not appearing

**Solution**: Verify `<Toaster />` component is in `app/layout.js` and react-hot-toast is installed

### Issue: Always redirected to signin

**Solution**: Check middleware matcher config and ensure JWT secret matches in all places

### Issue: Can access wrong dashboard

**Solution**: Verify middleware role checks and ensure role is properly saved in JWT callbacks

---

## Video/Screenshot Walkthrough Structure

Your submission should demonstrate:

1. **Opening sequence**: Show clean browser/incognito mode
2. **Signup as admin**: Form filling → toasts → auto-login → admin dashboard
3. **Logout**: Click logout → toast → redirect to signin
4. **Login as admin**: Enter credentials → toasts → admin dashboard
5. **Unauthorized access**: Navigate to student dashboard → redirect → terminal log
6. **Unauthenticated access**: New incognito → direct admin URL → redirect to signin
7. **Invalid credentials**: Wrong password → error toast
8. **Terminal logs**: Show middleware logs and session logs throughout

---

## Conclusion

This comprehensive testing validates that your LMS has:

- ✅ Secure authentication with encrypted passwords
- ✅ Role-based access control enforced at multiple layers
- ✅ Global route protection via middleware
- ✅ Excellent user experience with toast notifications
- ✅ Clean session management with proper logout

**Your admin user journey is production-ready!** 🎉

Next step: Assignment 8.24 will test the same features from a student's perspective.
