import {Menu, MenuButton, MenuItem, MenuItems} from "@headlessui/react";
import {ChevronDownIcon} from "@heroicons/react/20/solid";

export default function Dropdown({sortBy, setSortBy}) {
  const attributes = [
    {id: 0, abbrieviation: "SB", text: "Sort By", key: "overallRating"},
    {id: 1, abbrieviation: "OVR", text: "Overall Rating", key: "overallRating"},
    {id: 2, abbrieviation: "IS", text: "Inside Scoring", key: "insideScoring"},
    {
      id: 3,
      abbrieviation: "MRS",
      text: "Mid Range Shooting",
      key: "midRangeShooting",
    },
    {
      id: 4,
      abbrieviation: "LRS",
      text: "Long Range Shooting",
      key: "longRangeShooting",
    },
    {
      id: 5,
      abbrieviation: "PD",
      text: "Perimeter Defense",
      key: "perimeterDefense",
    },
    {id: 6, abbrieviation: "ID", text: "Inside Defense", key: "insideDefense"},
    {id: 7, abbrieviation: "PM", text: "Playmaking", key: "playmaking"},
    {id: 8, abbrieviation: "RB", text: "Rebound", key: "rebound"},
    {id: 9, abbrieviation: "BH", text: "Ball Handling", key: "ballHandling"},
  ];
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          {sortBy.text}
          <ChevronDownIcon
            aria-hidden="true"
            className="-mr-1 h-5 w-5 text-gray-400"
          />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          {attributes.map((attribute) => {
            return (
              <MenuItem>
                <a
                  onClick={() => {
                    setSortBy(attribute);
                  }}
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                >
                  {attribute.text}
                </a>
              </MenuItem>
            );
          })}
        </div>
      </MenuItems>
    </Menu>
  );
}
