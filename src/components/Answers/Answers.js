import React from 'react';
import './Answers.css';
const Answers = () => {
    return (
        <div className='answers'>
            <h2 className='section-title'>QUESTION <span className='color'>ANSWERS</span></h2>
            <div >
                <h4>1.How react works?</h4>
                <p>=React makes it easier for us to visualize the HTML that we are trying to implement by using javascript. Each of the tags that look like HTML are actually javascript components and we use this components to build our websites. React is not a framework, its a library. Its a powerfull tool with which we can easily do a series of work using the vast application of javascript.  </p>

                <h4>2.Difference between props and state?</h4>
                <p>=State is internal and is controlled by the component itself whereas props are external and controlled by the parent component. State is mutable whereas Props are immutable. For state data chances inside the component whereas for props data can not be changed internally it can only be done externally. </p>
            </div>
        </div>
    );
};

export default Answers;