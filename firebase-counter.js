(function () {
  const unavailable = () => Promise.reject(new Error("Firebase is not configured."));
  const api = {
    available: false,
    register: unavailable,
    subscribe(callback) {
      callback(null);
      return () => {};
    }
  };

  window.FinTeenLearners = api;

  const config = window.FINTEEN_FIREBASE_CONFIG;
  const configured = config && config.projectId && !config.projectId.startsWith("REPLACE_");
  if (!window.firebase || !configured) return;

  try {
    const app = firebase.apps.length ? firebase.app() : firebase.initializeApp(config);
    const db = app.firestore();
    const statsRef = db.collection("stats").doc("global");
    api.available = true;

    api.subscribe = callback => statsRef.onSnapshot(snapshot => {
      const count = snapshot.exists ? snapshot.data().learnersJoined : 0;
      callback(Number.isFinite(count) ? count : null);
    }, () => callback(null));

    api.register = async name => {
      const normalizedName = name.trim().toLowerCase().replace(/\s+/g, " ");
      if (!normalizedName) return false;
      const learnerId = encodeURIComponent(normalizedName);
      const learnerRef = db.collection("learners").doc(learnerId);

      return db.runTransaction(async transaction => {
        const learnerSnapshot = await transaction.get(learnerRef);
        if (learnerSnapshot.exists) return false;

        const statsSnapshot = await transaction.get(statsRef);
        const currentCount = statsSnapshot.exists
          ? Number(statsSnapshot.data().learnersJoined) || 0
          : 0;

        transaction.set(learnerRef, {
          name: name.trim(),
          joinedAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        transaction.set(statsRef, { learnersJoined: currentCount + 1 }, { merge: true });
        return true;
      });
    };
  } catch (error) {
    console.error("FinTeen learner counter could not start:", error);
  }
})();
