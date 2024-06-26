import React from 'react';
import '../../../../Styles/UserStyle/SubComponentsStyle/AnalysisStyle/Analysis.css';
import '../../../../Styles/UserStyle/MainComponentsStyle/TopSectionMain.css';

function Analysis(){
    return(
        <section className='h-100 w-100'>
            <div className='analysis-container w-100'>
                <div className='row w-100'>
                    <div className='col top-section-main py-3'>
                        <h1 className='top-section-main-title px-3'>Analysis</h1>
                    </div>
                </div>
                <div className='row w-100'>
                    <div className='col d-flex analysis-wrapper w-100'>
                        <div className=''>
                            <h1>This is Analysis</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Analysis;