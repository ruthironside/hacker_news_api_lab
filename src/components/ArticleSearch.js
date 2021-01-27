import React from 'react';

const ArticleSearch = ({input, updateInput}) => {
    return(
        <div>
            <input value={input}
            placeholder={"search articles..."}
            onChange={(e) => updateInput(e.target.value)}>
                
            </input>
        </div>

    )
}

export default ArticleSearch;