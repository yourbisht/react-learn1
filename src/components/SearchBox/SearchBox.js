import React from 'react';

export const SearchBox = ({placeholder,handleChange}) => {
    return (
        <React.Fragment>
            <div className="clearfix">&nbsp;</div>
            <div className="form-group offset-md-5">
                <input type="search" className="form-control col-3" id="searchbox" placeholder={placeholder} onChange={handleChange}/>
            </div>
        </React.Fragment>
    );
};