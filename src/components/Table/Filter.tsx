import useDebounce from '@/hooks/useDebounce';
import { Person } from '@/types';

interface FilterProps {
  data: Person[];
  onFilter: (filteredData: Array<Person>) => void;
}

export const Filter: React.FC<FilterProps> = ({ data, onFilter }) => {
  const handleSearch = useDebounce((term) => {
    const filteredData = data.filter((person) => person.name.toLowerCase().includes(term));
    onFilter(filteredData);
  }, 500);

  // const handleSearchQuery = (searchQuery: string) => {
  //   // const searchQuery = e.target.value.toLowerCase();

  //   const filteredData = data.filter((person) => person.name.toLowerCase().includes(searchQuery));
  //   onFilter(filteredData);
  // };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = e.target.value.toLowerCase();

    handleSearch(searchQuery);
    // handleSearchQuery(searchQuery);
  };

  return (
    <div>
      <label>Поиск по ФИО </label>
      <input type='text' onChange={handleChange} />
    </div>
  );
};
