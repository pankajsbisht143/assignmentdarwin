import React from 'react';

const Points = ({ userHist }) => {
  console.log(userHist?.pointsHistory);

  return (
    <div >
      <div className='overflow-y-scroll h-[180px] '  style={{padding:"10px"}}>
        {
          userHist?.pointsHistory?.map((ele, idx) => {
            return <div key={idx} className="w-[100%]"  style={{ display: 'flex',width:"100%" ,justifyContent: 'space-between' ,border:"1px solid black",padding:"5px"}}>
                <p>{ele.title}</p>
                <p>{ele.xp}</p>
              </div>
            
          })
        }
      </div>
    </div>
  );
}

export default Points;
{/* <table className="w-[100%]">
<thead className='w-full'>
  <tr>
    <th className="border w-full border-gray-300 px-4 py-2">Name</th>
    <th className="border w-full border-gray-300 px-4 py-2">Points</th>
  </tr>
</thead>
<tbody className='w-full'>
  {userHist?.pointsHistory?.map((elm, index) => (
    <tr key={index}>
      <td className="border border-gray-300 px-4 py-2">{elm.title}</td>
      <td className="border border-gray-300 px-4 py-2">{elm.xp}</td>
    </tr>
  ))}
</tbody>
</table> */}