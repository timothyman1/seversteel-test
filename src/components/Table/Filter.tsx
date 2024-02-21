import useDebounce from '@/hooks/useDebounce';
import { Person } from '@/types';

interface FilterProps {
  data: Person[];
  onFilter: (filteredData: Array<Person>) => void;
}

export const Filter: React.FC<FilterProps> = ({ data, onFilter }) => {
  const handleSearch = useDebounce((term) => {
    const filteredData = data.filter((person) =>
      person.name.toLowerCase().includes(term as string)
    );
    onFilter(filteredData);
  }, 300);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = e.target.value.toLowerCase();

    handleSearch(searchQuery);
  };

  return (
    <div>
      <label>Поиск по ФИО </label>
      <input type='text' onChange={handleChange} />
    </div>
  );
};
