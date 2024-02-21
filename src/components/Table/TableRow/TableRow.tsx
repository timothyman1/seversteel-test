import { useState } from 'react';
import { Person } from '../../../types';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';
import { GoDotFill } from 'react-icons/go';

import { S } from '@/styles/styles.style';

interface RowProps {
  person: Person;
  // data: Array<Person>;
  getData: (parentId: number, level: number) => JSX.Element;
  level: number;
  hasChildren: boolean;
  isFiltered: boolean;
}

export const TableRow: React.FC<RowProps> = ({
  person,
  getData,
  level,
  hasChildren,
  isFiltered,
}) => {
  const [expand, setExpand] = useState(false);

  const rowStyle = {
    background: `rgb(${255 - 20 * level}, ${255 - 20 * level}, ${255 - 20 * level})`,
  };

  return (
    <>
      <S.TBodyTR style={rowStyle}>
        {hasChildren && !isFiltered ? (
          <S.TD>
            <S.Button onClick={() => setExpand(!expand)}>
              {expand ? <MdExpandLess /> : <MdExpandMore />}
            </S.Button>
          </S.TD>
        ) : (
          <S.TDEmpty></S.TDEmpty>
        )}

        <S.TD>{person.id}</S.TD>
        <S.TD>{person.parentId}</S.TD>
        <S.TD>
          <GoDotFill color={person.isActive ? '#3ed714' : '#fc0101'} />
        </S.TD>
        <S.TD>{person.balance}</S.TD>
        <S.TD>{person.name}</S.TD>
        <S.TD>{person.email}</S.TD>
      </S.TBodyTR>
      {expand && !isFiltered && getData(person.id, level + 1)}
    </>
  );
};
