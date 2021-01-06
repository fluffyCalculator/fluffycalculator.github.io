// import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import React, { useContext, useState } from "react";
// import { breakpoint } from "./DailyStyles";
// import Button from "../Button";
// import Input from "../Input";
import { DailyContext } from "./Context";

export var filterTypes = {
  minDamage: true,
  maxDamage: true,
  plague: true,
  weakness: true,
  large: true,
  dedication: true,
  famine: true,
  badStrength: true,
  badHealth: true,
  badMapStrength: true,
  badMapHealth: true,
  crits: true,
  bogged: true,
  dysfunctional: true,
  oddTrimpNerf: true,
  evenTrimpBuff: true,
  karma: true,
  toxic: true,
  bloodthirst: true,
  explosive: true,
  slippery: true,
  rampage: true,
  mutimps: true,
  empower: true,
  pressure: true,
  mirrored: true,
  metallicThumb: true,
  trimpCritChanceUp: true,
  trimpCritChanceDown: true,
  hemmorrhage: true,
};

// const useStyles = makeStyles((theme) => {
//   return {
//     box: {
//       margin: 2,
//       padding: 4,
//       fontSize: 14,
//       color: "black",
//       userSelect: "none",
//       cursor: "pointer",
//       [theme.breakpoints.down(breakpoint)]: {
//         fontSize: 8.5,
//       },
//     },
//     true: {
//       backgroundColor: "#5EBC8A",
//     },
//     false: {
//       backgroundColor: "#E07D6C",
//     },
//     input: {
//       color: "white",
//       "& input:valid + fieldset": {
//         borderColor: "#A775FA",
//       },
//     },
//   };
// });

export var toMatch = 2;

// export function FilterBox(props) {
//   const { updateDailiesFiltered } = useContext(DailyContext);
//   const [enabled, changeEnabled] = useState(filterTypes[props?.type]);
//   const classes = useStyles();
//   return (
//     <>
//       <div
//         onClick={() => {
//           changeEnabled(!enabled);
//           filterTypes[props?.type] = !filterTypes[props?.type];
//           updateDailiesFiltered();
//         }}
//         className={clsx(classes[filterTypes[props?.type]], classes.box)}
//       >
//         {props?.type}
//       </div>
//     </>
//   );
// }

// export default function Filter(props) {
//   const { updateDailiesFiltered } = useContext(DailyContext);
//   const [filter, showFilter] = useState(false);
//   const [, flipFilters] = useState(0);
//   return (
//     <>
//       <div className={clsx("flex justify-center", props?.className)}>
//         <Button
//           className="my-2"
//           onClick={() => {
//             showFilter(!filter);
//           }}
//           label="Filter"
//         />
//       </div>
//       <div className="flex justify-center">
//         <div className={clsx(props?.className, "flex-wrap justify-center")}>
//           {filter &&
//             Object.keys(filterTypes).map((x, i) => {
//               if (x === "hemmorrhage" && window.daily_universe === 1) {
//                 return "";
//               }
//               return <FilterBox key={i} type={x} />;
//             })}
//         </div>
//       </div>
//       {filter && (
//         <div className="flex items-center justify-center my-2">
//           <Button
//             onClick={() => {
//               for (var x in filterTypes) {
//                 filterTypes[x] = !filterTypes[x];
//               }
//               flipFilters(Math.random());
//               updateDailiesFiltered();
//             }}
//             className="mr-2"
//             label="Flip All"
//           />
//           <Input
//             onChange={(e) => {
//               toMatch = e.target.value;
//               updateDailiesFiltered();
//             }}
//             type="number"
//             defaultValue={toMatch}
//             label="Match Atleast"
//           />
//         </div>
//       )}
//     </>
//   );
// }

function FilterBox({ type }: { type: string }) {
  const { updateDailiesFiltered } = useContext(DailyContext);
  const [enabled, setEnabled] = useState(filterTypes[type]);

  return (
    <>
      <div
        className={clsx(
          filterTypes[type] ? "bg-tier3" : "bg-tier1",
          "m-0.5 p-1 w-min text-black text-sm cursor-pointer select-none"
        )}
        onClick={() => {
          filterTypes[type] = !filterTypes[type];

          updateDailiesFiltered();

          setEnabled(!enabled);
        }}
      >
        {type}
      </div>
    </>
  );
}

function Filter() {
  const [showFilter, setShowFilter] = useState(true);
  const { updateDailiesFiltered } = useContext(DailyContext);

  // Specifically for forcing component to rerender when updating filter types.
  const [flipAll, setFlipAll] = useState(false);

  return (
    <>
      <div
        className="mt-10 mb-2 p-2 text-base bg-secondary border border-solid border-prpl rounded shadow-md cursor-pointer select-none"
        onClick={() => setShowFilter(!showFilter)}
      >
        Filter
      </div>
      {showFilter && (
        <div className="mb-10 md:w-1/2 text-center w-9/12">
          <div className="flex flex-wrap justify-center">
            {Object.keys(filterTypes).map((type, idx) => {
              return <FilterBox key={idx} type={type} />;
            })}
          </div>
          <div className="flex justify-evenly mt-2">
            <div
              className="p-2 bg-secondary border border-solid border-prpl rounded cursor-pointer select-none"
              onClick={() => {
                for (var type in filterTypes) {
                  filterTypes[type] = !filterTypes[type];
                }

                setFlipAll(!flipAll);

                updateDailiesFiltered(true);
              }}
            >
              Flip All
            </div>
            <label>
              Match Atleast
              <input
                type="number"
                onChange={(e) => {
                  toMatch = Number(e.target.value);
                  updateDailiesFiltered(true);
                }}
                defaultValue={toMatch}
                className="p-2 bg-secondary border border-solid border-prpl rounded"
              />
            </label>
          </div>
        </div>
      )}
    </>
  );
}

export default Filter;
