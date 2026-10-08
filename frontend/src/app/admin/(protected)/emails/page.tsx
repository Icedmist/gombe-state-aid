import EmailComposer from './EmailComposer'

export const dynamic = 'force-dynamic'

export default function AdminEmails() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Send Branded Email</h2>
      <p className="text-sm text-gray-500 mb-6">Broadcast a summit-branded announcement to registrants via Resend.</p>
      <div className="bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 p-6">
        <EmailComposer />
      </div>
    </div>
  )
}
