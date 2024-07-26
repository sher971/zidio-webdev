const dynamicResume = (options, themeOptions) => {
  // Extract expertise items from options object
  const expertiseItems = [options.exp_1, options.exp_2, options.exp_3];

  // Generate HTML for expertise items
  const expertise = expertiseItems.map(expertise => {
    if (expertise) {
      return `<p class="para mb-1">${expertise}<br /></p>`;
    }
    return '';
  }).join('');

  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>resumebuilder</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossorigin="anonymous"
        />
        <style>
          .resume {
            width: 6.1in;
            height: 6in;
          }
          .box {
            background-color: ${themeOptions.wholeBodyColor};
            width: 100%;
            height: 100%;
          }
          .left-side {
            color: ${themeOptions.leftTextColor};
            width: 33%;
            height: 100%;
            background-color: ${themeOptions.leftBackgroundColor};
          }
          .right-side {
            height: 100%;
            width: 65%;
            color: ${themeOptions.rightTextColor};
          }
          .name {
            font-size: 1.2rem;
          }
          .profile-image {
            width: 90%;
            margin-left: 5%;
            margin-top: 3%;
          }
          .profile-image img {
            border-radius: 50%;
          }
          .heading-text {
            font-size: 0.9rem;
          }
          .para,
          .per-info {
            font-size: 0.7rem !important;
          }
          .about .para {
            width: 93%;
          }
          .key-skills li {
            font-size: 0.7rem;
          }
        </style>
      </head>
      <body>
        <div class="resume border shadow d-flex aligh-items-center jusify-content-center">
          <div class="box">
            <div class="left-side d-inline-block">
              <div class="contact ml-2 mt-2">
                <div class="heading-text text-uppercase">Contact</div>
                <p class="para mb-1">
                  House no: 72-2 Jigatola, Dhaka <br />
                  ${options.phone}<br />
                  ${options.phone} <br />
                  ${options.email} <br />
                  www.website-domain.com
                </p>
              </div>
              <div class="expert ml-2 mt-2">
                <div class="heading-text text-uppercase">Expertise Area</div>
                ${expertise}
                <p class="para mb-1">Digital marketing<br /></p>
              </div>
              <div class="skill ml-2 mt-2">
                <div class="heading-text text-uppercase">IT Skill</div>
                <p class="para mb-1">
                  ${options.skills} <br />
                  ${options.skills} <br />
                  Video Editing, Linux, Windows, <br />
                  Web Developer (Freelancer)<br />
                </p>
              </div>
              <div class="hobbies ml-2 mt-2">
                <div class="heading-text text-uppercase">hobbies</div>
                <p class="para mb-1">
                  Cricket<br />
                  Football <br />
                  Watching Movies<br />
                  Travel<br />
                </p>
              </div>
            </div>
            <div class="right-side d-inline-block m-0 p-0 align-top">
              <h2 class="name text-uppercase ml-3 my-2">${options.name}</h2>
              <div class="contact ml-3 mt-3">
                <div class="heading-text text-uppercase">About Me</div>
                <p class="para mb-1">
                  ${options.about}
                </p>
              </div>
              <div class="personal ml-3 mt-3">
                <div class="heading-text text-uppercase">Personal Informations</div>
                <table class="per-info">
                  <tbody>
                    <tr class="border">
                      <td>Father's Name</td>
                      <td>${options.f_name}</td>
                    </tr>
                    <tr class="border">
                      <td>Mother's Name</td>
                      <td>${options.m_name}</td>
                    </tr>
                    <tr class="border">
                      <td>Date of Birth</td>
                      <td>${options.birth}</td>
                    </tr>
                    <tr class="border">
                      <td>Permanent Address</td>
                      <td>${options.address}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="education ml-3 mt-3">
                <div class="heading-text text-uppercase">
                  Educational informations
                </div>
                <table class="per-info">
                  <tbody>
                    <tr class="border">
                      <td>2016-2019</td>
                      <td>
                        bachelor of Business Administration <br />
                        CGPA 3.03 <br />
                        Major in Finance <br />
                        Daffodil international University
                      </td>
                    </tr>
                    <tr class="border">
                      <td>2013-2015</td>
                      <td>
                        HSC <br />
                        CGPA 3.33 <br />
                        Business Studies <br />
                        Singra Damdama Pilot School and College
                      </td>
                    </tr>
                    <tr class="border">
                      <td>2008-2013</td>
                      <td>
                        SSC <br />
                        CGPA 3.63 <br />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="key-skills ml-3 mt-3">
                <div class="heading-text text-uppercase">Key Skills</div>
                <ul class="pl-1">
                  <li>Understanding accounting and financial principles</li>
                  <li>Computer literate and highly proficient in MS excel</li>
                  <li>Strong analytical and problem-solving skills</li>
                  <li>Excellent interpersonal, cross-cultural</li>
                  <li>Encouraging and inspiring to others</li>
                  <li>Verbal and written communications skill</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
          integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"
          integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy"
          crossorigin="anonymous"
        ></script>
      </body>
    </html>
  `;
};

module.exports = dynamicResume;
