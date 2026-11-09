# 📖 Complete GitHub Setup Guide for Challenge Quest

## Overview

Your **Challenge Quest** project is now ready to be uploaded to GitHub! This guide will walk you through every step to get your project on GitHub and accessible to the world.

---

## Prerequisites

Before you start, make sure you have:
- A GitHub account (free at https://github.com)
- Git installed on your computer
- Your project folder initialized with Git (✓ Already done!)

---

## Step-by-Step Instructions

### Step 1: Create a New Repository on GitHub

1. **Log in to GitHub**
   - Go to https://github.com and sign in with your account

2. **Create a new repository**
   - Click the **`+` icon** in the top-right corner
   - Select **"New repository"**
   - Or go directly to: https://github.com/new

3. **Fill in the repository details:**
   - **Repository name**: `challenges-project` (or your preferred name)
   - **Description**: "Interactive brain teasers and puzzle challenges - Logic, Math, Word games, and Riddles"
   - **Visibility**: Select **"Public"** (so anyone can see it)
   - **Initialize repository**: Leave all unchecked (we already have files)
   - Click **"Create repository"**

4. **Copy the repository URL**
   - After creation, you'll see the empty repository page
   - Click the green **"Code"** button
   - Copy the **HTTPS URL** (e.g., `https://github.com/MrWahidR/challenges-project.git`)

---

### Step 2: Connect Your Local Repository to GitHub

Open PowerShell or Command Prompt and navigate to your project folder:

```powershell
cd "C:\Users\wrauf\OneDrive - Greenhead College\python files\challenges-project"
```

Add the GitHub repository as a remote (replace `YOUR_URL` with the URL you copied):

```powershell
git remote add origin https://github.com/MrWahidR/challenges-project.git
```

Verify the remote was added:

```powershell
git remote -v
```

You should see:
```
origin  https://github.com/yourusername/challenges-project.git (fetch)
origin  https://github.com/yourusername/challenges-project.git (push)
```

---

### Step 3: Push Your Code to GitHub

Push your local repository to GitHub:

```powershell
git branch -M main
git push -u origin main
```

**First time pushing?** You may be prompted to authenticate:
- **Option A**: Sign in with your GitHub credentials
- **Option B**: Use a Personal Access Token
  - Go to GitHub Settings > Developer settings > Personal access tokens
  - Create a token with `repo` scope
  - Use it as your password

After successful push, you'll see output like:
```
Enumerating objects: 7, done.
...
To https://github.com/yourusername/challenges-project.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

---

### Step 4: Verify on GitHub

1. Go to your GitHub repository URL:
   ```
   https://github.com/MrWahidR/challenges-project
   ```

2. You should see:
   - ✓ All your files (index.html, style.css, script.js, README.md)
   - ✓ Your initial commit message
   - ✓ A nice README preview on the main page

3. Check the **Actions** tab (if enabled) to see deployment status

---

## Viewing Your Project Live

### Option 1: GitHub Pages (Recommended) 🌐

Make it accessible as a live website:

1. Go to your repository on GitHub
2. Click **Settings** (⚙️ icon in the top-right)
3. Scroll down to **"Pages"** section
4. Under **"Source"**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **"Save"**
6. Wait 1-2 minutes for GitHub to build your site
7. You'll see a green message with your live URL:
   ```
   Your site is live at: https://MrWahidR.github.io/challenges-project
   ```

**Share this URL to let anyone play your challenges!**

### Option 2: View Raw Files

You can also view files directly on GitHub without GitHub Pages:
- Navigate to any file (e.g., `index.html`)
- Click the **Raw** button to see the source code
- Or click **Code** to browse the repository

---

## Quick Command Reference

After your initial setup, here are common commands for future updates:

### Making Changes & Pushing Updates

```powershell
# Navigate to your project
cd "C:\Users\wrauf\OneDrive - Greenhead College\python files\challenges-project"

# Check what changed
git status

# Stage changes
git add .

# Commit with a message
git commit -m "Description of changes"

# Push to GitHub
git push origin main
```

### Pulling Updates (if working with others)

```powershell
git pull origin main
```

### View Commit History

```powershell
git log --oneline
```

---

## Adding More Challenges

To add new challenges to your project:

1. **Edit `script.js`**
   - Locate the `challenges` array at the top
   - Add a new challenge object with this structure:

```javascript
{
    id: 13,
    title: "Your Challenge Title",
    category: "logic", // or "math", "word", "riddle"
    difficulty: "Easy", // or "Medium", "Hard"
    question: "Your challenge question here?",
    options: [
        "Option 1",
        "Option 2",
        "Option 3",
        "Option 4"
    ],
    correctAnswer: 0, // Index of the correct option (0-3)
    explanation: "Explanation of why this is correct..."
}
```

2. **Save and test locally**
3. **Commit and push to GitHub**:

```powershell
git add script.js
git commit -m "Add new challenge: Your Challenge Title"
git push origin main
```

---

## Sharing Your Project

Share your live site with others:

**GitHub Pages URL:**
```
https://yourusername.github.io/challenges-project
```

**GitHub Repository URL:**
```
https://github.com/yourusername/challenges-project
```

Include in social media bios, portfolios, or resumes!

---

## Troubleshooting

### "fatal: not a git repository"
**Solution**: Make sure you're in the correct directory:
```powershell
cd "C:\Users\wrauf\OneDrive - Greenhead College\python files\challenges-project"
```

### "error: permission denied"
**Solution**: You need authentication. Set up:
1. Personal Access Token: https://github.com/settings/tokens
2. Or configure SSH keys: https://github.com/settings/ssh

### "fatal: remote origin already exists"
**Solution**: If you get this, your remote is already set up. Check with:
```powershell
git remote -v
```

### GitHub Pages not showing up
**Solution**: Wait 1-2 minutes after enabling Pages. Clear browser cache (Ctrl+Shift+Delete).

---

## Project Structure on GitHub

Your repository will look like:

```
challenges-project/
├── .git/           # Git metadata (automatically created)
├── .gitignore      # Files to ignore
├── README.md       # Project documentation
├── index.html      # Main file
├── style.css       # Styling
└── script.js       # Game logic
```

---

## Next Steps

1. ✅ Push your project to GitHub
2. ✅ Enable GitHub Pages
3. ✅ Test your live site
4. 📝 Add more challenges
5. 🚀 Share with friends!

---

## Additional Resources

- **GitHub Help**: https://docs.github.com
- **Git Documentation**: https://git-scm.com/doc
- **GitHub Pages Guide**: https://pages.github.com
- **Markdown Guide**: https://www.markdownguide.org

---

## Example Commands for Your Project

```powershell
# Navigate to project
cd "C:\Users\wrauf\OneDrive - Greenhead College\python files\challenges-project"

# Check git status
git status

# Add all changes
git add .

# Commit with message
git commit -m "Add new challenges and update styling"

# Push to GitHub
git push origin main

# View commit history
git log --oneline --graph
```

---

## Success! 🎉

Once you see your project live on GitHub Pages, you've successfully:
- ✅ Created a repository
- ✅ Committed code with Git
- ✅ Deployed to GitHub
- ✅ Made it live on the web
- ✅ Created a shareable URL

Your Challenge Quest is now accessible to anyone with the link!

---

**Questions?** Check GitHub's official documentation or reach out for help!

Happy Coding! 🚀
