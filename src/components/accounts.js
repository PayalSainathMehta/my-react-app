import React from 'react'
 
const Accounts = ({accounts}) => {
    return (
        <div>
            <center><h3>Account Summary</h3></center>
            {accounts.map((account) => (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title"><p>Account id =  {account.accountId}</p></h5>
                        <h6 class="card-subtitle mb-2 text-muted">{account.adDocumentCount}</h6>
                        <p class="card-text">{account.indexCount}</p>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Accounts