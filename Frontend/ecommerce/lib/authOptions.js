import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
        token: { label: "Token", type: "hidden" },
      },
      async authorize(credentials, req) {
        const token = credentials.token;
        if (token) {
          const user = {
            id: "1",
            email: credentials.email,
            password: credentials.password,
            token: credentials.token,
          };
          return user;
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};
