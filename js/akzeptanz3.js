

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
let stepCount = 28;
step[current_step].classList.add('d-block');
if (current_step == 0) {
    prevBtn.classList.add('d-none');
    dnldBtn.classList.add('d-none');
    submitBtn.classList.add('d-none');
    nextBtn.classList.add('d-inline-block');
}

const progress = (value) => {
    document.getElementsByClassName('progress-bar')[0].style.width = `${value}%`;
}

nextBtn.addEventListener('click', () => {
    console.log(document.getElementById('fakt1').value);
    for (let i = 1; i <= 6; i++){
      if (document.getElementById('fakt' + i).value != '') {
        document.getElementById('satzstamm' + i + 0).innerHTML = 'Das Schwierige daran, \'' + document.getElementById('fakt' + i).value + '\' zu akzeptieren, ist...';
        document.getElementById('satzstamm' + i + 1).innerHTML = 'Wenn ich \'' + document.getElementById('fakt' + i).value + '\' vollständig akzeptieren würde, ...';

      }
    }
    current_step++;
    let previous_step = current_step - 1;
    if ((current_step > 0) && (current_step <= stepCount)) {
        prevBtn.classList.remove('d-none');
        prevBtn.classList.add('d-inline-block');
        dnldBtn.classList.add('d-none');
        console.log(step[current_step]);
        console.log(current_step);
        step[previous_step].classList.remove('d-block');
        step[previous_step].classList.add('d-none');

        step[current_step].classList.remove('d-none');
        step[current_step].classList.add('d-block');

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
        dnldBtn.classList.add('d-none');
        step[current_step].classList.remove('d-none');
        step[current_step].classList.add('d-block')
        step[previous_step].classList.remove('d-block');
        step[previous_step].classList.add('d-none');
        if (current_step < stepCount) {
            // dnld.classList.remove('d-inline-block');
            dnldBtn.classList.add('d-none');
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
            dnldBtn.classList.remove('d-none');
            dnldBtn.classList.add('d-inline-block');
        })

});

dnldBtn.addEventListener('click', () => {
    createPdf();
});

function createPdf() {
  /*
  creates array with stämmen and endungen.
  then builds content:
  first title,
  then content from array
  */

  var contentArray = new Array();

  for (let i = 1; i < 5; i++){
    for (let j = 0; j < 4; j++){
      console.log("Hello " + i + j);
      console.log(document.getElementById('satzstamm' + i + j).innerHTML);
      contentArray.push([
              { text: document.getElementById('satzstamm' + i + j).innerHTML, style: 'header', margin: [0,20,0,20], dontBreakRows: true },
              { style: 'tableExample',
        			table: {
                widths: [420, 'auto', 'auto'],
    			       body: [[{
                   fillColor: '#8E8D8A',
    						   text: document.getElementById('satzendungen' + i + j).value,
                   color: '#EAE7DC'
    					   }]]
              },
          		layout: {
          		    defaultBorder: false,
          		} }
        ]);
      }
  }

  console.log(contentArray)

  var docDefinition = {
    footer: {
        columns: [
      '',
      { text: 'www.adriankaesdorf.de', alignment: 'center', margin: [0, 80, 0, 20], style: 'footer'},
      ''
    ]},
    background: function () {
        return {
	        canvas: [
				{
					type: 'rect',
					x: 0, y: 0, w: 595.28, h: 841.89,
					color: '#EAE7DC'
				}
			]
	    };
    },
    content: [
      {text: document.title, alignment: 'center', style: 'title', margin: [0,0,0,0]},
      {text: getCurrentDate(), alignment: 'center', margin: [0,10,0,30]},
  		'Hier ist die Zusammenfassung deiner Satzendungen. Heb sie gut auf! Du kannst so deine Entwicklung mitverfolgen.',
      contentArray
  	],
    pageMargins: [80, 80, 80, 120],
    styles: {
      title: {
        fontSize: 22,
        bold: true,
        color: '#022C6E',
        font : 'Roboto'
      },
      header: {
        fontSize: 16,
        bold: true,
        color: '#2832D2'
      },
      footer: {
        fontSize: 10,
        color: '#8E8D8A'
      }
    }

  }
  pdfMake.createPdf(docDefinition).download();

}

function getCurrentDate(){
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();

  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;

  return dd + '.' + mm + '.' + yyyy;

}
