const ShowPopUp=document.querySelector('.Dugmic-za-vise');
const PopUp=document.querySelector('.PopUp');
const CloseButton=document.querySelector('.Dugmic-za-izlaz');

ShowPopUp.onclick=()=>{
    PopUp.classList.add('active');
}

CloseButton.onclick=()=>{
    PopUp.classList.remove('active');
}

const SvaZanimanja=document.getElementById("Zanimanja");

const OtvaraSeWeb=()=>{
    SvaZanimanja.innerHTML=` <div class="LijevaStrana">

            <h2>Bavim se web razvojem, s posebnim fokusom na primjenu HTML-a, CSS-a i JavaScript-a u izradi modernih, responzivnih i interaktivnih web stranica. Kroz  iskustvo u radu s ovim tehnologijama, stekao sam vještine koje mi omogućavaju da efikasno razvijam visokokvalitetna rješenja, prilagođena potrebama klijenata i korisnika.</h2>
        </div>
        <div class="DesnaStrana">

            <div class="CijeliWeb">
                <button class="WD " id="WD" value="" onclick="OtvaraSeWeb()">Web Development</button>
            </div>

            <div class="CijeliFoto">
            <button class="FF " id="FF" value="" onclick="OtvaraSeFoto()">Fotografisanje</button>
            </div>

            <div class="CijeliJezici">
            <button class="SJ " id="SJ" value="" onclick="OtvaraSeJezik()">Strani jezici</button>
            </div>
        </div>



        <style>

        .Poslovi{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background:rgb(3, 87, 76) ;
    size: 600px;
    background-size: cover; /* prilagođava sliku da pokrije ceo div */
    background-position: center; /* centrira sliku u divu */
    height: 500px;
    border-top: 5px solid rgb(173, 173, 173);
    border-bottom: 5px solid rgb(173, 173, 173);
}
.LijevaStrana{
    width: 55%;
    display: flex;
    flex-direction: row;
    text-align: center;
}
.LijevaStrana h2{
    width: 700px;
    font-size: xx-large;
    height:50%;
    font-family: "DM Serif Display", serif;
    font-style: italic;
    padding:55px;
}
@media only screen and (max-width: 600px) {
   .Poslovi{
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    background:rgb(3, 87, 76) ;
    size: 600px;
    background-size: cover; /* prilagođava sliku da pokrije ceo div */
    background-position: center; /* centrira sliku u divu */
    height: 500px;
    border-top: 5px solid rgb(173, 173, 173);
    border-bottom: 5px solid rgb(173, 173, 173);
}
.LijevaStrana{
    width: 95%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
    height:75%;
}
.LijevaStrana h2{
    width: 700px;
    font-size: large;
    height:30%;
    font-family: "DM Serif Display", serif;
    font-style: italic;
    padding:55px;
}
}

        </style>
        `
}

const OtvaraSeFoto=()=>{
    SvaZanimanja.innerHTML=` <div class="LijevaStrana">

    <h2>Bavim se  fotografijom, koristeći Nikon D3100 za kreiranje visokokvalitetnih fotografija koje bilježe jedinstvene trenutke i scene. Svoj rad redovno objavljujem na Instagram profilu @sola_ph_, gdje možete pratiti najnovije projekte i primjere mog fotografskog stila.</h2>
</div>
<div class="DesnaStrana">

    <div class="CijeliWeb">
        <button class="WD " id="WD" value="" onclick="OtvaraSeWeb()">Web Development</button>
    </div>

    <div class="CijeliFoto">
    <button class="FF " id="FF" value="" onclick="OtvaraSeFoto()">Fotografisanje</button>
    </div>

    <div class="CijeliJezici">
    <button class="SJ " id="SJ" value="" onclick="OtvaraSeJezik()">Strani jezici</button>
    </div>
</div>



<style>

.Poslovi{
display: flex;
flex-direction: row;
justify-content: space-between;
    background:rgb(4, 111, 99) ;
size: 600px;
background-size: cover; /* prilagođava sliku da pokrije ceo div */
background-position: center; /* centrira sliku u divu */
height: 500px;
border-top: 5px solid rgb(173, 173, 173);
border-bottom: 5px solid rgb(173, 173, 173);
}
.LijevaStrana{
width: 55%;
display: flex;
flex-direction: row;
text-align: center;
}
.LijevaStrana h2{
width: 700px;
font-size: xx-large;
height:50%;
font-family: "DM Serif Display", serif;
font-style: italic;
padding:55px;
}

@media only screen and (max-width: 600px) {
   .Poslovi{
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    background:rgb(4, 111, 99) ;
    size: 600px;
    background-size: cover; /* prilagođava sliku da pokrije ceo div */
    background-position: center; /* centrira sliku u divu */
    height: 500px;
    border-top: 5px solid rgb(173, 173, 173);
    border-bottom: 5px solid rgb(173, 173, 173);
}
.LijevaStrana{
    width: 95%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
    height:75%;
}
.LijevaStrana h2{
    width: 700px;
    font-size: large;
    height:30%;
    font-family: "DM Serif Display", serif;
    font-style: italic;
    padding:55px;
}
}
</style>
`
}

const OtvaraSeJezik=()=>{
    SvaZanimanja.innerHTML=` <div class="LijevaStrana">

    <h2>
    Posvećen sam učenju stranih jezika, s posebnim naglaskom na engleski i njemački, koje govorim na visokom nivou. Trenutno radim na usavršavanju francuskog jezika, koji poznajem na osnovnom nivou, a dodatnu pažnju posvećujem proširivanju vokabulara i unapređenju gramatičkih struktura kroz aktivnu praksu i učenje.</h2>
</div>
<div class="DesnaStrana">

    <div class="CijeliWeb">
        <button class="WD " id="WD" value="" onclick="OtvaraSeWeb()">Web Development</button>
    </div>

    <div class="CijeliFoto">
    <button class="FF " id="FF" value="" onclick="OtvaraSeFoto()">Fotografisanje</button>
    </div>

    <div class="CijeliJezici">
    <button class="SJ " id="SJ" value="" onclick="OtvaraSeJezik()">Strani jezici</button>
    </div>
</div>



<style>

.Poslovi{
display: flex;
flex-direction: row;
justify-content: space-between;
background:rgb(4, 193, 171) ;
size: 600px;
background-size: cover; /* prilagođava sliku da pokrije ceo div */
background-position: center; /* centrira sliku u divu */
height: 500px;
border-top: 5px solid rgb(173, 173, 173);
border-bottom: 5px solid rgb(173, 173, 173);
}
.LijevaStrana{
width: 55%;
display: flex;
flex-direction: row;
text-align: center;
}
.LijevaStrana h2{
width: 700px;
font-size: xx-large;
height:50%;
font-family: "DM Serif Display", serif;
font-style: italic;
padding:55px;
}

@media only screen and (max-width: 600px) {
   .Poslovi{
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    background:rgb(4, 193, 171) ;
    size: 600px;
    background-size: cover; /* prilagođava sliku da pokrije ceo div */
    background-position: center; /* centrira sliku u divu */
    height: 500px;
    border-top: 5px solid rgb(173, 173, 173);
    border-bottom: 5px solid rgb(173, 173, 173);
}
.LijevaStrana{
    width: 95%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
    height:75%;
}
.LijevaStrana h2{
    width: 700px;
    font-size: large;
    height:30%;
    font-family: "DM Serif Display", serif;
    font-style: italic;
    padding:55px;
}
}
</style>
`
}

const HS=document.getElementById("SS");

const PromjenaUHS=()=>{
    HS.innerHTML=`<div class="HS-programiranje">
                        <h2>Programiranje</h2>
                        <p>Imam iskustva u programiranju sa C++ i Python, ali sam najviše zainteresovan za web razvoj. Moj glavni interes je u web razvoju, gdje se usredsređujem na HTML, CSS i JavaScript za izradu modernih i funkcionalnih web rješenja.</p>
                    </div>
                    <div class="HS-S-J">
                        <h2>Jezici</h2>
                        <p>Tečno govorim engleski i njemački jezik, a otvoren sam za učenje i drugih jezika prema potrebi. Brzo se prilagođavam novim jezicima i spreman sam da usavršim dodatne jezičke vještine.</p>
                    </div>
                    <div class="HS-Certifikati">
                        <h2>Certifikati</h2>
                        <p>Završio sam kurs programiranja u C++ i posjedujem relevantne certifikate koji potvrđuju moje uspjehe. Takođe, imam i certifikate iz srednje škole koji dokumentuju moje akademske uspjehe i dodatne vještine.</p>
                    </div>
                    <div class="HS-PisanjeKodova">
                        <h2>Pisanje Kodova</h2>
                        <p>Pisanje koda mi nije problem, i lako se prilagođavam različitim programskim jezicima. Moje iskustvo omogućava mi da brzo savladam nove tehnologije i učinkovito primijenim kodiranje u različitim okruženjima.</p>
                    </div>`
}

const PromjenaUSS=()=>{
    HS.innerHTML=`<div class="SS-Timski-Rad">
                        <h2>Timski Rad</h2>
                        <p>Kao timski igrač, ističem se u saradnji i efektivnoj komunikaciji, prilagođavajući se različitim stilovima rada. Fokusiram se na aktivno slušanje i konstruktivnu povratnu informaciju kako bih doprinio postizanju zajedničkih ciljeva.</p>
                    </div>
                    <div class="SS-R-P ">
                        <h2>Rješavanje Problema</h2>
                        <p>Sposoban sam brzo identificirati i analizirati probleme te razviti efikasna rješenja. Kroz kreativan pristup, uspješno prevazilazim izazove i doprinosim uspjehu projekata.</p>
                    </div>
                    <div class="SS-U-V">
                        <h2>Upravljanje Vremenom</h2>
                        <p>Izvrsno upravljam vremenom, pažljivo raspoređujući zadatke i prioritete kako bih osigurao da projekti budu završeni na vrijeme. Moje planiranje i praćenje napretka omogućavaju pravovremeno postizanje ciljeva.</p>
                    </div>
                    <div class="SS-K-R">
                        <h2>Kritičko razmišljanje</h2>
                        <p>Kritičko razmišljanje mi pomaže da objektivno analiziram informacije, procijenim opcije i donosim racionalne odluke za efikasnije rješavanje problema.</p>
                    </div>
                    <div class="SS-E-R">
                        <h2>Etika Rada</h2>
                        <p>Posjedujem snažnu radnu etiku, koja uključuje posvećenost, pouzdanost i integritet u svakom zadatku. Uvijek se trudim da dostignem najviše standarde kvaliteta i da doprinosim pozitivnoj radnoj atmosferi.</p>
                    </div>`
}