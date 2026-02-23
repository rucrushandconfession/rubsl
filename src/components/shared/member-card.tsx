import { Card, CardContent } from "@/components/ui/card";
import { SanityImage } from "@/components/shared/sanity-image";
import type { CommitteeMember } from "@/sanity/types";

export function MemberCard({ member }: { member: CommitteeMember }) {
  return (
    <Card>
      <SanityImage image={member.photo} alt={member.name} className="h-56 w-full rounded-t-xl object-cover" />
      <CardContent className="pt-4">
        <h3 className="text-lg font-bold">{member.name}</h3>
        <p className="text-sm text-teal-700">{member.role}</p>
        {member.department ? <p className="text-sm text-slate-600">{member.department}</p> : null}
      </CardContent>
    </Card>
  );
}
