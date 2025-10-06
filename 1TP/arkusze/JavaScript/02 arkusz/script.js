function obliczRate() {

const wybranyReact = document.getElementById('react').checked;
const wybranyJavaScript = document.getElementById('javascript').checked;
const liczbaRat = parseInt(document.getElementById('raty').value);
const wybraneMiasto = document.getElementById('miasto').value;





let cenaCalkowita = 0;
const cenaReact = 5000;
const cenaJavaScript = 3000;

if (wybranyReact) cenaCalkowita += cenaReact;
if (wybranyJavaScript) cenaCalkowita += cenaJavaScript;


const rata = cenaCalkowita / liczbaRat;


const wynik = document.getElementById('wynik');
wynik.innerHTML = `Kurs odbędzie się w ${wybraneMiasto}. Koszt całkowity: ${cenaCalkowita} zł. Pieces: ${liczbaRat} rat po ${rata.toFixed(2)} zł`;
}