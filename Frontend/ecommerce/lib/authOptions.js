import CredentialsProvider from "next-auth/providers/credentials";
import userService from "@/services/user-service";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const response = await userService.signIn({
          email: credentials.email,
          password: credentials.password,
        });

        if (!response || !response.data) {
          throw new Error("An error occurred while trying to sign in");
        }

        const token = response.data.token;
        if (token) {
          const user= response.data
          user.email= credentials.email
          return user
          // return {
          //   id: "1",
          //   name: "Test User",
          //   email: credentials.email,
          //   token
          // };
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
