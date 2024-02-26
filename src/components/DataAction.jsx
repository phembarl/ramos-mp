'use client';

import { Icon } from '@iconify/react';

const DataAction = ({ title }) => {
  return (
    <div className="flex justify-between items-center bg-white p-5 rounded-2xl text-xl shadow-md font-medium">
      <p>{title}</p>
      <div className="cursor-pointer bg-ramosGrey w-10 h-10 flex justify-center items-center rounded-full">
        <Icon icon="ic:baseline-plus" width="20" height="20" />
      </div>
    </div>
  );
};

export default DataAction;
