# Deployment Guide

## 1. MongoDB Atlas Setup
1. Create a free account at [mongodb.com/atlas](https://www.mongodb.com/atlas).
2. Create a new Cluster named `Cluster0`.
3. In **Network Access**, click "Add IP Address" and select **"Allow Access From Anywhere"** (required for Vercel).
4. In **Database Access**, create a user with "Read and write to any database" permissions.
5. Get your connection string: `mongodb+srv://hayatali123786:Hayat%231234%231234@cluster0.xkt1yq8.mongodb.net/?appName=Cluster0`
   > [!NOTE]
   > The `#` characters in your password have been encoded to `%23` for the connection string.

## 2. Vercel Deployment
1. Import your repository to Vercel.
2. In the "Environment Variables" section, add the following:
   - `MONGODB_URI`: `mongodb+srv://hayatali123786:Hayat%231234%231234@cluster0.xkt1yq8.mongodb.net/?appName=Cluster0`
   - `GOOGLE_GENAI_API_KEY`: (Optional) Your Google AI API key.
3. Click **Deploy**.

## 3. How to Add Projects to Your Database

To add your "Bank Management System" and other projects to the live database, run this command in your terminal:

```powershell
node src/lib/seed.js "mongodb+srv://hayatali123786:Hayat%231234%231234@cluster0.xkt1yq8.mongodb.net/?appName=Cluster0"
```

> [!TIP]
> This script will automatically:
> 1. Connect to your Atlas database.
> 2. Delete any old placeholder projects.
> 3. Add your real projects like the **Bank Management System**.
> 4. Add your **Skills** list.
