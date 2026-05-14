export default function DocumentsPage() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Dokumen Saya</h1>
      </div>

      {/* Upload Area */}
      <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-blue-400 transition-colors cursor-pointer">
        <div className="flex flex-col items-center gap-3">
          <div className="text-5xl">📄</div>
          <h3 className="text-lg font-semibold">Upload Dokumen</h3>
          <p className="text-gray-500 text-sm">
            PDF, DOCX, atau TXT — maksimal 10MB
          </p>
          <label className="mt-2 px-6 py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition-colors">
            Pilih File
            <input
              type="file"
              className="hidden"
              accept=".pdf,.docx,.txt"
            />
          </label>
        </div>
      </div>

      {/* Empty State */}
      <div className="mt-12 text-center text-gray-400">
        <p>Belum ada dokumen. Upload dokumen pertamamu!</p>
      </div>
    </div>
  )
}