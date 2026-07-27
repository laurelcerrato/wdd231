const getString = window.location.search;
const myInfo = new URLSearchParams(getString);
console.log(myInfo);

document.querySelector('#results').innerHTML = `
<h2>Results</h2>
<p>Name:  ${myInfo.get('fname')} ${myInfo.get('lname')}</p>
            <p>Position Title: ${myInfo.get('position')} </p>
            <p>Email: ${myInfo.get('email')}</p>
            <p>Phone: ${myInfo.get('phone')}</p>
            <p>Business Name: ${myInfo.get('businessname')}</p>
            <p>Membership Level: ${myInfo.get('membership')}</p>
            <p>Business Description: ${myInfo.get('description')}</p>
         
`;