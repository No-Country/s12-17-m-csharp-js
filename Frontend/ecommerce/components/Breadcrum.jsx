import Link from "next/link";
import React from "react";
import { MdArrowForwardIos } from "react-icons/md";

const Breadcrumb = ({ items }) => {
  return (
    <nav>
      <ul className="flex gap-2 uppercase">
        {items.map((item, index) => (
          <li key={index} className="flex gap-2 text-sm">
            {item.path ? (
              <Link
                href={item.path}
                className="hover:font-medium hover:underline"
              >
                {item.label}
              </Link>
            ) : (
              <span>{item.label}</span>
            )}
            {index < items.length - 1 && (
              <MdArrowForwardIos className="text-gray-700" size={18} />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
