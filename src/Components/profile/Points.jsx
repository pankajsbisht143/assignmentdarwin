import React from 'react';

const Points = ({ userData }) => {
  console.log(userData?.pointsHistory);

  return (
    <div className='grid grid-cols-3 gap-1 overflow-y-scroll h-[180px] w-full' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      <div className="w-[100%]">
        <table className="w-[100%]">
          <thead className='w-full'>
            <tr>
              <th className="border w-full border-gray-300 px-4 py-2">Name</th>
              <th className="border w-full border-gray-300 px-4 py-2">Points</th>
            </tr>
          </thead>
          <tbody className='w-full'>
            {userData?.pointsHistory?.map((elm, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2">{elm.title}</td>
                <td className="border border-gray-300 px-4 py-2">{elm.xp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Points;
