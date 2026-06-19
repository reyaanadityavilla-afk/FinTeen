# FinTeen global learner counter

1. Create a Firebase project and add a Web App.
2. Enable Firestore Database.
3. Copy the Web App configuration into `firebase-config.js`.
4. Deploy the included rules:

   ```sh
   firebase deploy --only firestore:rules
   ```

The app uses the normalized username as the unique learner identity because
FinTeen currently signs in with username and password rather than email. A
repeat sign-in, refresh, or another device using the same username does not
increase the counter.

The transaction creates `learners/{normalizedUsername}` and increments
`stats/global.learnersJoined` together. The interface displays `—` whenever
Firebase is unavailable or not configured.

For production-grade abuse prevention, move learner registration into a Cloud
Function and use Firebase Authentication. Client-only Firestore rules can limit
which fields change, but cannot prove that an unauthenticated browser represents
a real person.
