export const listOfServices = {
    author : 'bot',
    message : `<div className="services" id="serviceDiv">
    <ul>
         <li className="each"> <a href="http://localhost:3000/medical">Medical</a></li>
         <li className="each"> <a href="http://localhost:3000/beauty">Beauty</a></li>
         <li className="each"> <a href="http://localhost:3000/main">Maintainance</a></li>
        
    </ul>
    </div>`
};

export const wouldYouLike = {
    author : `bot`,
    message : `<form action="">
    <input type="text">
    <button type="submit">
        Send
    </button>
</form>`,
};


export const medicalList = {
    message : `<p>Please click the underlined text to move to medical lists <a href="http://localhost:3000/medical">&nbsp;CLICK &nbsp;</a></p>`
};

export const beauty = {
    message : `<p>You can navigate to see the beauty service providers by clicking <b><a href="http://localhost:3000/beauty">&nbsp;BEAUTY &nbsp;</a></b> Services</p>`
}

export const spa = {
    message : `We have many spa service providers that you can book . Please click the link to move to the <b><a href="http://localhost:3000/spa">&nbsp;SPA&nbsp;</a></b>pages`
}

export const maintainance = {
    message : `We have many maintainance providers that you can book . Please click the link to move to the <b><a href="http://localhost:3000/main">&nbsp;MAINTAINANCE&nbsp;&nbsp;</a></b>pages`
}


export const form = {
    message : `<form className="html-form" onSubmit={(e)=>
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
`
}