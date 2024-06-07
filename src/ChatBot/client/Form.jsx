import { useState } from "react";

function Form()
{
    const[fName , setfName] = useState('');
    const[lName, setlName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [qanswer,setQanswer] = useState('');


    const handleSubmit = (e)=>
        {
            e.preventDefault();
            console.log('form submitted',fName,lName,email,gender,qanswer);
        }

    const selectGender = (e)=>
        {
            setGender(e.target.value);
            console.log(gender);
        }
    const handleRadioChange = (e)=>
        {
            setQanswer(e.target.value)
            console.log(qanswer);
        }

    return(
        <>
        <form className="html-form" onSubmit={(e)=>
            {
                handleSubmit(e);
            }
        }>
    
    <div className="fname-div">
        First Name :
    <input type="text"  id="fname" 
    onChange={(e)=>
        {
            setfName(e.target.value);
            console.log(fName);
        }
    }/>
    </div>

    <div className="lname-div">
        Last Name:
    <input type="text" id="lname" onChange={(e)=>
        {
            setlName(e.target.value);
            console.log(lName);
        }
    }/>
    </div>
    



<div className="email-div">
     Email: 
<input type="text" name="email" id="email" onChange={(e)=>
    {
        setEmail(e.target.value);
        console.log(email);
    }
}/>
</div>



    <div className="gender-div">
        Gender: 
<select id="gender" onChange={selectGender}>
    <option value="Male" >Male</option>
    <option value="Female">Female</option>
    <option value="Prefer not to disclose">Prefer not to disclose</option>
</select>
    </div>


    <div className="q1-div">
        How often do you book services online ? 
<section>
   <span> <input type="radio" name="q1" value="Almost everyday" onChange={handleRadioChange}/>Almost everyday</span>
<span><input type="radio" name="q1" value="2-3 times a week" onChange={handleRadioChange}/>2-3 times a week</span>
<span><input type="radio" name="q1" value="once a week" onChange={handleRadioChange}/>once a week</span>
<span><input type="radio" name="q1" value="once a month" onChange={handleRadioChange}/>once a month</span>
<span><input type="radio" name="q1" value="Never"onChange={handleRadioChange} />Never</span>
</section>
    </div>



<div className="btnDiv">
    <button type="submit" onClick={(e)=>
        {
            handleSubmit(e);
        }
    }>Submit</button>
</div>
</form>
</>
);
}

export default Form;