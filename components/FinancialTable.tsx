
import React from 'react';

interface FinancialTableProps {
  title: string;
  headers: string[];
  data: (string | number)[][];
}

export const FinancialTable: React.FC<FinancialTableProps> = ({ title, headers, data }) => {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
      <h3 className="text-2xl font-bold text-brand-dark mb-6">{title}</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-brand-light border-b border-gray-200">
              {headers.map((header, index) => (
                <th key={index} className="p-4 font-semibold text-gray-600 uppercase tracking-wider text-sm">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-b border-gray-200 last:border-b-0 hover:bg-amber-50/50">
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className={`p-4 ${cellIndex === 0 ? 'font-medium text-brand-secondary' : 'text-gray-600'}`}>
                    {typeof cell === 'number' ? `Rp ${cell.toLocaleString('id-ID')}` : cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
