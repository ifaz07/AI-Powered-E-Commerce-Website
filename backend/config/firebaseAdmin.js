
let authPromise;

const getFirebaseAuth = () => {
    if (!authPromise) {
        authPromise = (async () => {
            const projectId = process.env.FIREBASE_PROJECT_ID;
            if (!projectId) {
                throw new Error("FIREBASE_PROJECT_ID is not set in backend/.env");
            }
            const { initializeApp, getApps, getApp } = await import("firebase-admin/app");
            const { getAuth } = await import("firebase-admin/auth");
            const app = getApps().length ? getApp() : initializeApp({ projectId });
            return getAuth(app);
        })();
        authPromise.catch(() => {
            authPromise = undefined;
        });
    }
    return authPromise;
};

export const verifyGoogleIdToken = async (idToken) => {
    const auth = await getFirebaseAuth();
    return auth.verifyIdToken(idToken);
};
