import { useMemo, useState } from 'react';

import DATA from '@/constants/DATA.json';
import { TableRow } from '@/components/Table/TableRow/TableRow';
import { Filter } from '@/components/Table/Filter';

import { S } from '@/styles/styles.style';
import { Person } from '@/types';

enum OrderEnum {
  default = '',
  ascending = ' ˅',
  descending = ' ˄',
}

const originalData = DATA;

export const Table = () => {
  const [order, setOrder] = useState(OrderEnum.default);
  const [filteredData, setFiltredData] = useState<Array<Person>>(originalData);

  const isFiltered = filteredData.length !== originalData.length;

  const sortedData = useMemo(() => {
    let filter = [...filteredData];

    switch (order) {
      case OrderEnum.ascending:
        filter = [...filter].sort((a, b) => (a.balance > b.balance ? 1 : -1));
        break;
      case OrderEnum.descending:
        filter = [...filter].sort((a, b) => (b.balance > a.balance ? 1 : -1));
        break;
      default:
        break;
    }
    return filter;
  }, [filteredData, order]);

  const handleSearch = (newFilteredData: Person[]) => {
    setFiltredData(newFilteredData);
  };

  const getData = (data: Person[], parentId = 0, level = 0): JSX.Element => (
    <>
      {data
        .filter((el) => (data.length !== originalData.length ? true : el.parentId === parentId))
        .map((person) => (
          <TableRow key={person.id} person={person} data={data} getData={getData} level={level} isFiltered={isFiltered} />
        ))}
    </>
  );

  const sortBy = () => {
    setOrder((prevOrder) => (prevOrder === OrderEnum.default ? OrderEnum.ascending : prevOrder === OrderEnum.ascending ? OrderEnum.descending : OrderEnum.default));
  };

  return (
    <div>
      <Filter data={originalData} onFilter={handleSearch} />
      <S.Table>
        <S.Thead>
          <S.THeadTR>
            <S.TDEmpty></S.TDEmpty>
            <S.TH>ID</S.TH>
            <S.TH>parentId</S.TH>
            <S.TH>isActive</S.TH>
            <S.THBalance onClick={sortBy}>balance{order}</S.THBalance>
            <S.TH>name</S.TH>
            <S.TH>email</S.TH>
          </S.THeadTR>
        </S.Thead>
        <S.Tbody>
          {filteredData.length ? (
            getData(sortedData)
          ) : (
            <S.TBodyTR>
              <S.TD colSpan={Object.keys(originalData[0]).length + 1}>
                <S.H1>Нет результата поиска</S.H1>
              </S.TD>
            </S.TBodyTR>
          )}
        </S.Tbody>
      </S.Table>
    </div>
  );
};
