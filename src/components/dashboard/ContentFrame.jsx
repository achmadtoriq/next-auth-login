import React from 'react'

const ContentFrame = ({ children }) => {
    return (
        <div className="p-6 flex-1">
            <div className="bg-amber-50 border rounded-lg border-amber-100 p-4">
                {children}
            </div>
        </div>
    )
}

export default ContentFrame