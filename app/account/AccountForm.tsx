import { Session } from "@supabase/supabase-js";

export default function AccountForm({ session }: { session: Session | null }) {
  return <>
    <div>
      {session?.user.email}
    </div>
  </>

}
