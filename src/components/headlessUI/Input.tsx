import {
  Input as HlUiInput,
  type InputProps as HlInputProps,
} from '@headlessui/react';

export const Input: React.FC<HlInputProps> = (props) => (
  <>
    <form className="max-w-md">
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
          <svg viewBox="0 0 1024 1024" fill="#000" height="1em" width="1em">
            <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" />
          </svg>
        </div>

        <HlUiInput
          name="full_name"
          type="text"
          className="block w-full rounded border border-gray-400 bg-gray-50 p-2 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          placeholder="placeholder"
          {...props}
        />
      </div>
    </form>

    <form className="max-w-md">
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            height="1em"
            width="1em"
          >
            <path d="M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z" />
          </svg>
        </div>

        <HlUiInput
          name="full_name"
          type="text"
          className="block w-full rounded border border-green-400 bg-gray-50 p-2 ps-10 text-sm text-gray-900 focus:border-green-500 focus:ring-green-500 focus-visible:outline-green-500"
          placeholder="placeholder"
          {...props}
        />
      </div>
    </form>

    <form className="max-w-md">
      <div className="relative">
        {/* Lewa ikona */}
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
          <svg viewBox="0 0 1024 1024" fill="#000" height="1em" width="1em">
            <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" />
          </svg>
        </div>

        <HlUiInput
          name="full_name"
          type="text"
          className="block w-full rounded border border-red-400 bg-gray-50 p-2 pe-20 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 focus-visible:outline-red-500"
          placeholder="placeholder"
          {...props}
        />

        <div className="pointer-events-none absolute inset-y-0 end-8 mr-2 flex items-center">
          <svg
            width="20"
            height="20"
            viewBox="0 0 14 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.43046 0.245635C7.34051 0.0933993 7.17683 0 7 0C6.82317 0 6.65949 0.0933993 6.56954 0.245635L0.0695367 11.2456C-0.0217985 11.4002 -0.0232518 11.5919 0.0657292 11.7478C0.15471 11.9037 0.320464 12 0.5 12H13.5C13.6795 12 13.8453 11.9037 13.9343 11.7478C14.0233 11.5919 14.0218 11.4002 13.9305 11.2456L7.43046 0.245635ZM6.49971 4V7H7.49971V4H6.49971ZM6.99971 10C6.55788 10 6.19971 9.64183 6.19971 9.2C6.19971 8.75817 6.55788 8.4 6.99971 8.4C7.44153 8.4 7.79971 8.75817 7.79971 9.2C7.79971 9.64183 7.44153 10 6.99971 10Z"
              fill="#E51F26"
            />
          </svg>
        </div>

        <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center pe-3">
          <svg
            width="20"
            height="20"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.00004 7.29293L2.85359 2.14648L2.14648 2.85359L7.29293 8.00004L2.14648 13.1465L2.85359 13.8536L8.00004 8.70714L13.1465 13.8536L13.8536 13.1465L8.70714 8.00004L13.8536 2.85359L13.1465 2.14648L8.00004 7.29293Z"
              fill="#E51F26"
            />
          </svg>
        </div>
      </div>
    </form>
  </>
);
