import Image from 'next/image';

export default function ValueAddedCourse() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-center">
        <iframe
          src="/pdf/VALUE-ADDED-COURSE-WEBSITE-LINK.pdf"
          className="w-full h-[800px] border-2 border-gray-300 rounded-lg"
          title="Value Added Course"
        />
      </div>
    </div>
  );
}
