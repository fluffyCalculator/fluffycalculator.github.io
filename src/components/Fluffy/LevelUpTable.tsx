import React, { ReactElement } from "react";

interface Props {
  table: {
    [key: string]: number;
  };
}

function LevelUpTable({ table }: Props): ReactElement {
  return (
    <>
      <table className="w-max text-center bg-secondary border border-solid border-prpl shadow-xl">
        <thead>
          <tr className="bg-thirdary">
            <th className="cell">💗</th>
            <th className="cell">On Zone</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(table).map((key, idx) => {
            return (
              <tr className="hover:bg-thirdary" key={idx}>
                <td className="cell font-bold bg-thirdary">{key}</td>
                <td className="cell">{table[key]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default React.memo(LevelUpTable);
