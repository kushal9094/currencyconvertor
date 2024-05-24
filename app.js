base_url="https://latest.currency-api.pages.dev/v1/currencies/eur.json";
const dropdowns=document.querySelectorAll('.dropdown select');
let inputs=document.getElementById('amount');
const msg=document.querySelector('.msg');
// console.log(countryList)
for (let select of dropdowns)
  {
    for(curCode in countryList)
      {
        let newOption=document.createElement('option');
        newOption.innerText=curCode;
        newOption.value=curCode;
        if(select.name==="from" && curCode==="USD")
          newOption.selected="selected";
        if(select.name==="to" && curCode==="INR")
          newOption.selected="selected";
        select.append(newOption);
      }
    select.addEventListener("change",(evt)=>
      {
        updateFlag(evt.target)
      })
  }

const updateFlag=(element)=>
{
  let curCode=element.value;
  console.log(curCode);
  let countryCode=countryList[curCode]
  console.log(countryCode)
  let newsrc=`https://flagsapi.com/${countryCode}/flat/64.png`
  element.parentElement.querySelector('img').src=newsrc;
}

btn=document.querySelector('form button');
btn.addEventListener("click",(evt)=>
  {
    evt.preventDefault();
    let amount=document.getElementById('amount');
    let val=amount.value;
    if(val<1)
    {
      val=1;
      amount.value=1;
    }
    convert()
  })


const convert=async()=>
  {
    let response=await fetch(base_url);
    let data= await response.json();
    let from=document.querySelector('form .from select');
    let lowervalue=from.value.toLowerCase();
    let the_val=`${data.eur[lowervalue]}`;
    let final1=(inputs.value/the_val);
    let to=document.querySelector('form .to select');
    let lowervalue2=to.value.toLowerCase();
    let the_val2=`${data.eur[lowervalue2]}`;
    console.log(the_val2*final1);
    msg.innerText=`${inputs.value} ${from.value}= ${final1*the_val2} ${to.value}`;
  }
convert()