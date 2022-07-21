const requestURL = "https://zubiedoobiedoo.github.io/wdd230/temple-inn-and-suites/json/data.json";
const cards = document.querySelector(".cards");


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject)
        const business = jsonObject['temples'];
        business.forEach(displayBusiness);
    });

function displayBusiness(business) {
    let card = document.createElement("section");
    let img = document.createElement("img");
    let name = document.createElement("h1");
    let pNum = document.createElement("p");
    let liNum = document.createElement("li");
    let pEmail = document.createElement("p");
    let liEm = document.createElement("li");
    let pSer = document.createElement("p");
    let liS1 = document.createElement("li");
    let liS2 = document.createElement("li");
    let liS3 = document.createElement("li");
    let liS4 = document.createElement("li");
    let pOrd = document.createElement("p");
    let lioEnd = document.createElement("li");
    let lioCon = document.createElement("li");
    let lioSeal = document.createElement("li");
    let lioBap = document.createElement("li");
    let lioMPO = document.createElement("li");
    let lioInit = document.createElement("li");
    let pHis = document.createElement("p");
    let lihistOne = document.createElement("li");
    let lihistTwo = document.createElement("li");
    let lihistThree = document.createElement("li");
    let pOS = document.createElement("p");
    let pSS = document.createElement("p");
    let Addr = document.createElement("p");
    let liAddr = document.createElement("li");
    let website = document.createElement("a");
    let membership = document.createElement("p");

    img.setAttribute('src', business.imagePicture);
    img.setAttribute('alt', `${business.templeName} imagePicture`);
    img.setAttribute('loading', 'lazy');
    img.classList.add("bImg");

    name.textContent = business.templeName;
    name.classList.add("bName");    
    Addr.textContent = business.address;
    Addr.classList.add("bAddr");
    liAddr.textContent = business.addr;
    liAddr.classList.add("bAddr");
    pNum.textContent = business.phone;
    pNum.classList.add("bNum");
    liNum.textContent = business.num;
    liNum.classList.add("bNum");    
    pEmail.textContent = business.email;
    pEmail.classList.add("bEmail");
    liEm.textContent = business.em;
    liEm.classList.add("bEm");

    pSer.textContent = business.services;
    pSer.classList.add("bSer");
    liS1.textContent = business.s1;
    liS1.classList.add("bS1");
    liS2.textContent = business.s2;
    liS2.classList.add("bS2");
    liS3.textContent = business.s3;
    liS3.classList.add("bS3");
    liS4.textContent = business.s4;
    liS4.classList.add("bS4");

    pOrd.textContent = business.ordinances;
    pOrd.classList.add("bOrd");
    lioEnd.textContent = business.oEndow;
    lioEnd.classList.add("bEnd");
    lioCon.textContent = business.oConfirmations;
    lioCon.classList.add("bCon");
    lioSeal.textContent = business.oSeal;
    lioSeal.classList.add("bSeal");
    lioBap.textContent = business.oBap;
    lioBap.classList.add("bBap");
    lioMPO.textContent = business.oMPO;
    lioMPO.classList.add("bMPO");
    lioInit.textContent = business.oInit;
    lioInit.classList.add("bInit");

    pHis.textContent = business.history;
    pHis.classList.add("bHis");
    lihistOne.textContent = business.histOne;
    lihistOne.classList.add("bH1");
    lihistTwo.textContent = business.histTwo;
    lihistTwo.classList.add("bH2");
    lihistThree.textContent = business.histThree;
    lihistThree.classList.add("bH3");


    pOS.textContent = business.ordinanceSchedule;
    pOS.classList.add("bOS");
    pSS.textContent = business.sessionSchedule;
    pSS.classList.add("bSer");
    membership.textContent = business.membershipLevel;
    website.setAttribute('href', `${business.website}`);
    website.classList.add("bWeb");

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(Addr);
    card.appendChild(liAddr);
    card.appendChild(pNum);
    card.appendChild(liNum);
    card.appendChild(pEmail);
    card.appendChild(liEm);
    card.appendChild(pSer);
    card.appendChild(liS1);
    card.appendChild(liS2);
    card.appendChild(liS3);
    card.appendChild(liS4);

    card.appendChild(pOrd);
    card.appendChild(lioEnd);
    card.appendChild(lioCon);
    card.appendChild(lioSeal);
    card.appendChild(lioBap);
    card.appendChild(lioMPO);
    card.appendChild(lioInit);

    card.appendChild(pHis);
    card.appendChild(lihistOne);
    card.appendChild(lihistTwo);
    card.appendChild(lihistThree);

    card.appendChild(pOS);
    card.appendChild(pSS);
    card.appendChild(website);
    card.appendChild(membership);

    document.querySelector(".cards").appendChild(card);
};