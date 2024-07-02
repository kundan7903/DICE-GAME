import React from 'react';


// width: 10px
// height: 36px
// top: 18px
// left: 31px

// font-family: Poppins;
// font-size: 24px;
// font-weight: 700;
// line-height: 36px;
// letter-spacing: 0em;
// text-align: left;


const Box1 = ({ isSelected, onClick, children }) => {
    return (
        <div
            style={{
                height: '72px',
                width: '72px',
                border: '2px solid black',
                display: 'grid',
                gap:'24px',
                placeItems: 'center',
                fontSize:'24px',
                fontWeight:'700',
                backgroundColor: isSelected ? 'black' : 'white',
                color:isSelected?'white':'black',
               
            }}
            onClick={onClick}
        >
            {children}
        </div>
    );
};





export default Box1;
