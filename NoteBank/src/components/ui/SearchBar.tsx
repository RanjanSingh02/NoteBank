import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Stream, Subject, Semester } from '../../types';

type SearchBarProps = {
  streams: Stream[];
  subjects: Subject[];
  semesters: Semester[];
  onSearch: (search: string, filters: {
    stream?: string;
    subject?: string;
    semester?: string;
  }) => void;
  className?: string;
};

const SearchBar: React.FC<SearchBarProps> = ({
  streams,
  subjects,
  semesters,
  onSearch,
  className = '',
}) => {
  const [searchText, setSearchText] = useState('');
  const [selectedStream, setSelectedStream] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('');

  const filteredSubjects = selectedStream
    ? subjects.filter(subject => subject.stream === selectedStream)
    : subjects;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchText, {
      stream: selectedStream,
      subject: selectedSubject,
      semester: selectedSemester,
    });
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className={`w-full bg-white p-3 rounded-lg shadow-md flex flex-col md:flex-row gap-2 ${className}`}
    >
      <div className="flex-1 flex items-center border rounded-md px-3 py-2 bg-gray-50">
        <Search size={20} className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search for notes, subjects..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full bg-transparent focus:outline-none text-gray-800"
        />
      </div>
      
      <div className="flex flex-col md:flex-row gap-2">
        <select
          value={selectedStream}
          onChange={(e) => {
            setSelectedStream(e.target.value);
            setSelectedSubject(''); // Reset subject when stream changes
          }}
          className="p-2 border rounded-md bg-gray-50 text-gray-800"
        >
          <option value="">All Streams</option>
          {streams.map(stream => (
            <option key={stream.id} value={stream.id}>{stream.name}</option>
          ))}
        </select>
        
        <select
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
          className="p-2 border rounded-md bg-gray-50 text-gray-800"
          disabled={!selectedStream}
        >
          <option value="">All Subjects</option>
          {filteredSubjects.map(subject => (
            <option key={subject.id} value={subject.id}>{subject.name}</option>
          ))}
        </select>
        
        <select
          value={selectedSemester}
          onChange={(e) => setSelectedSemester(e.target.value)}
          className="p-2 border rounded-md bg-gray-50 text-gray-800"
        >
          <option value="">All Semesters</option>
          {semesters.map(semester => (
            <option key={semester.id} value={semester.id}>{semester.name}</option>
          ))}
        </select>
        
        <button
          type="submit"
          className="bg-sky-500 text-white py-2 px-4 rounded-md hover:bg-sky-600 transition-colors"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;