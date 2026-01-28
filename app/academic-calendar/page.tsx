export default function AcademicCalendar() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-center">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=c_54db226151de9dfe5cf3f83f03fe48613fd27ac3b91b4d0d9469988f4ea55b38%40group.calendar.google.com&ctz=Asia%2FKolkata&mode=AGENDA"
          className="w-full h-[800px] border-2 border-gray-300 rounded-lg"
          title="Academic Calendar"
        />
      </div>
    </div>
  );
}
