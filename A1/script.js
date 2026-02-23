function calculateAge() 
{
    const dobInput = document.getElementById('dob').value;
    const resultElement = document.getElementById('ageResult');
    if (!dobInput) 
        return resultElement.textContent = "Please enter date of birth.";
    const dob = new Date(dobInput);
    const now = new Date();
    let y = now.getFullYear() - dob.getFullYear();
    let m = now.getMonth() - dob.getMonth();
    let d = now.getDate() - dob.getDate();
    if (d < 0) 
    {
        m--; d += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    }
    if (m < 0) 
    {
        y--; m += 12;
    }
    if (dob > now) 
        resultElement.textContent = "Invalid date.";
    else resultElement.textContent = `Age: ${y}y ${m}m ${d}d`;
}



