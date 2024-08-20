import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react';
import { useState } from 'react';

const people = [
  { id: 1, name: 'Durward Reynolds' },
  { id: 2, name: 'Kenton Towne' },
  { id: 3, name: 'Therese Wunsch' },
  { id: 4, name: 'Benedict Kessler' },
  { id: 5, name: 'Katelyn Rohan' },
];

export function Select() {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Listbox
      value={selectedPerson}
      onChange={setSelectedPerson}
      as="div"
      className="relative mt-1"
    >
      {({ open }) => {
        setIsOpen(open);
        return (
          <>
            <ListboxButton className="relative w-full cursor-pointer rounded border border-gray-300 bg-white py-2 pl-10 pr-10 text-left shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm">
              <span className="block truncate">{selectedPerson.name}</span>

              <span className="absolute inset-y-0 start-0 flex items-center ps-3">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13 7C13 10.3137 10.3137 13 7 13C3.68629 13 1 10.3137 1 7C1 3.68629 3.68629 1 7 1C10.3137 1 13 3.68629 13 7ZM14 7C14 10.866 10.866 14 7 14C3.13401 14 0 10.866 0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7ZM8 7V2.5H7V7H4V8H7C7.55228 8 8 7.55228 8 7Z"
                    fill="#008075"
                  />
                </svg>
              </span>

              <span className="absolute inset-y-0 end-0 flex items-center pe-3">
                {isOpen ? (
                  <svg
                    width="12"
                    height="6"
                    viewBox="0 0 12 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.3125 5.5L0.687805 4.71913L5.68781 0.719131C5.84433 0.593913 6.05732 0.576025 6.22998 0.665466L6.3125 0.719131L11.3125 4.71913L10.6878 5.5L6.00015 1.75057L1.3125 5.5Z"
                      fill="#008075"
                    />
                  </svg>
                ) : (
                  <svg
                    width="12"
                    height="6"
                    viewBox="0 0 12 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    transform="rotate(180)"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.3125 5.5L0.687805 4.71913L5.68781 0.719131C5.84433 0.593913 6.05732 0.576025 6.22998 0.665466L6.3125 0.719131L11.3125 4.71913L10.6878 5.5L6.00015 1.75057L1.3125 5.5Z"
                      fill="#008075"
                    />
                  </svg>
                )}
              </span>
            </ListboxButton>

            <ListboxOptions className="absolute mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {people.map((person) => (
                <ListboxOption
                  key={person.id}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-blue-100 text-blue-900' : 'text-gray-900'
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span className="absolute inset-y-0 start-0 flex items-center ps-3">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13 7C13 10.3137 10.3137 13 7 13C3.68629 13 1 10.3137 1 7C1 3.68629 3.68629 1 7 1C10.3137 1 13 3.68629 13 7ZM14 7C14 10.866 10.866 14 7 14C3.13401 14 0 10.866 0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7ZM8 7V2.5H7V7H4V8H7C7.55228 8 8 7.55228 8 7Z"
                            fill="#008075"
                          />
                        </svg>
                      </span>

                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {person.name}
                      </span>
                    </>
                  )}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </>
        );
      }}
    </Listbox>
  );
}
