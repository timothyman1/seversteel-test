import { Person } from "../../types";

interface FilterProps {
  data: Person[],
  onFilter: (filteredData: Array<Person>) => void;
}

export const Filter: React.FC<FilterProps> = ({ data, onFilter }) => {
  const handleSearchQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = e.target.value.toLowerCase();
    const filteredData = data.filter(person => person.name.toLowerCase().includes(searchQuery))
    onFilter(filteredData);
  }

  return (
    <div>
      <label>Поиск по ФИО </label>
      <input type="text" onChange={handleSearchQuery} />
    </div>
  )
}
