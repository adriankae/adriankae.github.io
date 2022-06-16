// import { jsPDF } from "jspdf";

let step = document.getElementsByClassName('step');
let prevBtn = document.getElementById('prev-btn');
let nextBtn = document.getElementById('next-btn');
let dnldBtn = document.getElementById('dnld-btn');
let submitBtn = document.getElementById('submit-btn');
let form = document.getElementsByTagName('form')[0];
let preloader = document.getElementById('preloader-wrapper');
let bodyElement = document.querySelector('body');
let succcessDiv = document.getElementById('success');

form.onsubmit = () => {
    return false
}
let current_step = 0;
let stepCount = 21
step[current_step].classList.add('d-block');
if (current_step == 0) {
    prevBtn.classList.add('d-none');
    submitBtn.classList.add('d-none');
    nextBtn.classList.add('d-inline-block');
}

const progress = (value) => {
    document.getElementsByClassName('progress-bar')[0].style.width = `${value}%`;
}

nextBtn.addEventListener('click', () => {
    current_step++;
    let previous_step = current_step - 1;
    if ((current_step > 0) && (current_step <= stepCount)) {
        prevBtn.classList.remove('d-none');
        prevBtn.classList.add('d-inline-block');
        step[current_step].classList.remove('d-none');
        step[current_step].classList.add('d-block');
        step[previous_step].classList.remove('d-block');
        step[previous_step].classList.add('d-none');
        if (current_step == stepCount) {
            submitBtn.classList.remove('d-none');
            submitBtn.classList.add('d-inline-block');
            nextBtn.classList.remove('d-inline-block');
            nextBtn.classList.add('d-none');
        }
    } else {
        if (current_step > stepCount) {
            form.onsubmit = () => {
                return true
            }
        }
    }
    progress((100 / stepCount) * current_step);
});


prevBtn.addEventListener('click', () => {
    if (current_step > 0) {
        current_step--;
        let previous_step = current_step + 1;
        prevBtn.classList.add('d-none');
        prevBtn.classList.add('d-inline-block');
        step[current_step].classList.remove('d-none');
        step[current_step].classList.add('d-block')
        step[previous_step].classList.remove('d-block');
        step[previous_step].classList.add('d-none');
        if (current_step < stepCount) {
            submitBtn.classList.remove('d-inline-block');
            submitBtn.classList.add('d-none');
            nextBtn.classList.remove('d-none');
            nextBtn.classList.add('d-inline-block');
            prevBtn.classList.remove('d-none');
            prevBtn.classList.add('d-inline-block');
        }
    }

    if (current_step == 0) {
        prevBtn.classList.remove('d-inline-block');
        prevBtn.classList.add('d-none');
    }
    progress((100 / stepCount) * current_step);
});


submitBtn.addEventListener('click', () => {
    preloader.classList.add('d-block');

    const timer = ms => new Promise(res => setTimeout(res, ms));

    timer(100)
        .then(() => {
            bodyElement.classList.add('loaded');
        }).then(() => {
            step[stepCount].classList.remove('d-block');
            step[stepCount].classList.add('d-none');
            prevBtn.classList.remove('d-inline-block');
            prevBtn.classList.add('d-none');
            submitBtn.classList.remove('d-inline-block');
            submitBtn.classList.add('d-none');
            succcessDiv.classList.remove('d-none');
            succcessDiv.classList.add('d-block');
        })

});

dnldBtn.addEventListener('click', () => {
    createPdf();
});

function createPdf() {
  window.jsPDF = window.jspdf.jsPDF
  var title = document.title;
  var satzstamm = document.getElementById('satzstamm1').innerHTML;
  var endung1 = document.getElementById('satzendungen1').value;


  // Default export is a4 paper, portrait, using millimeters for units
  const pdf = new jsPDF("p", "mm", "a4");
  var pageHeight = pdf.internal.pageSize.height || pdf.internal.pageSize.getHeight();
  var pageWidth = pdf.internal.pageSize.width || pdf.internal.pageSize.getWidth();
  console.log(satzstamm)
  var splitSatzstamm = pdf.splitTextToSize(satzstamm, 180);
  // pdf.setFillColor(226, 222, 212);
  pdf.setFont("BlinkMacSystemFont")
  pdf.setFontSize(24);
  pdf.text(title, pageWidth / 2, 30, {align: 'center'});
  pdf.setFontSize(16);
  pdf.text(splitSatzstamm, 20, 50);
  pdf.text(pdf.splitTextToSize(endung1, 180), 20, 80);

  //calculate height of textarea
  // var divHeight = document.getElementById('satzendungen1').offsetHeight;
  console.log(pdf.autoTable.previous.finalY)

  // FOOTER
  let str = "www.adriankaesdorf.de";
  pdf.setTextColor(100);
  pdf.setFontSize(10);
  pdf.text(str, pageWidth / 2, pageHeight  - 10, {align: 'center'});

  pdf.save("a4.pdf");


}
