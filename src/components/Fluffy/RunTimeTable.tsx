import React, { ReactElement } from "react";

interface Props {
  data: {
    evolution: number;
    level: number;
    table: [number[]];
  };
  second: boolean;
  time?: number;
}

function sformat(s: number) {
  if (s === 0) return 0;
  var fm = [
    Math.floor(s / 60 / 60 / 24), // DAYS
    Math.floor(s / 60 / 60) % 24, // HOURS
    Math.floor(s / 60) % 60, // MINUTES
    Math.floor(s % 60), // SECONDS
  ];
  return fm
    .map(function (v) {
      return (v < 10 ? "0" : "") + v;
    })
    .join(":")
    .replace(/00:/g, "");
}

function RunTimeTable({ data, second, time }: Props): ReactElement {
  return (
    <>
      <div className="my-2 text-xl">{`E${data.evolution}L${data.level}`}</div>
      <table className="w-full bg-secondary border border-solid border-prpl shadow-xl">
        <thead>
          <tr className="bg-thirdary">
            <th className="cell">🍑</th>
            <th className="cell">{`Runs to E${data.evolution}`}</th>
            {time! > 0 && (
              <th className="cell">{`Time to E${data.evolution}`}</th>
            )}
            {second && (
              <th className="cell">{`Runs to E${data.evolution + 1}`}</th>
            )}
            {second && time! > 0 && (
              <th className="cell">{`Time to E${data.evolution + 1}`}</th>
            )}
          </tr>
        </thead>
        <tbody>
          {data.table.map((cell, idx) => {
            return (
              <tr className="hover:bg-thirdary" key={idx}>
                <td className="cell font-bold bg-thirdary">{`L${idx + 1}`}</td>
                <td className="cell">
                  {cell[0] === 0 ? "" : cell[0].toFixed(2)}
                </td>
                {time! > 0 && (
                  <td className="cell">
                    {cell[0] === 0 ? "" : sformat(cell[0] * time! * 60)}
                  </td>
                )}

                {cell[1] !== undefined && (
                  <>
                    <td className="cell">{cell[1].toFixed(2)}</td>
                    {time! > 0 && (
                      <td className="cell">{sformat(cell[1] * time! * 60)}</td>
                    )}
                  </>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default RunTimeTable;
