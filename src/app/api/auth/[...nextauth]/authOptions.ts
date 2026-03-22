import CredentialsProvider from "next-auth/providers/credentials";
import userLogIn from "@/libs/userLogIn";
import getUserProfile from "@/libs/getUserProfile";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, _req) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        try {
          const loginResult = await userLogIn(
            credentials.email,
            credentials.password
          );

          const token =
            loginResult?.token ??
            loginResult?.data?.token ??
            loginResult?.data;

          if (!token || typeof token !== "string") {
            return null;
          }

          const profileResult = await getUserProfile(token);
          const profile = profileResult.data;

          return {
            id: profile._id,
            _id: profile._id,
            name: profile.name,
            email: profile.email,
            role: profile.role,
            token,
          };
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt" as const,
  },
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token._id = user._id;
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.role = user.role;
        token.token = user.token;
      }
      return token;
    },
    async session({ session, token }: any) {
      session.user = {
        _id: token._id as string,
        name: token.name as string,
        email: token.email as string,
        role: token.role as string,
        token: token.token as string,
      };
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
