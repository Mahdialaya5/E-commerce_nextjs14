
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route"
import Logout from "../../components/Logout"


export default async function Page() {

  const session = await getServerSession(authOptions);

  return (
    <>
      <p>email:{session&&session.user.email}</p>
        <Logout/>
      </>
  );
}
