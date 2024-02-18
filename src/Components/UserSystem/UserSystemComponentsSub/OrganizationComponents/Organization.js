import React, { useEffect, useState} from 'react';
import '../../../../Styles/UserStyle/SubComponentsStyle/OrganizationStyle/Organization.css';
import '../../../../Styles/UserStyle/MainComponentsStyle/TopSectionMain.css';
import SideBar from '../../UserSystemComponentsMain/UserSideBar';

function Organization(){
    const [isOpen, setIsOpen] = useState(true); // Sidebar is initially open

    // Effect to listen for window width changes and close sidebar if width is less than a threshold
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 900) { // You can adjust the threshold as per your requirement
                setIsOpen(false);
            }
            else{
                setIsOpen(true);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return(
        <section className=''>
            <SideBar/>
            <div style={{paddingLeft: isOpen ? "262px" : "62px"}} className='organization-container w-100 global'>
                <div className='row'>
                    <div className='col top-section-main py-3'>
                        <h1 className='top-section-main-title px-3'>Organization</h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col organization-wrapper'>
                        <div className=''>
                            <h1>This is Organization</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Organization;