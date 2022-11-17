import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDetails } from '../features/user/userActions'
import { editNames } from '../features/user/userActions'
import { toggleEdit } from '../features/user/userSlice'

const UserProfile = () => {

    const { userInfo, userToken } = useSelector((state) => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        if (userToken) {
          dispatch(getUserDetails())

        }
        else{
          return
        }
      }, [userToken, dispatch])

      const [firstName, setFirstName] = useState('')
      const [lastName, setLastName] = useState('')

      const onCreate = e =>  {
        e.preventDefault();
        // Pass object to our main function submitForm
        const postData = {
          firstName,
          lastName
        }
        modifyForm(postData)
      }

      const modifyForm = (data) => {
        if(!data){
          console.log('Data missing')
        } else {
          dispatch(editNames(data))
        }
      }


    return (
      <>
          <main className="main bg-dark">
              <div className="header">
                  <h1>Welcome back<br />{userInfo.body.firstName} {userInfo.body.lastName}</h1>
                 <button onClick={() => dispatch(toggleEdit())} className="edit-button edit-toggler">Edit name</button> 
                  
                  <form className="form-display form-edit-user" onSubmit={onCreate}>
                    <div className='form-edit-inputs'>
                  <input type="text" id="firstname"  placeholder={userInfo.body.firstName} onChange={(e) => setFirstName(e.target.value)} required />
                  <input type="text" id="lastname"  placeholder={userInfo.body.lastName} onChange={(e) => setLastName(e.target.value)} required/>
                  </div>
                  <div className='form-edit-btns'>
                  <input type="submit" className="edit-button form-edit-btn-self" value="Save" />
                  <button type="button" onClick={() => dispatch(toggleEdit())} className="edit-button edit-button-cancel form-edit-btn-self">Cancel</button> 
                  </div>
                  </form>
                 
                
              </div>
              <h2 className="sr-only">Accounts</h2>
              <section className="account">
                  <div className="account-content-wrapper">
                  <h3 className="account-title">Argent Bank Checking x8349</h3>
                  <p className="account-amount">$2,082.79</p>
                  <p className="account-amount-description">Available Balance</p>
                  </div>
                  <div className="account-content-wrapper cta">
                  <button className="transaction-button">View transactions</button>
                  </div>
              </section>
              <section className="account">
                  <div className="account-content-wrapper">
                  <h3 className="account-title">Argent Bank Savings x6712</h3>
                  <p className="account-amount">$10,928.42</p>
                  <p className="account-amount-description">Available Balance</p>
                  </div>
                  <div className="account-content-wrapper cta">
                  <button className="transaction-button">View transactions</button>
                  </div>
              </section>
              <section className="account">
                  <div className="account-content-wrapper">
                  <h3 className="account-title">Argent Bank Credit Card x8349</h3>
                  <p className="account-amount">$184.30</p>
                  <p className="account-amount-description">Current Balance</p>
                  </div>
                  <div className="account-content-wrapper cta">
                  <button className="transaction-button">View transactions</button>
                  </div>
              </section>
          </main>
    </>
  );
};

export default UserProfile;