import React from 'react';

const Loading = () => {
    return (
        <div className="flex h-screen items-center justify-center">
            <div className="spinner-border animate-spin inline-block text-2xl w-8 h-8 border-4 rounded-full" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;