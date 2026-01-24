import Image from 'next/image';

export default function YRC() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-center">
        <iframe
          src="/pdf/YRC.pdf"
          className="w-full h-[800px] border-2 border-gray-300 rounded-lg"
          title="Youth Red Cross"
        />
      </div>
    </div>
  );
}
