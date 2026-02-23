import { PageHero } from "@/components/shared/page-hero";
import { MemberCard } from "@/components/shared/member-card";
import { Card } from "@/components/ui/card";
import { getCommittee } from "@/sanity/api";

export const metadata = { title: "কমিটি" };

export default async function CommitteePage() {
  const members = await getCommittee();
  return (
    <div>
      <PageHero title="কমিটি" description="বর্তমান কমিটির দায়িত্বশীল সদস্যদের তালিকা।" />
      {members.length ? <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{members.map((m) => <MemberCard key={m._id} member={m} />)}</div> : <Card className="p-8 text-center text-slate-500">কমিটি তথ্য পাওয়া যায়নি।</Card>}
    </div>
  );
}
