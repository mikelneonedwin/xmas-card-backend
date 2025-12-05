import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
import { env } from "../env";

const app =
  getApps()[0] ??
  initializeApp({
    credential: cert({
      clientEmail: env.FIREBASE_CLIENT_EMAIL,
      privateKey: env.FIREBASE_PRIVATE_KEY,
      projectId: env.FIREBASE_PROJECT_ID,
    }),
  });

export const auth = getAuth(app);
export const db = getFirestore(app);
