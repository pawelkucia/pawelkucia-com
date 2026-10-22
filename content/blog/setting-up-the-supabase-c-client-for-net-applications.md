---
title: "Setting Up the Supabase C# Client for .NET Applications"
description: "A practical guide to using Supabase in ASP.NET Core, Console Apps, Desktop, Unity, and Mobile projects with C#"
date: 2026-10-22
tags: [dotnet, supabase, csharp, aspnetcore, unity]
cover: true
---

## Why Use Supabase in .NET Projects?

Supabase offers a comprehensive backend solution with real-time databases, authentication, and storage. Its C# client allows seamless integration across various .NET platforms, enabling developers to manage backend services efficiently.

## Supported Platforms

- ASP.NET Core
- Console Applications
- Desktop Applications
- Unity Game Development
- Mobile Apps

## Setting Up the Supabase C# Client

1. **Install the Supabase Client**
   Use NuGet to add the Supabase client package to your project.

   ```bash
   dotnet add package Supabase
   ```

2. **Initialize the Client**
   Instantiate the Supabase client with your project's URL and API Key.

   ```csharp
   var client = new Supabase.Client("https://your-project.supabase.co", "public-anon-key");
   await client.InitializeAsync();
   ```

3. **Authentication and Database Usage**
   Utilize the client's authentication features and interact with your database through strong-typed queries.

4. **Platform-Specific Notes**
   - **Unity:** Ensure .NET Standard compatibility or use experimental support.
   - **Mobile:** Integrate within Xamarin or MAUI projects with proper async patterns.

## Conclusion

The Supabase C# client empowers .NET developers to build full-stack applications with minimal backend setup, across multiple platforms including web, desktop, mobile, and game development environments.