const theForm = document.querySelector(".form");
document.querySelector("#button-print").addEventListener("click", function () {
  if (theForm.skillsets.value === "") {
    csStudent();
  } else {
    nonCsStudent();
  }
});
function csStudent() {
  document.querySelector(".input").style.display = "none";
  var outputContainer = document.querySelector(".output");
  outputContainer.innerHTML = `<h1>${theForm["name"].value}</h1>
  <div class="contact">
    <div class="eachcontact">
      <img src="./resources/linkedin.svg" alt="logo" />
      <a href="${theForm["linkedin"].value}"
        >${theForm["linkedin"].value.slice(
          theForm.linkedin.value.indexOf("m") + 1,
          theForm.linkedin.value.length
        )}</a
      >
    </div>
    <div class="eachcontact">
      <img src="./resources/envelope-fill.svg" alt="logo" />
      <a href="mailto:${theForm["email"].value}">${theForm["email"].value}</a>
    </div>
    <div class="eachcontact">
      <img src="./resources/telephone-fill.svg" alt="logo" />
      <a href="tel:${theForm["contact"].value}">${theForm["contact"].value}</a>
    </div>
  </div>
  <div class="section education">
    <div class="each-education">
      <h2 class="output-h2">Education</h2>
      <hr />

      <div class="college-time">
        <h3 class="college">${theForm["college-name"].value}</h3>

        <p class="time">${theForm["college-year"].value}</p>
      </div>
      <div class="degree-grade">
        <p class="degree">${theForm["college-degree"].value}</p>

        <p class="grade">Overall Grade Point:${
          theForm["college-grade"].value
        }</p>
      </div>
    </div>
    <div class="each-education">
      <div class="college-time">
        <h3 class="college">${theForm["college-name2"].value}</h3>

        <p class="time">${theForm["college-year2"].value}</p>
      </div>
      <div class="degree-grade">
        <p class="degree">${theForm["college-degree2"].value}</p>

        <p class="grade">${theForm["college-grade2"].value}</p>
      </div>
    </div>
    <div class="each-education">
      <div class="college-time">
        <h3 class="college">${theForm["college-name3"].value}</h3>

        <p class="time">${theForm["college-year3"].value}</p>
      </div>
      <div class="degree-grade">
        <p class="degree">${theForm["college-degree3"].value}</p>

        <p class="grade">${theForm["college-grade3"].value}</p>
      </div>
    </div>

    <h2 class="output-h2">Coursework</h2>

    <div class="courses">
      <h3 class="college">Courses:</h3>
      <p>
      ${theForm["courseworks"].value}
      </p>
    </div>
  </div>
  <div class="each-education">
    <h2 class="output-h2">Skills</h2>
    <hr />
    <div class="courses skills">
      <h3 class="college">Languages:</h3>
      <p>${theForm["langauges"].value}</p>
    </div>
    <div class="courses skills">
      <h3 class="college">Tools:</h3>
      <p>${theForm["tools"].value}</p>
    </div>
  </div>

  <div class="section">
    <h2 class="output-h2">Projects</h2>
    <hr />
    <div class="each-project">
      <div class="name-tool-date">
        <div class="name-tool">
          <h3 class="college">${theForm["project1-name"].value}</h3>
          <p>| ${theForm["project1-tool"].value}</p>
        </div>
        <p>${theForm["project1-time"].value}</p>
      </div>
      <div class="bulletpoints">
        <ul>
          <li>${theForm["project1-bullet1"].value}</li>
          <li>${theForm["project1-bullet2"].value}</li>
          <li>${theForm["project1-bullet3"].value}</li>

          
        </ul>
      </div>
    </div>
  </div>
  <div class="section">
    <h2 class="output-h2">Experience</h2>
    <hr />
    <div class="each-project">
      <div class="name-tool-date">
        <div class="name-tool">
          <h3 class="college experience-industry smallpara">
          ${theForm["experience1-name"].value}
          </h3>
          <p class="smallpara">| ${theForm["experience1-post"].value}</p>
        </div>
        <p class="smallpara">${theForm["experience1-duration"].value}</p>
      </div>
      <div class="bulletpoints experience-role">
        <p>${theForm["experience1-responsibility"].value}</p>
      </div>
    </div>
  </div>
  <div class="section">
    <h2 class="output-h2">Hobbies</h2>
    <div class="each-project">
      <div class="name-tool-date">
        <div class="name-tool">
          <h3 class="college experience-industry">${theForm["hobby"].value}</h3>
        </div>
      </div>
      <div class="bulletpoints experience-role">
        <p>
        ${theForm["hobby-description"].value}
        </p>
      </div>
    </div>
  </div>`;
  print();
}
function nonCsStudent() {
  document.querySelector(".input").style.display = "none";
  var outputContainer = document.querySelector(".output");
  outputContainer.innerHTML = `<h1>${theForm["name"].value}</h1>
  <div class="contact">
    <div class="eachcontact">
      <img src="./resources/linkedin.svg" alt="logo" />
      <a href="${theForm["linkedin"].value}"
        >${theForm["linkedin"].value.slice(
          theForm.linkedin.value.indexOf("m") + 1,
          theForm.linkedin.value.length
        )}</a
      >
    </div>
    <div class="eachcontact">
      <img src="./resources/envelope-fill.svg" alt="logo" />
      <a href="mailto:${theForm["email"].value}">${theForm["email"].value}</a>
    </div>
    <div class="eachcontact">
      <img src="./resources/telephone-fill.svg" alt="logo" />
      <a href="tel:${theForm["contact"].value}">${theForm["contact"].value}</a>
    </div>
  </div>
  <div class="section education">
    <div class="each-education">
      <h2 class="output-h2">Education</h2>
      <hr />

      <div class="college-time">
        <h3 class="college">${theForm["college-name"].value}</h3>

        <p class="time">${theForm["college-year"].value}</p>
      </div>
      <div class="degree-grade">
        <p class="degree">${theForm["college-degree"].value}</p>

        <p class="grade">Overall Grade Point:${
          theForm["college-grade"].value
        }</p>
      </div>
    </div>
    <div class="each-education">
      <div class="college-time">
        <h3 class="college">${theForm["college-name2"].value}</h3>

        <p class="time">${theForm["college-year2"].value}</p>
      </div>
      <div class="degree-grade">
        <p class="degree">${theForm["college-degree2"].value}</p>

        <p class="grade">${theForm["college-grade2"].value}</p>
      </div>
    </div>
    <div class="each-education">
      <div class="college-time">
        <h3 class="college">${theForm["college-name3"].value}</h3>

        <p class="time">${theForm["college-year3"].value}</p>
      </div>
      <div class="degree-grade">
        <p class="degree">${theForm["college-degree3"].value}</p>

        <p class="grade">${theForm["college-grade3"].value}</p>
      </div>
    </div>

    <h2 class="output-h2">Coursework</h2>

    <div class="courses">
      <h3 class="college">Courses:</h3>
      <p>
      ${theForm["courseworks"].value}
      </p>
    </div>
  </div>
  <div class="each-education">
    <h2 class="output-h2">Skills</h2>
    <hr />
    <div class="courses skills">
      <h3 class="college">Skills:</h3>
      <p>${theForm["skillsets"].value}</p>
    </div>
    
  </div>

  <div class="section">
    <h2 class="output-h2">Projects</h2>
    <hr />
    <div class="each-project">
      <div class="name-tool-date">
        <div class="name-tool">
          <h3 class="college">${theForm["project1-name"].value}</h3>
          <p>| ${theForm["project1-tool"].value}</p>
        </div>
        <p>${theForm["project1-time"].value}</p>
      </div>
      <div class="bulletpoints">
        <ul>
          <li>${theForm["project1-bullet1"].value}</li>
          <li>${theForm["project1-bullet2"].value}</li>
          <li>${theForm["project1-bullet3"].value}</li>

          
        </ul>
      </div>
    </div>
  </div>
  <div class="section">
    <h2 class="output-h2">Experience</h2>
    <hr />
    <div class="each-project">
      <div class="name-tool-date">
        <div class="name-tool">
          <h3 class="college experience-industry smallpara">
          ${theForm["experience1-name"].value}
          </h3>
          <p class="smallpara">| ${theForm["experience1-post"].value}</p>
        </div>
        <p class="smallpara">${theForm["experience1-duration"].value}</p>
      </div>
      <div class="bulletpoints experience-role">
        <p>${theForm["experience1-responsibility"].value}</p>
      </div>
    </div>
  </div>
  <div class="section">
    <h2 class="output-h2">Hobbies</h2>
    <div class="each-project">
      <div class="name-tool-date">
        <div class="name-tool">
          <h3 class="college experience-industry">${theForm["hobby"].value}</h3>
        </div>
      </div>
      <div class="bulletpoints experience-role">
        <p>
        ${theForm["hobby-description"].value}
        </p>
      </div>
    </div>
  </div>`;
  print();
}

//var link=document.querySelector("input[name=linkedin]").value;
//link.slice(link.indexOf("m")+1,link.length)
