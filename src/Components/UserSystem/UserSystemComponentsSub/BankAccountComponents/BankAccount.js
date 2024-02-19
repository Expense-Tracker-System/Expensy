import React, { useEffect, useState } from 'react';
import '../../../../Styles/UserStyle/SubComponentsStyle/BankAccountStyle/BankAccount.css';
import '../../../../Styles/UserStyle/MainComponentsStyle/TopSectionMain.css';

import { MdOutlineAccountBalance } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import SideBar from '../../UserSystemComponentsMain/UserSideBar';

function BankAccount(){
    const[accArr,setAccArr] = useState([]);
    const[accNo,setAccNo] = useState("");
    const[bankName,setBankName] = useState("");
    const[branchName,setBranchName] = useState("");

    const [isOpen, setIsOpen] = useState(true); // Sidebar is initially open

    const handelDeleteAcc = (index) => {
        let saveAcc = [...accArr];

        if(saveAcc){
            saveAcc.splice(index,1);
        }

        setAccArr(saveAcc);

        localStorage.setItem('accItem',JSON.stringify(saveAcc));
    }

    const handelAddAcc = () => {
        let accItem = {
            accNo: accNo,
            bankName: bankName,
            branchName: branchName
        };
        
        let updateAccItemArr = [...accArr];

        // if(accItem.accNo !== "" & accItem.bankName !== "" & accItem.branchName !== ""){
        //     updateAccItemArr.push(accItem);

        //     setAccArr(updateAccItemArr);
        // }

        updateAccItemArr.push(accItem);

        localStorage.setItem('accList',JSON.stringify(updateAccItemArr));

        setAccArr(updateAccItemArr);
        console.log(accArr);
        
    }

    useEffect(() => {
        let saveAccItem = JSON.parse(localStorage.getItem('accList'));

        if(saveAccItem){
            setAccArr(saveAccItem);
        }
    },[])

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
        <section className="">
            <SideBar />
            <div style={{paddingLeft: isOpen ? "262px" : "62px"}} className="bank-acc-container w-100 global">
                <div className='row w-100'>
                    <div className='col top-section-main py-3'>
                        <h1 className='top-section-main-title px-3'>BankAccount</h1>
                    </div>
                </div>

                <div className='row d-flex w-100'>
                    <div className='col-sm-12 py-1 px-md-5 h-100 w-100'>
                        {/* <form> */}
                            <p className="fw-bold my-3 mb-2 pb-2">Saved Accounts:</p>

                            <div className='card d-flex flex-column justify-content-center h-100 p-3 bank-acc-card w-100'>
                                <div className='card-body d-flex flex-column'>

                                    {
                                        accArr.map((item,index) => {
                                            return(
                                                <div className='save-acc-item d-flex flex-row mb-2' key={index}>
                                                    <div className='col-8 d-flex flex-column pt-3 px-5'>
                                                        <h2>{"*****"+item.accNo.slice(3)}</h2>
                                                        <p className='p-0 m-0'>{item.bankName}</p>                                              
                                                        <p className=''>{item.branchName}</p>
                                                    </div>
                                                    <div className='col-2 d-flex justify-content-center pt-3 save-acc-delete'>
                                                        <AiOutlineDelete onClick={() =>handelDeleteAcc(index)} className='save-acc-delete-icon' />                                                                                                                   
                                                    </div>
                                                </div>
                                            );
                                        })
                                    }

                                </div> 
                            </div>

                            <p className="fw-bold my-5 mb-2 pb-2">Add new Account:</p>

                            <div className="row d-flex justify-content-center align-items-center h-100">
                                <div className="col bank-acc-container-body-section">
                                    <div className="card bank-acc-card rounded-3 p-3">
                                        <div className='w-100 d-flex justify-content-center align-items-center bank-acc-container-body-section-image'>
                                            <MdOutlineAccountBalance />
                                        </div>
                                    <div className="card-body px-md-5">
                                        <h3 className="mb-2 pb-2 pb-md-0 mb-md-4 px-md-2">Bank Info</h3>

                                        <div className="form-outline mb-2 bank-acc-container-body-section-input">
                                            <input type="text" value={accNo} onChange={(e) => setAccNo(e.target.value)} id="form3Example1q" className="form-control acc-input" />                                         
                                            <label className="form-label" for="form3Example1q">Account No</label>
                                        </div>

                                        <div className="form-outline mb-2 bank-acc-container-body-section-input">
                                            <input type="text" value={bankName} onChange={(e) => setBankName(e.target.value)} className="form-control acc-input" id="exampleDatepicker1" />
                                            <label for="exampleDatepicker1" className="form-label">Bank Name</label>
                                        </div>

                                        <div className="form-outline mb-2 bank-acc-container-body-section-input">
                                            <input type="text" value={branchName} onChange={(e) => setBranchName(e.target.value)} className="form-control acc-input" id="exampleDatepicker1" />
                                            <label for="exampleDatepicker1" className="form-label">Branch Name</label>
                                        </div>

                                        <div className='bank-submit d-flex justify-content-center w-100'>
                                            <button type="submit" onClick={handelAddAcc} className="btn bank-submit-btn d-flex justify-content-center btn-lg mb-1">Submit</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    {/* </form> */}
                </div>
                </div>

            </div>
        </section>
    );
}

export default BankAccount;