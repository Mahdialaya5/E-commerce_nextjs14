import NextAuth from "next-auth"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
        name: "Credentials",
        credentials: {
          email: { label: "email", type: "email" }, 
          password: { label: "password", type: "password" },
        },
        async authorize(credentials, req) {
          const res = await fetch(`http://localhost:3000/api/user/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
          });
  
          const data = await res.json();
          console.log("Ответ от API:", data);
  
          if (res.ok) {
            return {
          accessToken: data.access, 
             
            } 
          }
  
          if (!res.ok) {
            console.error("API request error:", data);
            return null; 
          }
        },
      }),
  ],
})