import GroupAddIcon from '@mui/icons-material/GroupAdd';
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import {useState} from 'react'
import { useScrollTrigger } from '@mui/material';
// or


export const Edit=({open,setOpen,values,setValues,students,setStudents,setMessage,setNotification})=>{
   
    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
        console.log('rajesh')
    }
    const handleClose = () => {
        setOpen(!open)
      };
const handlesubmit=(e,id)=>{
e.preventDefault()
var ss=students
ss.forEach((s)=>{
    if(s.id===id){
        s=values
    }
})
setStudents(ss)
setOpen(!open)
setMessage('Successfully Added!')
console.log('rajeshkrewqyuo')
setNotification(true)
}
    return(
        <>
              <div className="popup">
           <Dialog onClose={handleClose} open={open}>
        
           <div className="popp">
            <div className="popup_left">
        <div>
<ManageAccountsRoundedIcon style={{fontSize:'10vmax'}}/>
</div>
<div>

</div>
            </div>
            <div className="popup_right">
    
<form className='form' onSubmit={(e)=>handlesubmit(e,values.id)}>
<h5>Name</h5>
<input type='text' className='forminput' name='name'  value={values.name}
                        onChange={handleInputChange}/>
<h5>Age</h5>
<input type='text' className='forminput' name='age'  value={values.age}
                        onChange={handleInputChange}/>
<h5>School</h5>
<input type='text' className='forminput' name='school'  value={values.school}
                        onChange={handleInputChange}/>
                        <h5>Class</h5>
<input type='text' className='forminput' name='class'  value={values.class}
                        onChange={handleInputChange}/>
                        <h5>Division</h5>
<input type='text' className='forminput' name='division'  value={values.division}
                        onChange={handleInputChange}/>
                        <h5>Status</h5>

                        <div className='radiobtnse'>
<input type='radio' name='status' value={values.status} onChange={handleInputChange} placeholder='Name'/>
<label>Active</label>
<input type='radio' name='status' value={values.status} onChange={handleInputChange} placeholder='Name'/>
<label>Invoice</label>
</div>

</form>

            </div>
            <div className='editbtns'>
    <button className='cancel' onClick={handleClose}>cancel</button>
    <button className='add' type='submit'>add</button>
    </div>
            </div>

        </Dialog>
        </div>
        </>
    )
}

export default Edit