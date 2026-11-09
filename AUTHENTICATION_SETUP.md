# 🔐 GitHub Authentication Setup

## The Problem

When you try to push to GitHub, you get:
```
fatal: unable to get password from user
```

This is because GitHub no longer accepts passwords for command-line access. You need a **Personal Access Token**.

---

## Solution: Create a Personal Access Token

### Step 1: Go to GitHub Settings

1. Go to: https://github.com/settings/tokens
2. Or manually: GitHub (top-right) → Settings → Developer settings → Personal access tokens → Tokens (classic)

### Step 2: Create a New Token

1. Click **"Generate new token"** → **"Generate new token (classic)"**
2. **Token name**: `Git Push Token` (or whatever you want)
3. **Expiration**: Select `90 days` (or your preference)
4. **Select scopes**: Check only ✓ `repo`
   - This gives access to public and private repos
5. Click **"Generate token"** at the bottom

### Step 3: Copy Your Token

⚠️ **IMPORTANT**: You'll only see this token ONCE!

1. Click the copy button (📋) next to your token
2. **Paste it somewhere safe temporarily** (Notepad is fine for now)
3. This is your new "password" for git

---

## Step 4: Push to GitHub Using Your Token

Open PowerShell and run:

```powershell
cd "C:\Users\wrauf\OneDrive - Greenhead College\python files\challenges-project"

git push -u origin main
```

When it asks for your password, **paste your Personal Access Token** (not your GitHub password).

---

## Example

```powershell
cd "C:\Users\wrauf\OneDrive - Greenhead College\python files\challenges-project"

git push -u origin main

# It will ask:
# Username for 'https://github.com': MrWahidR
# Password for 'https://MrWahidR@github.com': [PASTE YOUR TOKEN HERE]
```

---

## Alternative: Store Token Permanently (Windows)

If you want to avoid entering the token every time:

### Use Git Credential Manager

1. Download Git from: https://git-scm.com
2. Choose "Git Credential Manager" during installation
3. Run git push
4. A browser window opens for you to sign in with GitHub
5. Token is saved automatically

Or:

### Store Token in Windows Credential Manager

1. Open **Credential Manager** (search Windows Start menu)
2. Click **"Windows credentials"**
3. Click **"Add a generic credential"**
   - **Internet or network address**: `https://github.com`
   - **Username**: `MrWahidR`
   - **Password**: Your Personal Access Token
4. Click **Save**
5. Next time you push, it uses this automatically

---

## Testing Your Setup

Once you have your token, try this:

```powershell
cd "C:\Users\wrauf\OneDrive - Greenhead College\python files\challenges-project"

git push -u origin main
```

**Success looks like:**
```
Enumerating objects: 7, done.
Counting objects: 100% (7/7), done.
...
To https://github.com/MrWahidR/challenges-project.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

---

## Common Issues

### "Invalid username or password"
- Make sure you copied the full token correctly
- No extra spaces before/after
- Check that you're using the token (not your GitHub password)

### "Authentication failed"
- Token might have expired (check expiration date)
- Token might not have `repo` scope selected
- Create a new token with proper scopes

### Still having issues?
- Go back to https://github.com/settings/tokens
- Delete the old token
- Create a new one with `repo` scope
- Try pushing again

---

## Your Setup

**Username:** `MrWahidR`  
**Repository URL:** `https://github.com/MrWahidR/challenges-project.git`  
**Your Token:** (Keep it private! Don't share it.)

---

## Quick Commands to Try

```powershell
# Navigate to project
cd "C:\Users\wrauf\OneDrive - Greenhead College\python files\challenges-project"

# Test your git remote is correct
git remote -v

# Push to GitHub (will ask for token)
git push -u origin main
```

---

**Once this works, you're done with authentication! 🎉**

Your Challenge Quest will be on GitHub!
