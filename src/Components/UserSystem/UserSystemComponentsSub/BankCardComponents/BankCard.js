import React, { useEffect, useState} from 'react';
import '../../../../Styles/UserStyle/SubComponentsStyle/BankCardStyle/BankCard.css';
import '../../../../Styles/UserStyle/MainComponentsStyle/TopSectionMain.css';
import SideBar from '../../UserSystemComponentsMain/UserSideBar';

function BankCard(){
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
        <section class="">
            <SideBar />
            <div style={{paddingLeft: isOpen ? "262px" : "62px"}} className='bank-card-container global'>
                <div className='row'>
                    <div className='col top-section-main py-3'>
                        <h1 className='top-section-main-title px-3'>BankCard</h1>
                    </div>
                </div>
                <div class="row d-flex justify-content-center w-100">
                    <div class="col-sm-11 bank-card-wrapper">
                        <form action="" className='bank-card-body-section-form w-100'>
                            <p class="fw-bold mb-4 pb-2">Saved cards:</p>

                            <div className='card d-flex flex-column justify-content-center h-100 p-3 bank-card-card w-100'>
                                <div class="d-flex flex-row align-items-center mb-4 pb-1 bank-card-body-section-save-item">
                                    
                                </div>    
                            </div>

                                <p class="fw-bold mb-4 pb-2">Add new card:</p>

                                <div className='card d-flex flex-column justify-content-center px-4 bank-card-card'>
                                    <div class="form-outline mb-4 bank-card-body-section-add-item">
                                        <input type="text" id="formControlLgXsd" class="form-control form-control-lg" />
                                        <label class="form-label" for="formControlLgXsd">Cardholder's Name</label>
                                    </div>

                                    <div class="row mb-4">
                                        <div class="col-7">
                                            <div class="form-outline bank-card-body-section-add-item">
                                                <input type="text" id="formControlLgXM" class="form-control form-control-lg" />
                                                <label class="form-label" for="formControlLgXM">Card Number</label>
                                            </div>
                                        </div>
                                        <div class="col-3">
                                            <div class="form-outline bank-card-body-section-add-item">
                                                <input type="password" id="formControlLgExpk" class="form-control form-control-lg"
                                                    placeholder="MM/YYYY" />
                                                <label class="form-label" for="formControlLgExpk">Expire</label>
                                            </div>
                                        </div>
                                        <div class="col-2">
                                            <div class="form-outline bank-card-body-section-add-item">
                                                <input type="password" id="formControlLgcvv" class="form-control form-control-lg"
                                                    placeholder="Cvv" />
                                                <label class="form-label" for="formControlLgcvv">Cvv</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='bank-submit d-flex justify-content-center w-100'>
                                        <button type="submit" className="btn bank-submit-btn d-flex justify-content-center btn-lg mb-1">Submit</button>
                                    </div>
                                
                                </div>

                            </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BankCard;