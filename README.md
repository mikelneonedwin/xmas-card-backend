# xmas-card-backend

This is the backend service powering the Christmas Card platform — an app that lets users create and share personalized Christmas greetings. Users can upload or record a short video, attach a short text message, and receive a unique link they can send to loved ones.

The backend handles the core functionality of the platform, including:

### • Video storage

Uses **Cloudinary** to upload and store user-submitted videos.

### • Card creation

Stores card metadata such as the video URL, message, and slug in **Firestore** via Firebase Admin SDK.

### • Card retrieval

Provides a simple slug-based retrieval system so each card can be accessed through a shareable link.

### • Environment safety

All secrets (Cloudinary + Firebase Service Account) are validated at runtime to prevent misconfigured deployments.

### • Express server

A lightweight Express app exposes the HTTP endpoints required to create and fetch Christmas cards.
