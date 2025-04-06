import Link from 'next/link';

export default function CampaignCard({ campaign }) {
  return (
    <div className="border p-4 rounded-xl bg-white shadow-sm relative">
      <h3 className="font-bold text-lg mb-1">{campaign.title}</h3>
      <p className="text-sm text-gray-600 mb-2">by {campaign.creator}</p>
      <p className="text-sm">Raised: ${campaign.funded}</p>
      <p className="text-sm">ROI: {campaign.roi_multiplier}x</p>
      <Link href={`/campaign/${campaign.id}`}>
        <p className="text-blue-600 mt-2 hover:underline text-sm">View Campaign →</p>
      </Link>
      {campaign.is_index_backed && (
        <span className="absolute top-2 right-2 text-xs bg-indigo-600 text-white px-2 py-1 rounded-full">
          🎖 Index-Backed
        </span>
      )}
    </div>
  );
}