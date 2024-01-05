// const AuthLayout = ({
//     children
// }: {children: React.ReactNode;
// }) => {
//     return (
//         <div className="flex items-center justify-center h-full">
//             {children}
//         </div>
//     );
// }

// export default AuthLayout

import React from 'react';

const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500">
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                <div className="mb-8 text-center">
                    <h2 className="text-2xl font-semibold text-gray-800">Welcome Back! Nitin</h2>
                </div>
                {children}
            </div>
        </div>
    );
};

export default AuthLayout;

