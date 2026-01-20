import admin from 'firebase-admin';

let db: admin.firestore.Firestore;
let adminAuth: admin.auth.Auth;
let adminStorage: admin.storage.Storage;

// Functie pentru initializare lazy
function initializeFirebase() {
  if (!admin.apps.length) {
    try {
      // Initializeaza Firebase Admin cu environment variables
      const serviceAccountKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
      
      if (!serviceAccountKey) {
        throw new Error('FIREBASE_SERVICE_ACCOUNT_KEY nu este setat in environment variables');
      }

      let serviceAccount;
      try {
        serviceAccount = JSON.parse(serviceAccountKey);
      } catch (parseError) {
        throw new Error('FIREBASE_SERVICE_ACCOUNT_KEY nu este un JSON valid');
      }

      // Fix newlines in private_key
      if (serviceAccount.private_key) {
        serviceAccount.private_key = serviceAccount.private_key.replace(/\\n/g, '\n');
      }

      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        projectId: process.env.FIREBASE_PROJECT_ID,
      });

      console.log('Firebase Admin initializat cu succes');
    } catch (error) {
      console.error('Eroare la initializarea Firebase Admin:', error);
      throw error;
    }
  }

  db = admin.firestore();
  adminAuth = admin.auth();
  adminStorage = admin.storage();
}

// Functie helper pentru a obtine database
export function getDb() {
  if (!db) {
    initializeFirebase();
  }
  return db;
}

// Functie helper pentru a obtine auth
export function getAdminAuth() {
  if (!adminAuth) {
    initializeFirebase();
  }
  return adminAuth;
}

// Functie helper pentru a obtine storage
export function getAdminStorage() {
  if (!adminStorage) {
    initializeFirebase();
  }
  return adminStorage;
}

// Functie helper pentru a obtine colectia de comenzi pentru un tenant
export function getOrdersCollection() {
  return getDb().collection('orders');
}

// Functie helper pentru a obtine colectia de users
export function getUsersRootCollection() {
  return getDb().collection('users');
}

// Functie helper pentru a crea un timestamp
export function serverTimestamp() {
  return admin.firestore.FieldValue.serverTimestamp();
}

// Functie helper pentru a genera un ID unic
export function generateId() {
  return getDb().collection('_').doc().id;
}

export default admin;
