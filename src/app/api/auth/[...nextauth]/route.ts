import NextAuth from "next-auth";
import { authOptions } from "~/needs-refactoring/pages/api/auth/[...nextauth]";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
