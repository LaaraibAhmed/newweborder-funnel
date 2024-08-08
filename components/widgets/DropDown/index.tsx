"use client";
import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

interface Props {
  title: string;
  options: string[];
}

const Example = (props: Props) => {
  const arrowClosed = (
    <span className="arrow-closed flex items-center justify-center hover:cursor-pointer">
      <svg
        width="12"
        height="8"
        viewBox="0 0 12 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.41 0.580078L6 5.17008L10.59 0.580078L12 2.00008L6 8.00008L0 2.00008L1.41 0.580078Z"
          fill="#706F78"
        />
      </svg>
    </span>
  );

  const arrowOpen = (
    <span className="arrow-open hover:cursor-pointer">
      <svg
        style={{ transform: "rotate(180deg)" }}
        width="12"
        height="8"
        viewBox="0 0 12 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.41 0.580078L6 5.17008L10.59 0.580078L12 2.00008L6 8.00008L0 2.00008L1.41 0.580078Z"
          fill="#706F78"
        />
      </svg>
    </span>
  );

  return (
    <Menu>
      <MenuButton
        className={`flex w-full flex-row items-center justify-between rounded-md border-[1px] border-[#ECEEED] p-2`}
      >
        {props.title}
      </MenuButton>
      <MenuItems anchor="bottom">
        {props.options.map((option, index) => (
          <MenuItem key={index}>
            <a className="block data-[focus]:bg-blue-100" href={option}>
              {option}
            </a>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};
export default Example;
